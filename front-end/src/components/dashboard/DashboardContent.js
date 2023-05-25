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


const getAllTransactionByMonth = async () => {
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

const countAllMembers = async () => {
    try {
        const res = await axios.get(process.env.count_members_api, {
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

    const {data: summaryOfMembers, } = useQuery({
        queryKey: ["members_summary"],
        queryFn: countAllMembers,
    });
    const { data: monthlyTransactions, refetch: reFetchMonthlyTransactions} = useQuery({
        queryKey: ["monthly_transactions"],
        queryFn: getAllTransactionByMonth,
    });


    // console.log(monthlyTransactions);
    // console.log(summaryOfMembers)


  return (
    <div className="max-w-7xl gap-8 grid-cols-1 grid md:grid-cols-12 pr-24">
      {/* Chart */}
      <div className={`${cardClassName} md:col-span-8`}>
        <MemberSummary data={summaryOfMembers?.data}/>
      </div>
      {/* Recent Transaction */}

      <div className={`${cardClassName} md:col-span-4 max-h-[400px]`}>
       <TransactionTypeSummaryPieChart data={monthlyTransactions?.data}/>
      </div>
      {/* Recent RecentMembers */}

      <div
        className={`${cardClassName} md:col-span-8 min-[1217px]:col-span-8 overflow-x-auto max-h-[400px]`}
      >
        <PendingRegistrationContent className={` w-fit`} refetch={reFetchMonthlyTransactions}/>
      </div>

        <div
            className={`${cardClassName} md:col-span-4 min-[1217px]:col-span-4 overflow-x-auto max-h-[400px]`}
        >
            <Sales data={monthlyTransactions?.data} year={year} month={month}/>
        </div>
    </div>
  );
}
