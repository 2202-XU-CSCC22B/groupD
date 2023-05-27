import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import PropTypes from "prop-types";

const AcceptMemberModal = (props) => {
  const [value, setValue] = useState("500"); // State to store the value of the TextField
  const [loading, setLoading] = useState(false); // State to track loading state
  const {
    open,
    handleClose,
    email,
    firstName,
    lastName,
    id,
    updateParentState,
    handleOpenSuccess,
  } = props;

  const handleAccept = () => {
    setLoading(true);

    // Handle payment acceptance logic here
    alert(sessionStorage.getItem("token"));
    fetch(process.env.validate_unverified_api.replace("{email}", email), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PUT",

        // Additional headers if required
      },
      body: JSON.stringify({
        date: new Date(),
        paymentValue: value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          updateParentState(props.email);
          // Request was successful
          console.log("Data updated successfully!");
        } else {
          // Handle the error if the request was not successful
          console.error(
            "Error updating data: at acceptMemberModal @ responseNotOkay",
            response.statusText
          );
        }
      })
      .then(() => {
        handleOpenSuccess(true);
        handleClose();
      })
      .catch((error) => {
        // Handle any network or fetch-related errors
        console.error("Error updating data: @ acceptMEmberModal @Catch", error);
      })
      .finally(() => {
        setLoading(false); // Set loading state back to false
      });
  };

  const handleValueChange = (event) => {
    setValue(event.target.value.replace(/\D/g, "")); // Update the value in the state
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
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 400,
          backgroundColor: "background.paper",
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
                  <Typography variant="h6" style={{ margin: "1rem" }}>
                    ₱
                  </Typography>
                </InputAdornment>
              ),
              sx: { fontSize: "1.25rem" },
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
        <Typography sx={{ mt: 2 }}>
          Are you sure you want to make the payment?
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleAccept} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Accept"}
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
  handleOpenSuccess: PropTypes.func.isRequired,
};

export default AcceptMemberModal;
