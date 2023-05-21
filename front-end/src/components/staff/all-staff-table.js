import * as React from "react";
import { useEffect, useState } from "react";
import { allMembersColumnDef } from "@modules/utils/config";
import { DataGrid } from "@mui/x-data-grid";
import MoreStaffInfo from "./more-staff-info";

const data = [
  {
    id: 1,
    firstName: "coralie",
    lastName: "rogahn",
    phone: "(613) 701-9841",
    email: "doris.hoppe@yahoo.com",
    gender: "MALE",
    address: "Cagayan de Oro City",
    position: "Owner",
    birthday: null,
    dateStarted: "2023-05-06",
    status: "ACTIVE",
  },
  {
    id: 1,
    firstName: "coralie",
    lastName: "rogahn",
    phone: "(613) 701-9841",
    email: "doris.hoppe@yahoo.com",
    gender: "MALE",
    address: "Cagayan de Oro City",
    position: "Owner",
    birthday: null,
    dateStarted: "2023-05-06",
    status: "ACTIVE",
  },
  {
    id: 1,
    firstName: "coralie",
    lastName: "rogahn",
    phone: "(613) 701-9841",
    email: "doris.hoppe@yahoo.com",
    gender: "MALE",
    address: "Cagayan de Oro City",
    position: "Owner",
    birthday: null,
    dateStarted: "2023-05-06",
    status: "ACTIVE",
  },
  {
    id: 1,
    firstName: "coralie",
    lastName: "rogahn",
    phone: "(613) 701-9841",
    email: "doris.hoppe@yahoo.com",
    gender: "MALE",
    address: "Cagayan de Oro City",
    position: "Owner",
    birthday: null,
    dateStarted: "2023-05-06",
    status: "ACTIVE",
  },
  {
    id: 1,
    firstName: "coralie",
    lastName: "rogahn",
    phone: "(613) 701-9841",
    email: "doris.hoppe@yahoo.com",
    gender: "MALE",
    address: "Cagayan de Oro City",
    position: "Owner",
    birthday: null,
    dateStarted: "2023-05-06",
    status: "ACTIVE",
  },
  {
    id: 1,
    firstName: "coralie",
    lastName: "rogahn",
    phone: "(613) 701-9841",
    email: "doris.hoppe@yahoo.com",
    gender: "MALE",
    address: "Cagayan de Oro City",
    position: "Owner",
    birthday: null,
    dateStarted: "2023-05-06",
    status: "ACTIVE",
  },
];

const AllStaffTable = () => {
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

      <MoreStaffInfo data={selectedRow} key={selectedRow?.id} />
    </div>
  );
};

export default AllStaffTable;
