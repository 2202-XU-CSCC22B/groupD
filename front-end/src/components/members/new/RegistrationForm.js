import React, { useState } from 'react';
import { TextField, Grid, Button, Typography } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {postApi} from "@modules/utils/api";
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
    //errors

    const [emailError, setEmailError] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();



        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            brgy: brgy,
            weight: weight,
            height: height,
            contactNumber: contactNumber,
            occupation: occupation,
            birthday: birthDay,
            startDate: startDate
        };

        fetch("http://localhost:8080/member/new", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data),
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
                setEmailError(error.message);
                alert(error.message);
                console.log('Error:', error);
            });

    };
    // Function to create an account



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
                        error={emailError !== ''}
                        helperText={emailError}
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
                    <Button type="submit" variant="contained" color="primary" onClick={(e) => handleFormSubmit(e)}>
                        Submit
                    </Button>
                </Grid>
            </Grid>

    );
};

export default RegistrationForm;
