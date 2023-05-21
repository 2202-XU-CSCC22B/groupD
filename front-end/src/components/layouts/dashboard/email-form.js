import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Select from "react-select";
import "react-quill/dist/quill.snow.css";
import RecipientSelect from "./recipient-select";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });



const staffs = [
  { value: "a@gmail.com", label: "staff1" },
  { value: "b@gmail.com", label: "staff2" },
  { value: "c@gmail.com", label: "staff3" },
];

const members = [
  { value: "a@gmail.com", label: "member1" },
  { value: "b@gmail.com", label: "member2" },
  { value: "c@gmail.com", label: "member3" },
];

const formSchema = z.object({
  recipients: z.array(z.string()).nonempty("Choose recipient"),
  subject: z.string().nonempty("Enter subject"),
  message: z.string().nonempty("Enter message"),
});

export default function EmailForm() {
  const [allStaffData, setAllStaffData] = useState([]);
  const [allMemberData, setALlMemberData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.retrieve_all_staff_api);
        if (!response.ok) {
          throw new Error('Failed to fetch staff data');
        }
        const data = await response.json();
        setAllStaffData(data.all);
        setStaffData(staffData);
        setAllOwnerData(data.owner);
        setAllTrainerData(data.trainer);
        console.log(data)
        console.log(staffData);
        console.log(allOwnerData);
        console.log(allTrainerData);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.retrieve_members_api);
        if (!response.ok) {
          throw new Error('Failed to fetch staff data');
        }
        const data = await response.json();
          console.log(data)
        setALlMemberData(data)
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchData();
  }, []);

  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [selectedOption, setSelectedOption] = useState("staffs");

  const options = [
    { value: "all", label: "Select All" }, // Option to select all recipients
    ...(selectedOption === "staffs" ? allStaffData : members),
  ];
  const [selectValue, setSelectValue] = useState([]);
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setSelectValue([]);
    setValue("recipients", []);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-lg space-y-6">
      {/* Recipients */}
      <div className=" space-y-8">
        <RecipientSelect
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <div className=" space-y-1">
          <div className=" flex w-full justify-between items-end ">
            <h1 className="text-sm uppercase font-bold tracking-wider text-gray-600">
              Recipient
            </h1>
            <small
              className={`text-rose-500 text-xs ${
                errors.recipients ? "visible" : "invisible"
              }`}
            >
              {errors.recipients?.message}
            </small>
          </div>

          <Controller
            name="recipients"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                {...register("recipients")}
                autoFocus={false}
                options={options}
                isMulti
                onChange={(values) => {
                  if (values.some((option) => option.value === "all")) {
                    // If "Select All" is selected, set all recipients as selected
                    field.onChange(
                      options
                        .filter((option) => option.value !== "all")
                        .map((option) => option.value)
                    );
                  } else {
                    field.onChange(values?.map(({ value }) => value));
                  }
                }}
                value={options?.filter((option) =>
                  field.value.includes(option.value)
                )}
              />
            )}
          />
        </div>
      </div>

      {/* Email subject */}
      <div className=" space-y-1">
        <div className=" flex w-full justify-between items-end">
          <h1 className="text-sm uppercase font-bold tracking-wider text-gray-600">
            Subject
          </h1>
          <small
            className={`text-rose-500 text-xs ${
              errors.subject ? "visible" : "invisible"
            }`}
          >
            {errors.subject?.message}
          </small>
        </div>
        <input
          type="text"
          {...register("subject")}
          className=" w-full bg-inherit border px-3 py-1 border-gray-300 rounded"
        />
      </div>

      {/* Message */}
      <div className=" space-y-1">
        <div className=" flex w-full justify-between items-end">
          <h1 className="text-sm uppercase font-bold tracking-wider text-gray-600">
            Message
          </h1>
          <small
            className={`text-rose-500 text-xs ${
              errors.message ? "visible" : "invisible"
            }`}
          >
            {errors.message?.message}
          </small>
        </div>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactQuill
              className=" rounded"
              theme="snow"
              classNameName="my-editor"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <input
        type="submit"
        value="Send Email"
        className=" w-full py-2 bg-blue-700 text-white cusror-pointer hover:scale-95 hover:bg-blue-600 transition-all duration-300 ease-in-out"
      />
    </form>
  );
}
