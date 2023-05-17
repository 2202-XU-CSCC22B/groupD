import Title from "@modules/components/dashboard/Title";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Link from "@mui/material/Link";
import * as React from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from "@mui/material/IconButton";
import {useEffect, useState} from "react";
import {allMembersColumnDef} from "@modules/utils/config";
import { DataGrid } from '@mui/x-data-grid';
import Head from "next/head";
import {Paper, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import MoreInformation from "@modules/components/members/new/MoreInformation";
import FormPaperComponent from "@modules/components/FormPaperComponent";

const ActionButton = () => {
    return(
        <IconButton color="primary" aria-label="actions" component="label">

            <AddTaskIcon />
        </IconButton>
    )
}
export default function AllMemberTable(){
    const [row, setRow] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const column = allMembersColumnDef;
    const [isLoading, setIsLoading] = useState(false);

    const onRowDoubleClick = (row, event) =>{
        event.preventDefault();
        console.log(row.row)

        setSelectedRow(row.row);

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(process.env.retrieve_members_api); // Replace 'API_ENDPOINT' with the actual endpoint URL
                const jsonData = await response.json();
                // const data = {
                //     firstName: jsonData.name.firstName,
                //     lastName: jsonData.name.lastName,
                //     email: jsonData.contactDetails.
                //     membershipStatus: jsonData.membershipDetails.membershipStatus,
                //     monthlySubscriptionStatus: jsonData.membershipDetails.monthlySubscriptionStatus,
                //     studentStatus : jsonData.membershipDetails.studentStatus
                // }
                setRow(jsonData);
                setIsLoading(false);
                setSelectedRow(jsonData[0])
                setRow(updatedRow);
            } catch (error) {
                console.error('Error fetching row:', error);
                setIsLoading(false);
            }
        };

        fetchData()
    }, []); // The empty dependency array ensures the effect runs only once on component mount

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!row) {
        return <div>No data available.</div>;
    }




    return(

        <Paper style={{padding: "2rem", justifyContent: "center", display: "flex", flexDirection: "column", gap: 10, width: "80vw"}} elevation={24}>
            <Typography variant={"h3"}>All Members</Typography>
            <Divider/>
            <div style={{display: "flex", flexDirection: "row", gap: 10, justifyContent: "space-evenly", padding : "1rem"}} class="grid-container">
                <div style={{ height: 600 , width: 800}}>
                    <DataGrid
                        rows={row}
                        columns={column}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[10, 20]}
                        onRowDoubleClick={(row, event) => onRowDoubleClick(row, event)}
                    />
                </div>
                <MoreInformation data={selectedRow} key={selectedRow?.id}/>
            </div>

        </Paper>





    )
}