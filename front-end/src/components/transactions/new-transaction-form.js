import React, { useState } from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RecipientSelect from "../layouts/dashboard/recipient-select";

const members = [
  {
    value: "none",
    label: "None",
  },
  {
    value: 456,
    label: "John Doe",
  },
  {
    value: 789,
    label: "Jane Smith",
  },
];

const staffs = [
  {
    value: "none",
    label: "None",
  },
  {
    value: 456,
    label: "John Doe",
  },
  {
    value: 789,
    label: "Jane Smith",
  },
];

const schema = z.object({
  date: z.coerce.date(),
  description: z.string().optional(),
  paymentMethod: z.enum(["Cash", "GCash"]),
  transactionType: z.enum([
    "Sales",
    "CashOut",
    "Salary",
    "Utilities",
    "Maintenance",
  ]),
  value: z.coerce.number().min(1, "Value too small").nonnegative(),
  memberID: z
    .union([z.coerce.number(), z.literal("none")])
    .nullable()
    .optional(),
  staffID: z
    .union([z.coerce.number(), z.literal("none")])
    .nullable()
    .optional(),
});

const NewTransactionForm = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      date: data.date.toISOString().split("T")[0],
      memberID:
        selectedOption === "staffs" || data.memberID === "none"
          ? null
          : data.memberID,
      staffID:
        selectedOption === "members" || data.staffID === "none"
          ? null
          : data.staffID,
    };

    // POST logic here
    console.log(formattedData);
  };

  const [selectedOption, setSelectedOption] = useState("staffs");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    reset();
  };

  const inputGroupClass =
    "new-transaction-group-input bg-white flex flex-col w-full";
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-50 pt-12  min-[450px]:pt-4"
    >
      <button
        onClick={() => setIsOpen(false)}
        className=" text-sm underline hover:bg-blue-100 text-blue-600 font-medium px-2 ml-2 py-1"
      >
        Cancel
      </button>
      <div className="space-y-4 px-4 bg-gray-50 py-8">
        <RecipientSelect
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <div className="flex flex-col min-[450px]:flex-row gap-4 bg-gray-50">
          {selectedOption === "staffs" ? (
            <section className={`${inputGroupClass} !bg-gray-50`}>
              <label htmlFor="staffID" className=" bg-gray-50">
                Staff
              </label>
              <select
                id="staffID"
                className=" bg-gray-50"
                {...register("staffID")}
              >
                {staffs.map((staff) => (
                  <option
                    className=" bg-gray-50"
                    key={staff.value}
                    value={staff.value}
                  >
                    {staff.label}
                  </option>
                ))}
              </select>
            </section>
          ) : (
            <section className={`${inputGroupClass} !bg-gray-50`}>
              <label htmlFor="memberID" className=" bg-gray-50">
                Member
              </label>
              <select
                id="memberID"
                className=" bg-gray-50"
                {...register("memberID")}
              >
                {members.map((member) => (
                  <option
                    className=" bg-gray-50"
                    key={member.value}
                    value={member.value}
                  >
                    {member.label}
                  </option>
                ))}
              </select>
            </section>
          )}

          {/* date */}
          <section className={inputGroupClass}>
            <label htmlFor="transactionDate" className=" bg-gray-50">
              Date
            </label>
            <input
              id="transactionDate"
              defaultValue={new Date().toISOString().split("T")[0]}
              type="date"
              {...register("date")}
              className=" bg-gray-50"
            />
          </section>
        </div>

        <section className={inputGroupClass}>
          <label htmlFor="transactionDescription" className=" bg-gray-50">
            Description
          </label>
          <input
            id="transactionDescription"
            className=" bg-gray-50"
            {...register("description")}
            placeholder=" Monthly Gym Subscription"
          />
        </section>
      </div>

      <div className=" space-y-4 px-4 py-8 bg-white">
        <div className=" flex flex-col min-[450px]:flex-row gap-4">
          <section className={inputGroupClass}>
            <label htmlFor="paymentMethod">Method</label>
            <select id="paymentMethod" {...register("paymentMethod")}>
              {schema.shape.paymentMethod._def.values.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </section>

          <section className={inputGroupClass}>
            <label htmlFor="transactionType">Type</label>
            <select id="transactionType" {...register("transactionType")}>
              {schema.shape.transactionType._def.values.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </section>
        </div>

        <section className={`${inputGroupClass} w-1/2 max-w-[226px]`}>
          <label htmlFor="transactionValue">Amount</label>
          <input
            id="transactionValue"
            type="number"
            className={
              errors.value &&
              "border-rose-500 outline-rose-500 focus:border-rose-500"
            }
            {...register("value")}
          />
        </section>
        <input
          type="submit"
          value="Add Transaction"
          className=" px-4 py-2 rounded bg-blue-600 text-white text-sm w-1/2 max-w-[226px] cursor-pointer hover:bg-blue-500 hover:scale-95 transition-all duration-300 ease-in-out"
        />
      </div>
    </form>
  );
};

export default NewTransactionForm;
