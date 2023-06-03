import {DataGrid} from "@mui/x-data-grid";
import * as React from "react";
import {Paper, Snackbar, Stack, Typography} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from "@mui/material/IconButton";
import {useEffect, useState} from "react";
import Divider from "@mui/material/Divider";
import Title from "@modules/components/dashboard/Title";

import {Alert} from "@mui/lab";
export default function PendingRegistrationContent(){
    const [row, setRow] = useState([]);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);
    const [message, setMessage]  = useState(false);
    const horizontal = "right";
    const vertical = "top";



    const handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
    };

    const handleRemoveClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenRemove(false);
    };


    const renderAccept = (params) => {
        return (
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="accept" onClick={(e) => handleAccept(params, e)} color={"info"}>
                    <CheckIcon />
                </IconButton>
            </Stack>
        );
    };

    const renderReject = (params) => {
        return (
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="reject" onClick={(e) => handleReject(params, e)} color={"error"}>
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </Stack>
        );
    };

    const handleRemoveRow = (id) => {
        setRow((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const handleAccept = (params, e) => {
        e.preventDefault();
        const selectedObject = row.find(item => item.id === params.id);
        handleRemoveRow(params.id);

        fetch(process.env.validate_unverified_api.replace("{email}", selectedObject.email), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Additional headers if required
            },
        })
            .then(response => {
                if (response.ok) {
                    setMessage(selectedObject.firstName + " " + selectedObject.lastName +  " is now  a member");
                    setOpenSuccess(true);

                    // Request was successful
                    console.log('Data updated successfully!');
                } else {
                    // Handle the error if the request was not successful
                    console.error('Error updating data:', response.statusText);
                }
            })
            .catch(error => {
                // Handle any network or fetch-related errors
                console.error('Error updating data:', error);
            });

        // Handle button click event here
        console.log('Button clicked:', params.row.id);
    };

    const handleReject = (params, e) => {
        e.preventDefault();
        const selectedObject = row.find(item => item.id === params.id);
        handleRemoveRow(params.id);
        fetch(process.env.delete_member_api.replace("{email}", selectedObject.email.email), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Additional headers if required
            },
        })
            .then(response => {
                if (response.ok) {

                    setMessage(selectedObject.firstName + " " + selectedObject.lastName +  " is rejected as a member");
                    setOpenRemove(true)
                    // Request was successful
                    console.log('Data Deleted successfully!');
                } else {
                    // Handle the error if the request was not successful
                    console.error('Error updating data:', response.statusText);
                }
            })
            .catch(error => {
                // Handle any network or fetch-related errors
                console.error('Error updating data:', error);
            });

        // Handle button click event here
        console.log('Button clicked:', params.row.id);
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.retrieve_unverified_api); // Replace 'API_ENDPOINT' with the actual endpoint URL
                const jsonData = await response.json();
                setRow(jsonData);

            } catch (error) {
                console.error('Error fetching row:', error);
            }
        };

        fetchData()
    }, []); // The empty dependency array ensures the effect runs only once on component mount


    const column = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First name", width: 130 },
        { field: "lastName", headerName: "Last name", width: 130 },
        { field: "email", headerName: "Email", width: 260 },
        { field: 'accept', headerName: '', width: 50, renderCell: renderAccept , sortable: false},
        { field: 'reject', headerName: '', width: 50, renderCell: renderReject , sortable: false},
    ];

    return(
        // <Paper style={{padding: "2rem", justifyContent: "center", display: "flex", flexDirection: "column", gap: 10, width: "80vw"}} elevation={24}>
        //     <Typography variant={"h3"}>Unverified Members</Typography>
        //     <Divider/>
        <>
            <Title>Pending registration</Title>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    gap: "10px",
                    margin: "10px",
                    overflow: "auto",
                }}
            >
            <DataGrid
                rows={row}
                columns={column}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5]}
            />
                <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleSuccessClose} anchorOrigin={{vertical, horizontal}}>
                    <Alert onClose={handleSuccessClose} severity={"success"} sx={{ width: '100%' }} key={vertical+horizontal}>
                        {message}
                    </Alert>
                </Snackbar>

                <Snackbar open={openRemove} autoHideDuration={3000} onClose={handleRemoveClose} anchorOrigin={{vertical, horizontal}}>
                    <Alert onClose={handleRemoveClose} severity={"warning"} sx={{ width: '100%' }} key={vertical + horizontal}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        </>


        // </Paper>
    )
}

