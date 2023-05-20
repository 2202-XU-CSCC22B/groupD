import React, { useRef, useState } from 'react';
import { Modal, Box, Typography, TextField, Button, InputAdornment, CircularProgress } from '@mui/material';
import PendingRegistrationContent from "@modules/components/dashboard/PendingRegistrationContent.js";
import PropTypes from "prop-types";
import PaperDashboard from "@modules/components/PaperDashboard";

const AcceptMemberModal = (props) => {
    const [value, setValue] = useState("500"); // State to store the value of the TextField
    const [loading, setLoading] = useState(false); // State to track loading state
    const { open, handleClose, email, firstName, lastName, id, updateParentState, handleOpenSuccess } = props;

    const handleAccept = () => {
        setLoading(true); // Set loading state to true

        // Handle payment acceptance logic here
        fetch(process.env.validate_unverified_api.replace("{email}", email), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Additional headers if required
            },
        })
            .then(response => {
                if (response.ok) {
                    alert(props.email + " is registered!!!")

                    // Request was successful
                    console.log('Data updated successfully!');
                } else {
                    // Handle the error if the request was not successful
                    alert(process.env.validate_unverified_api.replace("{email}", email))
                    console.error('Error updating data:', response.statusText);
                }
            })
            .then(() => {
                updateParentState(props.email)
                handleOpenSuccess(true)
                handleClose()
            })
            .catch(error => {
                // Handle any network or fetch-related errors
                console.error('Error updating data:', error);
            })
            .finally(() => {
                setLoading(false); // Set loading state back to false

            });
    };

    const handleValueChange = (event) => {
        setValue(event.target.value.replace(/\D/g, '')); // Update the value in the state
    };

    const generateConfirmationMessage = () => {
        return (
            <div>
                <Typography variant="body1" component="div">
                    <strong>Email:</strong> {email}
                </Typography>
                <Typography variant="body1" component="div" sx={{ mt: 1 }}>
                    <strong>Full Name:</strong> {firstName} {lastName}
                </Typography>
            </div>
        );
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: 400,
                    backgroundColor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 8,
                }}
            >
                <Typography variant="h5" component="h2">
                    Membership Payment Form
                </Typography>
                <Typography sx={{ mt: 2 }}>{generateConfirmationMessage()}</Typography>
                <Box sx={{ mt: 2 }}>
                    <TextField
                        label="Amount"
                        value={value}
                        onChange={handleValueChange} // Update the state on change
                        inputMode="numeric"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Typography variant="h6" style={{ margin: '1rem' }}>
                                        ₱
                                    </Typography>
                                </InputAdornment>
                            ),
                            sx: { fontSize: '1.25rem' },
                        }}
                    />
                </Box>
                <Box sx={{ mt: 2 }}>
                    <TextField
                        label="Date"
                        type="date"
                        defaultValue={new Date().toISOString().slice(0, 10)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Typography sx={{ mt: 2 }}>Are you sure you want to make the payment?</Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" onClick={handleAccept} disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : 'Accept'}
                    </Button>
                    <Button sx={{ ml: 2 }} onClick={handleClose}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

AcceptMemberModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    updateParentState: PropTypes.func.isRequired,
    handleOpenSuccess: PropTypes.func.isRequired
};

export default AcceptMemberModal;
