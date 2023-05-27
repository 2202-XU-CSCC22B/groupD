import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useState } from "react";
import { staffColumnDef } from "@modules/utils/config";

export default function AllStaffTransactionTable() {
  const [row, setRow] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const column = staffColumnDef;
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
        const response = await fetch(process.env.retrieve_all_staff_api, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
          },
        }); // Replace 'API_ENDPOINT' with the actual endpoint URL
        const jsonData = await response.json();
        setRow(jsonData.all);
        setIsLoading(false);
        setSelectedRow(jsonData.all[0]);
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
    <div className=" flex flex-col xl:flex-row gap-12 py-8 ">
      <div className=" h-[500px] min-[800px]:w-fit">
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
    </div>
  );
}
