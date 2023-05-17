import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {TextField, Button, FormControlLabel, Switch, Grid} from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const MoreInformation = ({ data }) => {
    const [editable, setEditable] = useState(false);
    const [formData, setFormData] = useState(data);

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
        // Send the updated data to the API endpoint for saving
        // Here, you would typically use a fetch or axios to make the API call
        // Replace <API_ENDPOINT> with your actual endpoint
        fetch('<API_ENDPOINT>', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then((response) => {
                // Handle the API response if needed
                console.log('Data saved successfully!');
            })
            .catch((error) => {
                // Handle any errors that occurred during the API call
                console.error('Error saving data:', error);
            });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={!editable}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={!editable}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!editable}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    disabled={!editable}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    disabled={!editable}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Height"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    disabled={!editable}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Contact Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!editable}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    disabled={!editable}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <DatePicker
                    label="Birthday"
                    name="birthday"
                    value={formData.birthday}
                    onChange={(date) => handleDateChange(date, 'birthday')}
                    disabled={!editable}
                    showYearDropdown
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <DatePicker
                    label="Start Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={(date) => handleDateChange(date, 'startDate')}
                    disabled={!editable}
                    showYearDropdown
                    fullWidth
                />
            </Grid>
            {/* Add more Grid items for other data fields */}
            <Grid item xs={12}>
                <FormControlLabel
                    control={<Switch checked={editable} onChange={handleToggleEdit} />}
                    label="Edit"
                />
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" disabled={!editable} onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary">
                    Enroll Monthly
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary">
                    Enroll Muay-Thai
                </Button>
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
        startDate: PropTypes.instanceOf(Date),
        expirationDate: PropTypes.instanceOf(Date),
        membershipStatus: PropTypes.string,
        active: PropTypes.bool,
    }).isRequired,
};

export default MoreInformation;
