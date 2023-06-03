import Head from "next/head";
import AllStaffTable from "@modules/components/staff/all-staff-table";
import { useState } from "react";
import ModalAddStaff from "@modules/components/staff/modal-add-staff";
import DataTable from "@modules/components/ui/data-table";
import { columns } from "@modules/pages/dashboard/transactions/columns";

const StaffPage = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Staff</title>
      </Head>

      <div className="container pr-4 py-8 overflow-hidden">
        <section className="max-w-5xl w-full flex gap-2 flex-col min-[450px]:flex-row min-[450px]:items-end min-[450px]:justify-between  pr-12 lg:pr-0">
          <h1 className="text-xl leading-none font-bold text-gray-600">
            Staff
          </h1>
          <button
            className=" flex gap-2 items-center text-sm px-4 py-2 bg-blue-600 hover:bg-blue-500"
            onClick={() => setIsOpen(true)}
          >
            <span className=" text-white font-medium rounded-md">
              New Staff
            </span>
          </button>
        </section>
        <AllStaffTable setSelectedStaff={setSelectedStaff} />
        {/*<DataTable*/}
        {/*data={selectedStaff?.transactions}*/}
        {/*columns={columns}*/}
        {/*title={"All Transactions"}*/}
        {/*/>*/}

        <ModalAddStaff isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default StaffPage;
