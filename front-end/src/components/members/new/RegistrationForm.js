import React, { useState } from 'react';
import { TextField, Grid, Button, Typography } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const RegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [brgy, setBrgy] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [birthDay, setBirthday] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [occupation, setOccupation] = useState('');
    const currentDate = new Date();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access the form data using the state variables
        console.log({
            firstName,
            lastName,
            email,
            weight,
            height,
            brgy,
            contactNumber,
            birthday,
        });
    };

    return (

            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <TextField
                        label="First Name"
                        fullWidth
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        label="Last Name"
                        fullWidth
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Email Address"
                        type="email"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        label="Brgy"
                        fullWidth
                        value={brgy}
                        onChange={(e) => setBrgy(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        label="Weight"
                        fullWidth
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        label="Height"
                        fullWidth
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </Grid>

                <Grid item xs={6} sm={6}>
                    <TextField
                        label="Contact Number"
                        fullWidth
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        label="Occupation"
                        fullWidth
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                   <div>
                      <Typography> Date of birth </Typography>
                       <DatePicker
                       selected={birthDay}
                       onChange={(date) => setBirthday(date)}
                       style={{
                           height: "100px"
                       }}
                       />
                   </div>



                </Grid>
                <Grid item xs={12} sm={6}>
                    <div>
                        <Typography> Membership Date</Typography>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            style={{
                                height: "100px"
                            }}
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>

    );
};

export default RegistrationForm;
