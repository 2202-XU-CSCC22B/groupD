import DashboardContent from "@modules/components/dashboard/DashboardContent";
import Head from "next/head";

const DashboardPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;
