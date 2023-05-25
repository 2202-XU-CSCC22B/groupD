import * as React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { allMembersColumnDef } from "@modules/utils/config";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import MoreInformation from "@modules/components/members/new/MoreInformation";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {getAllStaff} from "@modules/components/staff/all-staff-table";

const ActionButton = () => {
  return (
    <IconButton color="primary" aria-label="actions" component="label">
      <AddTaskIcon />
    </IconButton>
  );
}


export default function AllMemberTable({setSelectedMember, data, refetchTransactions, selectedMember}) {


  const [selectedRow, setSelectedRow] = useState();
  const column = allMembersColumnDef;
  const [isLoading, setIsLoading] = useState(false);


  console.log("data here " + data);
  const onRowDoubleClick = (row, event) => {
    event.preventDefault();
    console.log(row.row);

    setSelectedRow(row.row);
    setSelectedMember(row.row)
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  const sortModel = [
    {
      field: "id",
      sort: "desc", // Set the initial sort direction ("asc" for ascending, "desc" for descending)
    },
  ];

  return (
    <div className=" flex flex-col xl:flex-row gap-12 py-8 ">
      <div className=" h-[500px] min-[800px]:w-fit">
        <DataGrid
          rows={data}
          columns={column}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          sortModel={sortModel}
          pageSizeOptions={[10, 20]}
          onRowDoubleClick={(row, event) => onRowDoubleClick(row, event)}
        />
      </div>

      <MoreInformation data={selectedRow} key={selectedRow?.id} refetchTransactions={refetchTransactions} />
    </div>
  );
}
