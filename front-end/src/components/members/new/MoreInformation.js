import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, FormControlLabel, Switch, Grid } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "@modules/components/ui/MyButton";
import MyCustomAccordion from "@modules/components/members/new/MyCustomAccordion";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export const updateMember = async (data) => {
  try {
    const res = await axios.put(
      process.env.update_member_api.replace("{id}", data.id),
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "PUT",
        },
      }
    );
    return res;
  } catch (error) {
    console.log("error here at UPDATE MEMBER");
    console.log(error);
    return error;
  }
};

const MoreInformation = ({ data, refetchTransactions }) => {
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState(data);
  const [isLoading, setLoading] = useState(false);
  const queryClient = new QueryClient();

  const formattedData = {
    id: data?.id,
    firstName: formData?.firstName,
    lastName: formData?.lastName,
    phone: formData?.phone,
    email: formData?.email,
    gender: formData?.gender,
    address: formData?.address,
    weight: formData?.weight,
    height: formData?.height,
    occupation: formData?.occupation,
    birthday: formData?.birthday,
  };

  const editMembersMutation = useMutation({
    mutationFn: updateMember,
    onSuccess: () => {
      setLoading(false);
      queryClient.invalidateQueries({ queryKey: ["all_members"] });
      refetchTransactions();
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  };

  const handleToggleEdit = () => {
    setEditable(!editable);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      editMembersMutation.mutate(formattedData);
    }, 1000);
  };

  return (
    <Grid
      container
      spacing={1}
      className=" max-w-md border px-4 py-6 !rounded-lg"
    >
      <Grid item xs={12}>
        <FormControlLabel
          control={<Switch checked={editable} onChange={handleToggleEdit} />}
          label="Edit"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={"firstName"}
          label="First Name"
          name="firstName"
          value={formData?.firstName}
          onChange={handleInputChange}
          disabled={!editable}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Last Name"
          name="lastName"
          id={"lastName"}
          value={formData?.lastName}
          disabled={!editable}
          fullWidth
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id={"email"}
          label="Email"
          name="email"
          value={formData?.email}
          onChange={handleInputChange}
          disabled={!editable}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={"address"}
          label="Address"
          name="address"
          value={formData?.address}
          onChange={handleInputChange}
          disabled={!editable}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={"weight"}
          label="Weight"
          name="weight"
          value={formData?.weight}
          onChange={handleInputChange}
          disabled={!editable}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={"height"}
          label="Height"
          name="height"
          value={formData?.height}
          onChange={handleInputChange}
          disabled={!editable}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id={"phone"}
          label="Contact Number"
          name="phone"
          value={formData?.phone}
          onChange={handleInputChange}
          disabled={!editable}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="occupation"
          label="Occupation"
          name="occupation"
          value={formData?.occupation}
          onChange={handleInputChange}
          disabled={!editable}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} className="">
        <div
          className={`${
            editable ? "border-gray-400 " : "border-gray-200"
          } rounded  border relative py-[15px] px-2`}
        >
          <label
            htmlFor="birthday"
            className={`${
              editable ? "text-gray-500" : "text-gray-300"
            } text-sm   absolute -top-2 left-3  z-50 bg-[#F5F5F5] px-1`}
          >
            Birthday
          </label>
          <DatePicker
            id="birthday"
            label="Birthday"
            name="birthday"
            value={formData?.birthday}
            onChange={(date) => handleDateChange(date, "birthday")}
            disabled
            showYearDropdown
            className={"text-gray-400"}
            fullWidth
          />
        </div>
      </Grid>

      <Grid className=" w-full space-y-4">
        <MyButton disabled={!editable} onClick={(e) => onSubmit(e)}>
          Save Changes
        </MyButton>
        {isLoading && (
          <div className="text-center mt-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <MyCustomAccordion
          data={[
            {
              title: "MEMBERSHIP",
              status: formData?.membershipStatus,
              startDate: formData?.membershipStartDate,
              endDate: formData?.membershipEndDate,
            },
            {
              title: "MONTHLY",
              status: formData?.monthlySubscriptionStatus,
              startDate: formData?.monthlySubscriptionStartDate,
              endDate: formData?.monthlySubscriptionEndDate,
            },
            {
              title: "STUDENT",
              status: formData?.studentStatus,
              startDate: formData?.studentStartDate,
              endDate: formData?.studentEndDate,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};

MoreInformation.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    weight: PropTypes.string,
    height: PropTypes.string,
    phone: PropTypes.string,
    occupation: PropTypes.string,
    birthday: PropTypes.instanceOf(Date),
    active: PropTypes.bool,
    membershipStartDate: PropTypes.instanceOf(Date),
    membershipEndDate: PropTypes.instanceOf(Date),
    monthlySubscriptionStartDate: PropTypes.instanceOf(Date),
    monthlySubscriptionEndDate: PropTypes.instanceOf(Date),
    studentStartDate: PropTypes.instanceOf(Date),
    studentEndDate: PropTypes.instanceOf(Date),
    membershipStatus: PropTypes.string,
    monthlySubscriptionStatus: PropTypes.string,
    studentStatus: PropTypes.string,
  }).isRequired,
};

export default MoreInformation;
