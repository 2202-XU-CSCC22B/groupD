import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, FormControlLabel, Switch, Grid } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "@modules/components/ui/MyButton";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

export const updateStaff = async (data) => {
  try {
    const res = await axios.put(
      process.env.update_staff_api.replace("{id}", data.id),
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
    console.log(error);
    return error;
  }
};

const MoreStaffInfo = ({ data, refetchTransaction }) => {
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

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setLoading(true); // Start the loading animation

    setTimeout(() => {
      editStaffMutation.mutate(formattedData);
    }, 1000);
  };

  const editStaffMutation = useMutation({
    mutationFn: updateStaff,
    onSuccess: () => {
      setLoading(false);
      queryClient.invalidateQueries({ queryKey: ["all_staff"] });
      refetchTransaction();
    },
  });
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
          value={formData?.lastName}
          onChange={handleInputChange}
          disabled={!editable}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
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
          label="Position"
          name="position"
          value={formData?.position}
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
        <MyButton disabled={!editable} onClick={(e) => handleSaveChanges(e)}>
          Save Changes
        </MyButton>
        {isLoading && (
          <div className="text-center mt-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

MoreStaffInfo.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    weight: PropTypes.string,
    height: PropTypes.string,
    phone: PropTypes.string,
    position: PropTypes.string,
    birthday: PropTypes.instanceOf(Date),
    status: PropTypes.string,
    dateStarted: PropTypes.instanceOf(Date),
    gender: PropTypes.string,
  }).isRequired,
};

export default MoreStaffInfo;
