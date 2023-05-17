import Head from "next/head";
import StaffContent from "@modules/components/staff/StaffContent";

const StaffPage = () => {
  return (
    <div>
      <Head>
        <title>Staff!</title>
      </Head>
      <section>
        <StaffContent />
      </section>
    </div>
  );
};

export default StaffPage;
