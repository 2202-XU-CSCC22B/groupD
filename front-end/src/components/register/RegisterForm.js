import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsFillCheckCircleFill } from "react-icons/bs";
import axios from "axios";
import { titleCase } from "@modules/utils/functions";

const schema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .min(2, "Name too short"),
  lastName: z
    .string()
    .nonempty("Last name is required")
    .min(2, "Last name too short"),
  email: z.string().nonempty("Email is required").email(),
  gender: z.nativeEnum(["Male", "Female", "Others"]),
  weight: z.coerce.number(),
  height: z.coerce.number(),
  phone: z.string().optional(),
  address: z.string().optional(),
  birthday: z.coerce.date(),
  occupation: z.string().optional(),
});

const RegisterForm = () => {
  const [conflict, setConflict] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // POST function here
  const onSubmit = async (data) => {
    // const refine = {
    //   ...data,
    //   firstName: titleCase(data.firstName),
    //   lastName: titleCase(data.lastName),
    //   email: data.email.toLowerCase(),
    //   ...(data.address && { address: titleCase(data.address) }),
    //   ...(data.occupation && { occupation: titleCase(data.occupation) }),
    // };


    const formattedData = {
      name: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      contactDetails: {
        email: data.email,
        phone: data.phone,
      },
      address: data.address,
      weight: data.weight,
      height: data.height,
      occupation: data.occupation,
      birthDetails: {
        birthday: data.birthday.toISOString().split("T")[0],
      },
      membershipDetails: {},
    };



    fetch(process.env.create_members_api, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formattedData),
      }).then(response => {
        console.log('Response status code:', response.status);
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'Request failed');
          });
        }
      })
          .then(data => {
            console.log('Response data:', data);
            alert(data.message);
          })
          .catch(error => {
            console.log(error)
            alert(error.message);
            console.log('Error:', error);
          });


    // handle submit logic here
  };

  // input css in globals.css
  const inputGroupClassName = "reg-form flex flex-col gap-1 text-gray-900";

  // email sent state (important: update for correct boolean)
  const [isSent, setIsSent] = useState(false);

  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col gap-2 px-4 py-8 max-w-lg border rounded-lg  mx-auto w-full sm:w-2/3 lg:px-8 lg:py-12"
    >
      <div className=" space-y-6">
        {/* personal information */}
        <div className=" space-y-2">
          <h1 className=" text-gray-500 text-center mb-8 text-sm tracking-wide uppercase font-medium">
            Personal Information
          </h1>

          {/* first name & last name */}
          <div className=" flex flex-col min-[400px]:flex-row min-[400px]:gap-4 justify-between">
            <div className={`${inputGroupClassName} min-[400px]:w-1/2`}>
              <label htmlFor="firstName">First name *</label>
              <input
                className={`${errors?.firstName && "border-rose-600"}`}
                id="firstName"
                {...register("firstName")}
              />
              <small
                className={` text-rose-600 ${
                  errors.firstName ? "visible" : "invisible"
                }`}
              >
                {errors.firstName ? errors.firstName.message : "."}
              </small>
            </div>

            <div className={`${inputGroupClassName} min-[400px]:w-1/2`}>
              <label htmlFor="lastName">Last name *</label>
              <input
                id="lastName"
                {...register("lastName")}
                className={`${errors?.lastName && "border-rose-600"}`}
              />
              <small
                className={` text-rose-600 ${
                  errors.lastName ? "visible" : "invisible"
                }`}
              >
                {errors.lastName ? errors.lastName.message : "."}
              </small>
            </div>
          </div>

          {/* weight & height */}
          <div className=" flex flex-col min-[400px]:flex-row min-[400px]:gap-4 justify-between">
            <div className={`${inputGroupClassName} min-[400px]:w-1/2`}>
              <label htmlFor="weight">
                Weight <span className=" text-gray-400">(kg)</span>
              </label>
              <input
                type="number"
                id="weight"
                {...register("weight")}
                className={`${errors?.weight && "border-rose-600"}`}
              />
              <small
                className={` text-rose-600 ${
                  errors.weight ? "visible" : "invisible"
                }`}
              >
                {errors.weight ? errors.weight.message : "."}
              </small>
            </div>

            <div className={`${inputGroupClassName} min-[400px]:w-1/2`}>
              <label htmlFor="height">
                Height <span className=" text-gray-400">(cm)</span>
              </label>
              <input
                type="number"
                id="height"
                {...register("height")}
                className={`${errors?.height && "border-rose-600"}`}
              />
              <small
                className={` text-rose-600 ${
                  errors.height ? "visible" : "invisible"
                }`}
              >
                {errors.height ? errors.height.message : "."}
              </small>
            </div>
          </div>

          <div className=" flex flex-col min-[400px]:flex-row min-[400px]:gap-4 justify-between">
            {/* gender */}
            <div className={`${inputGroupClassName} min-[400px]:w-1/2`}>
              <label htmlFor="gender">Gender *</label>
              <select
                className={`h-[34px] bg-white text-gray-900 border indent-1 outline-none ${
                  errors?.gender && "border-rose-600"
                }`}
                id="gender"
                {...register("gender")}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <small
                className={` text-rose-600 ${
                  errors.gender ? "visible" : "invisible"
                }`}
              >
                {errors.gender ? errors.gender.message : "."}
              </small>
            </div>

            {/* birthday */}
            <div className={`${inputGroupClassName} min-[400px]:w-1/2`}>
              <label htmlFor="birthday">Birthday *</label>
              <input
                max={new Date().toISOString().split("T")[0]}
                type="date"
                id="birthday"
                {...register("birthday")}
                className={`${errors?.lastName && "border-rose-600"}`}
              />
              <small
                className={` text-rose-600 ${
                  errors.birthday ? "visible" : "invisible"
                }`}
              >
                {errors.birthday ? errors.birthday.message : "."}
              </small>
            </div>
          </div>
        </div>

        {/* contact information */}
        <div className=" space-y-2">
          <h1 className=" text-gray-500 text-center mb-8 text-sm tracking-wide uppercase font-medium">
            Contact Information
          </h1>

          <div className=" flex flex-col min-[400px]:flex-row min-[400px]:gap-4 justify-between">
            <div className={`${inputGroupClassName} min-[400px]:w-1/2`}>
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                {...register("email")}
                className={`${errors?.email && "border-rose-600"}`}
              />
              <small
                className={` text-rose-600 ${
                  errors.email ? "visible" : "invisible"
                } ${conflict && "visible"}`}
              >
                {errors.email ? errors.email.message : "."}
                {conflict && conflict}
              </small>
            </div>

            <div className={`${inputGroupClassName} min-[400px]:w-1/2`}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                {...register("phone")}
                className={`${errors?.phone && "border-rose-600"}`}
              />
              <small
                className={` text-rose-600 ${
                  errors.phone ? "visible" : "invisible"
                }`}
              >
                {errors.phone ? errors.phone.message : "."}
              </small>
            </div>
          </div>
        </div>

        {/* other information */}
        <div className=" space-y-2">
          <h1 className=" text-gray-500 text-center mb-8 text-sm tracking-wide uppercase font-medium">
            Other Information
          </h1>

          {/* address */}
          <div className={inputGroupClassName}>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              {...register("address")}
              className={`${errors?.address && "border-rose-600"}`}
              placeholder="Zone 1, Bulua"
            />
            <small
              className={` text-rose-600 ${
                errors.address ? "visible" : "invisible"
              }`}
            >
              {errors.address ? errors.address.message : "."}
            </small>
          </div>

          {/* occupation */}
          <div className={inputGroupClassName}>
            <label htmlFor="occupation">Occupation</label>
            <input
              id="occupation"
              {...register("occupation")}
              className={`${errors?.occupation && "border-rose-600"}`}
              placeholder="Software Engineer"
            />
            <small
              className={` text-rose-600 ${
                errors.occupation ? "visible" : "invisible"
              }`}
            >
              {errors.occupation ? errors.occupation.message : "."}
            </small>
          </div>
        </div>

        <input
          className="text-white bg-gray-900 py-2 rounded w-full cursor-pointer hover:bg-gray-800 transition-all duration-300 ease-in-out"
          type="submit"
          value="Register"
        />
      </div>
      <div
        className={`py-2 px-4 w-full text-emerald-700 justify-center  rounded bg-emerald-100 flex items-center gap-2 ${
          isSent ? "visible" : "invisible"
        }`}
      >
        <BsFillCheckCircleFill />
        <small className=" text-sm">
          {isSent ? "Confirmation sent to your email." : "."}
        </small>
      </div>
    </form>
  );
};

export default RegisterForm;
