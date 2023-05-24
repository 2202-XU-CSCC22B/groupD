import React, {useEffect, useState} from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RecipientSelect from "../layouts/dashboard/recipient-select";
import {Paper} from "@mui/material";
import PropTypes from "prop-types";
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar"




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

const NewTransactionForm = ({ setIsOpen, onAction }) => {
  const [staffs, setStaff] = useState([]);
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.retrieve_members_api, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET'
          }
        }); // Replace 'API_ENDPOINT' with the actual endpoint URL
        const jsonData = await response.json();
        setMembers(jsonData);


      } catch (error) {
        console.error("Error fetching row:", error);

      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(process.env.retrieve_all_staff_api, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET'
          }
        }); // Replace 'API_ENDPOINT' with the actual endpoint URL
        const jsonData = await response.json();
        setStaff(jsonData.all);

      } catch (error) {
        console.error("Error fetching row:", error);
      }
    };

    fetchData();
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formattedData = {
      ...data,
      date: data.date.toISOString().split("T")[0],
    };

    console.log(formattedData);
    try {
      const response = await fetch(process.env.post_new_transaction_api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'POST'
        },
        body: JSON.stringify(formattedData) // body data type must match "Content-Type" header
      });

      // handle response
      if (response.ok) {
        const jsonResponse = await response.json();
        // You can add your logic here using 'jsonResponse'
        onAction(jsonResponse.id);
        console.log(jsonResponse);
      } else {
        console.error("Error: ", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }finally {
      setIsLoading(false);
      setIsOpen(false);
    }

    console.log(formattedData);

  };

  const [selectedOption, setSelectedOption] = useState(staffs[0]);
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
                      required
                      id="staffID"
                      className=" bg-gray-50"
                      {...register("staffID")}
                  >
                    <option hidden></option>

                    {staffs.map((staff) => (
                        <option
                            className=" bg-gray-50"
                            key={staff.id}
                            value={staff.id}
                        >
                          {staff.name}
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
                      required
                      id="memberID"
                      className=" bg-gray-50"
                      {...register("memberID")}
                  >
                    <option hidden></option>
                    {members.map((member) => (
                        <option
                            className=" bg-gray-50"
                            key={member.id}
                            value={member.id}
                        >

                          {member.name}

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
              className={
                isLoading
                    ? " px-4 py-2 rounded bg-gray-400 text-white text-sm w-1/2 max-w-[226px] cursor-not-allowed"
                    : " px-4 py-2 rounded bg-blue-600 text-white text-sm w-1/2 max-w-[226px] cursor-pointer hover:bg-blue-500 hover:scale-95 transition-all duration-300 ease-in-out"
              }
          />
        </div>
      </form>
  );
};

export default NewTransactionForm;


NewTransactionForm.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  onAction : PropTypes.func
};