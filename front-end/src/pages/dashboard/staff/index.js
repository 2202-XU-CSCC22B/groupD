import Head from "next/head";
import AllStaffTable from "@modules/components/staff/all-staff-table";
import AllStaffTransactionTable from "@modules/components/staff/all-staff-transaction-table";
import DataTable from "@modules/components/ui/data-table";
import { columns} from "@modules/pages/dashboard/transactions/columns";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";



const StaffPage = () => {
    const [selectedStaff, setSelectedStaff] = useState(null)
    
  return (
    <div>
      <Head>
        <title>Staff</title>
      </Head>

      <div className="container pr-4 py-8 overflow-hidden">
        <section className="">
          <h1 className=" text-3xl font-bold xl:text-left xl:pl-4 text-gray-800">
            All staffs
          </h1>
        </section>
        <AllStaffTable setSelectedStaff={setSelectedStaff} />
          {selectedStaff !== null && <DataTable data={selectedStaff?.transactions} columns={columns} title={"All Transactions"}/>}
      </div>
    </div>
  );
};

export default StaffPage;
