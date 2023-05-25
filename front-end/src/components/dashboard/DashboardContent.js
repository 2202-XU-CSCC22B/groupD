import Sales from "@modules/components/dashboard/Sales";
import MemberSummary from "@modules/components/dashboard/MemberSummary";
import PendingRegistrationContent from "@modules/components/dashboard/PendingRegistrationContent";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import TransactionTypeSummaryPieChart from "@modules/components/dashboard/TransactionTypeSummaryPieChart";
const date = new Date(); // Create a new Date object
const month = date.getMonth() + 1; // getMonth() returns a zero-based month index, so add 1
const year = date.getFullYear();
const getAllTransactionByMonthEndPoint = process.env.retrieve_all_transactions_byMonth.replace("{year}", year).replace("{month}", month)
export const getAllTransactionByMonth = async () => {
    try {
        const res = await axios.get(getAllTransactionByMonthEndPoint, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        });

        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
};
export default function DashboardContent() {
  const cardClassName = "bg-white border rounded-lg shadow-md p-4";

    const { data: monthlyTransactions } = useQuery({
        queryKey: ["monthly_transactions"],
        queryFn: getAllTransactionByMonth,
    });
    console.log(monthlyTransactions?.data)
  return (
    <div className="max-w-7xl gap-8 grid-cols-1 grid md:grid-cols-12 pr-24">
      {/* Chart */}
      <div className={`${cardClassName} md:col-span-8`}>
        <MemberSummary />
      </div>
      {/* Recent Transaction */}

      <div className={`${cardClassName} md:col-span-4 max-h-[300px]`}>
       <TransactionTypeSummaryPieChart data={monthlyTransactions?.data}/>
      </div>
      {/* Recent RecentMembers */}

      <div
        className={`${cardClassName} md:col-span-8 min-[1217px]:col-span-8 overflow-x-auto`}
      >
        <PendingRegistrationContent className={` w-fit`} />
      </div>

        <div
            className={`${cardClassName} md:col-span-4 min-[1217px]:col-span-4 overflow-x-auto`}
        >
            <Sales data={monthlyTransactions?.data} year={year} month={month}/>
        </div>
    </div>
  );
}
