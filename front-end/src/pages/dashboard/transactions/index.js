import Head from "next/head";
import ModalTransaction from "@modules/components/transactions/modal-transaction";
import { useEffect, useState } from "react";
import DataTable from "@modules/components/ui/data-table";
import { columns } from "./columns";
import { MdOutlinePayments } from "react-icons/md";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// const data = [
//   {
//     firstName: "Matthew",
//     lastName: "Turner",
//     date: "2022-07-05",
//     description: null,
//     paymentMethod: "Cash",
//     transactionType: "Cash Out",
//     memberID: 505,
//     staffID: null,
//     value: 400,
//   },
//   {
//     firstName: "Amanda",
//     lastName: "Morales",
//     date: "2023-04-14",
//     description: null,
//     paymentMethod: "GCash",
//     transactionType: "Maintenance",
//     memberID: 611,
//     staffID: null,
//     value: 350,
//   },
//   {
//     firstName: "James",
//     lastName: "Ward",
//     date: "2021-11-28",
//     description: null,
//     paymentMethod: "Cash",
//     transactionType: "Sales",
//     memberID: 720,
//     staffID: null,
//     value: 600,
//   },
//   {
//     firstName: "Sophia",
//     lastName: "Rossi",
//     date: "2022-09-16",
//     description: null,
//     paymentMethod: "GCash",
//     transactionType: "Utilities",
//     memberID: 832,
//     staffID: null,
//     value: 450,
//   },
//   {
//     firstName: "Daniel",
//     lastName: "Phillips",
//     date: "2023-03-06",
//     description: null,
//     paymentMethod: "Cash",
//     transactionType: "Salary",
//     memberID: 948,
//     staffID: null,
//     value: 800,
//   },
//   {
//     firstName: "Olivia",
//     lastName: "Foster",
//     date: "2022-01-24",
//     description: null,
//     paymentMethod: "GCash",
//     transactionType: "Cash Out",
//     memberID: 1057,
//     staffID: null,
//     value: 350,
//   },
//   {
//     firstName: "Benjamin",
//     lastName: "Hayes",
//     date: "2023-02-10",
//     description: null,
//     paymentMethod: "Cash",
//     transactionType: "Sales",
//     memberID: 1167,
//     staffID: null,
//     value: 500,
//   },
//   {
//     firstName: "Emma",
//     lastName: "Larson",
//     date: "2021-07-31",
//     description: null,
//     paymentMethod: "GCash",
//     transactionType: "Maintenance",
//     memberID: 1278,
//     staffID: null,
//     value: 200,
//   },
//   {
//     firstName: "William",
//     lastName: "Reed",
//     date: "2022-06-15",
//     description: null,
//     paymentMethod: "Cash",
//     transactionType: "Utilities",
//     memberID: 1392,
//     staffID: null,
//     value: 300,
//   },
//   {
//     firstName: "Emily",
//     lastName: "Rivera",
//     date: "2021-10-09",
//     description: null,
//     paymentMethod: "GCash",
//     transactionType: "Cash Out",
//     memberID: 1509,
//     staffID: null,
//     value: 700,
//   },
// ];

const getAllTransactions = async () => {
  try {
    const res = axios.get(process.env.retrieve_all_transactions_api, {
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

const TransactionPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery({
    queryKey: ["all_transactions"],
    queryFn: getAllTransactions,
  });

  // console.log(data?.data);

  // const formattedData = data?.data.transactions.map((item) => {
  //   ...item,

  // })

  // const [row, setRow] = useState([]);

  // const [formattedData, setFormattedData]= useState([]);
  // const [netProfit, setNetProfit]= useState();
  // const [parentState, setParentState] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(process.env.retrieve_all_transactions_api, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
  //           'Access-Control-Allow-Origin':'*',
  //           'Access-Control-Allow-Methods':'GET'
  //           // Additional headers if required
  //         }
  //       }); // Replace 'API_ENDPOINT' with the actual endpoint URL
  //       const jsonData = await response.json();
  //       console.log(`parent state: ${parentState}`)
  //       setRow(jsonData.transactions);
  //       setNetProfit(jsonData.summary.netProfit);
  //       setFormattedData(row.map((item) => ({
  //         ...item,
  //         // don't remove
  //         transactionType:
  //             item.transactionType === "CashOut" ? "Cash out" : item.transactionType,
  //         paymentMethod: item.paymentMethod === "GCash" ? "GC" : "CASH",
  //       })));

  //     } catch (error) {
  //       console.error("Error fetching row:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <Head>
        <title>Transactions</title>
      </Head>

      <div className="container pr-4 py-8 overflow-hidden space-y-2">
        <section className="max-w-7xl w-full flex gap-2 flex-col min-[450px]:flex-row min-[450px]:items-end min-[450px]:justify-between  pr-12 lg:pr-0">
          <h1 className="text-xl leading-none font-bold text-gray-600">
            Transactions
          </h1>
          <button
            className=" flex gap-2 items-center text-sm px-4 py-2 bg-blue-600 hover:bg-blue-500"
            onClick={() => setIsOpen(true)}
          >
            <MdOutlinePayments size={18} className=" text-white" />
            <span className=" text-white font-medium rounded-md">
              New transaction
            </span>
          </button>
        </section>

        {/* table */}
        {data && <DataTable columns={columns} data={data?.data.transactions} />}
      </div>

      {/* add 'add transaction' logic inside */}
      <ModalTransaction isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default TransactionPage;
