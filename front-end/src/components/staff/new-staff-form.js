import { zodResolver } from "@hookform/resolvers/zod";
import { createNewStaff } from "@modules/utils/axiosApi";
import { QueryClient, useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  birthday: z.coerce.date(),
  dateStarted: z.coerce.date(),
  email: z.string().email("Invalid email format"),
  gender: z.enum(["MALE", "FEMALE", "OTHERS"]),
  phone: z.string().nonempty("Phone number is required"),
  position: z.string().nonempty("Position is required"),
  address: z.string().nonempty("Address is required"),
});

const NewStaffForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const queryClient = new QueryClient();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const newStaffMutation = useMutation({
    mutationFn: createNewStaff,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all_staff"] });
      setIsLoading(false);
      setShowModal(false);
    },
    onError: (error) => {
      alert("error: error", error);
      setIsLoading(false);
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formattedData = {
      ...data,
      birthday: data.birthday.toISOString().split("T")[0],
      dateStarted: data.dateStarted.toISOString().split("T")[0],
      status: "ACTIVE",
      transactions: [],
      name: `${data.lastName}, ${data.firstName}`,
    };

    // Simulating loading for at least 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    newStaffMutation.mutate(formattedData);
  };

  return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-4">
            {/* first name */}
            <section className="new-staff-form">
              <label htmlFor="firstName">First name</label>
              <input
                  name="firstName"
                  className={errors.firstName && "border-rose-500 outline-rose-500"}
                  {...register("firstName")}
              />
            </section>
            {/* last name */}
            <section className="new-staff-form">
              <label htmlFor="lastName">Last name</label>
              <input
                  name="lastName"
                  className={errors.lastName && "border-rose-500 outline-rose-500"}
                  {...register("lastName")}
              />
            </section>
          </div>
          {/* gender */}
          <section className="new-staff-form">
            <label htmlFor="gender">Gender</label>
            <select
                name="gender"
                className={errors.gender && "border-rose-500 outline-rose-500"}
                {...register("gender")}
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHERS">Others</option>
            </select>
          </section>

          {/* address */}
          <section className="new-staff-form">
            <label htmlFor="address">Address</label>
            <input
                name="address"
                className={errors.address && "border-rose-500 outline-rose-500"}
                {...register("address")}
            />
          </section>

          <div className="flex gap-4">
            {/* birthday */}
            <section className="new-staff-form">
              <label htmlFor="birthday">Birthday</label>
              <input
                  type="date"
                  name="birthday"
                  className={errors.birthday && "border-rose-500 outline-rose-500"}
                  {...register("birthday")}
              />
            </section>
            {/* dateStarted */}
            <section className="new-staff-form">
              <label htmlFor="dateStarted">Date Started</label>
              <input
                  type="date"
                  name="dateStarted"
                  className={errors.dateStarted && "border-rose-500 outline-rose-500"}
                  {...register("dateStarted")}
              />
            </section>
          </div>
          {/* email */}
          <section className="new-staff-form">
            <label htmlFor="email">Email</label>
            <input
                name="email"
                className={errors.email && "border-rose-500 outline-rose-500"}
                {...register("email")}
            />
          </section>
          {/* phone */}
          <section className="new-staff-form">
            <label htmlFor="phone">Phone</label>
            <input
                name="phone"
                className={errors.phone && "border-rose-500 outline-rose-500"}
                {...register("phone")}
            />
          </section>
          {/* position */}
          <section className="new-staff-form">
            <label htmlFor="position">Position</label>
            <select
                name="position"
                className={errors.position && "border-rose-500 outline-rose-500"}
                {...register("position")}
            >
              <option value="">--Please choose an option--</option>
              <option value="Owner">Owner</option>
              <option value="Trainer">Trainer</option>
              <option value="Staff">Staff</option>
            </select>
          </section>

          <input
              type="submit"
              value={isLoading ? "Loading..." : "Add Staff"}
              className={
                isLoading
                    ? "px-4 py-2 rounded bg-gray-400 text-white text-sm w-1/2 max-w-[226px] cursor-not-allowed"
                    : "px-4 py-2 rounded bg-blue-600 text-white text-sm w-1/2 max-w-[226px] cursor-pointer hover:bg-blue-500 hover:scale-95 transition-all duration-300 ease-in-out"
              }
          />
        </form>

        {/* Modal */}
        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded">
                <p>Form submitted successfully!</p>
                <button
                    onClick={() => setShowModal(false)}
                    className="mt-4 px-4 py-2 rounded bg-blue-600 text-white text-sm cursor-pointer hover:bg-blue-500 transition-all duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
        )}
      </>
  );
};

export default NewStaffForm;
