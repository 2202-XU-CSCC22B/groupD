import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Grid,
  Accordion, InputLabel, FormControl, MenuItem,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "@modules/components/ui/MyButton";
import MyCustomAccordion from "@modules/components/members/new/MyCustomAccordion";
import Select from "react-select";

const MoreStaffInfo = ({ data }) => {
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState(data);
  const [isLoading, setLoading] = useState(false);

  const formattedData = {
    id: data.id,
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    email: formData.email,
    gender: formData.gender,
    address: formData.address,
    weight: formData.weight,
    height: formData.height,
    occupation: formData.occupation,
    birthday: formData.birthday,
    membershipStartDate: data.membershipStartDate,
    membershipEndDate: data.membershipEndDate,
    monthlySubscriptionStartDate: data.monthlySubscriptionStartDate,
    monthlySubscriptionEndDate: data.monthlySubscriptionEndDate,
    studentStartDate: data.studentStartDate,
    studentEndDate: data.studentEndDate,
    membershipStatus: data.membershipStatus,
    monthlySubscriptionStatus: data.monthlySubscriptionStatus,
    studentStatus: data.studentStatus,
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

  const handleSaveChanges = () => {
    setLoading(true); // Start the loading animation

    // Simulate an asynchronous API call
    setTimeout(() => {
      // Send the updated data to the API endpoint for saving
      // Here, you would typically use a fetch or axios to make the API call
      // Replace <API_ENDPOINT> with your actual endpoint
      alert(formData.email);
      fetch(process.env.update_member_api.replace("{id}", data.id), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      })
        .then((response) => {
          // Handle the API response if needed
          console.log(response);
          console.log("Data saved successfully!");
          alert("Changes were successful");
          setLoading(false); // Stop the loading animation
        })
        .catch((error) => {
          // Handle any errors that occurred during the API call
          console.error("Error saving data:", error);

          setLoading(false); // Stop the loading animation
        });
    }, 2000); // Simulating 1 second delay for the API call
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
        <MyButton disabled={!editable} onClick={handleSaveChanges}>
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
    gender: PropTypes.string
  }).isRequired,
};

export default MoreStaffInfo;
