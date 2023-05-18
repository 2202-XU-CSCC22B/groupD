import * as React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { allMembersColumnDef } from "@modules/utils/config";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import MoreInformation from "@modules/components/members/new/MoreInformation";

const ActionButton = () => {
  return (
    <IconButton color="primary" aria-label="actions" component="label">
      <AddTaskIcon />
    </IconButton>
  );
};
export default function AllMemberTable() {
  const [row, setRow] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const column = allMembersColumnDef;
  const [isLoading, setIsLoading] = useState(false);

  const onRowDoubleClick = (row, event) => {
    event.preventDefault();
    console.log(row.row);

    setSelectedRow(row.row);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(process.env.retrieve_members_api); // Replace 'API_ENDPOINT' with the actual endpoint URL
        const jsonData = await response.json();
        setRow(jsonData);
        setIsLoading(false);
        setSelectedRow(jsonData[0]);
        setRow(updatedRow);
      } catch (error) {
        console.error("Error fetching row:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!row) {
    return <div>No data available.</div>;
  }

  return (
    <div className=" flex flex-col xl:flex-row gap-12 py-8">
      <div className=" h-[500px] w-fit">
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

      <MoreInformation data={selectedRow} key={selectedRow?.id} />
    </div>
  );
}
