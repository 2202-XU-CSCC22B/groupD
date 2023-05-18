import { useRouter } from "next/router";
import "../styles/global.css";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import HomeLayout from "@modules/components/layouts/home/HomeLayout";
function App({ Component, pageProps }) {
  const router = useRouter();

  const Layout = ({ children }) => {
    if (router.pathname.includes("dashboard")) {
      return <DashboardLayout>{children}</DashboardLayout>;
    } else {
      return <HomeLayout>{children}</HomeLayout>;
    }
  };

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
