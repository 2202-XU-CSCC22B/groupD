import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Grid,
  Accordion,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "@modules/components/ui/MyButton";
import MyCustomAccordion from "@modules/components/members/new/MyCustomAccordion";
const MoreInformation = ({ data }) => {
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState(data);
  const [isLoading, setLoading] = useState(false);



  const formattedData = {
    name: {
      firstName: formData.firstName,
      lastName: formData.lastName,
    },
    contactDetails: {
      email: formData.email,
      phone: formData.phone,
    },
    address: formData.address,
    weight: parseFloat(formData.weight),
    height: parseFloat(formData.height),
    occupation: formData.occupation,
    birthDetails: {
      birthday: formData.birthday
    },
    membershipDetails: {
      membershipStartDate: formData.membershipStartDate,
      membershipEndDate: formData.membershipEndDate,
      monthlySubscriptionStartDate: formData.monthlySubscriptionStartDate,
      monthlySubscriptionEndDate: formData.monthlySubscriptionEndDate,
      studentStartDate: formData.studentStartDate,
      studentEndDate: formData.studentEndDate,
      membershipStatus: formData.membershipStatus,
      monthlySubscriptionStatus: formData.monthlySubscriptionStatus,
    },
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
      fetch(process.env.update_member_api, {
        method: "PUT",
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
    }, 100); // Simulating 1 second delay for the API call
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
      {/* <Grid item xs={12} sm={6}>
        <DatePicker
          label="Start Date"
          name="startDate"
          value={formData.startDate}
          onChange={(date) => handleDateChange(date, "startDate")}
          disabled={!editable}
          showYearDropdown
          fullWidth
          className=" border"
        />
      </Grid> */}
      {/* Add more Grid items for other data fields */}

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
        {/* <MyButton>Enroll Monthly</MyButton>

        <MyButton>Enroll Muay-Thai</MyButton> */}
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
    brgy: PropTypes.string,
    weight: PropTypes.string,
    height: PropTypes.string,
    contactNumber: PropTypes.string,
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
