import * as React from "react";
import { useEffect, useState } from "react";
import {allMembersColumnDef, staffColumnDef} from "@modules/utils/config";
import { DataGrid } from "@mui/x-data-grid";
import MoreStaffInfo from "./more-staff-info";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export const getAllStaff = async () =>{
  try{
    const res = axios.get(process.env.retrieve_all_staff_api, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      }
    });

    return res;
  }catch (error){
    console.log("Error here at getAllStaff ")
    console.log(error)
    return error;
  }
}
const AllStaffTable = ({setSelectedStaff}) => {

  const {data, refetch} = useQuery({
    queryKey: ["all_staff"],
    queryFn: getAllStaff,
  });
  const [selectedRow, setSelectedRow] = useState(data?.data.all[0]);
  const column = staffColumnDef;
  const [isLoading, setIsLoading] = useState(false);



  const onRowDoubleClick = (row, event) => {
    event.preventDefault();
    console.log(row.row);
    setSelectedRow(row.row);
    setSelectedStaff(row.row);
  };

  console.log("data here " + data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div className=" flex flex-col xl:flex-row gap-12 py-8 ">
      <div className=" h-[500px] min-[800px]:w-fit">
        <DataGrid
          rows={data?.data.all}
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

      <MoreStaffInfo data={selectedRow} key={selectedRow?.id} refetchTransaction={refetch} />
    </div>
  );
};

export default AllStaffTable;
