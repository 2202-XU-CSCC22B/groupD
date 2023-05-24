import { useRouter } from "next/router";
import "../styles/global.css";
import DashboardLayout from "@modules/components/layouts/DashboardLayout";
import HomeLayout from "@modules/components/layouts/home/HomeLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
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
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
