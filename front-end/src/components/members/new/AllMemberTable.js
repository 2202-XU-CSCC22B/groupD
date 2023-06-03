import * as React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { allMembersColumnDef } from "@modules/utils/config";
import { DataGrid } from "@mui/x-data-grid";
import MoreInformation from "@modules/components/members/new/MoreInformation";

export default function AllMemberTable({
  setSelectedMember,
  data,
  refetchTransactions,
}) {
  const [selectedRow, setSelectedRow] = useState();
  const column = allMembersColumnDef;
  const [isLoading, setIsLoading] = useState(false);

  const onRowDoubleClick = (row, event) => {
    event.preventDefault();
    console.log(row.row);

    setSelectedRow(row.row);
    setSelectedMember(row.row);
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

      <MoreInformation
        data={selectedRow}
        key={selectedRow?.id}
        refetchTransactions={refetchTransactions}
      />
    </div>
  );
}
