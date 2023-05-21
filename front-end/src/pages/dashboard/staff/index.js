import Head from "next/head";
import AllStaffTable from "@modules/components/staff/all-staff-table";

const StaffPage = () => {
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
        <AllStaffTable />
      </div>
    </div>
  );
};

export default StaffPage;
