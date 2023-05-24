import Head from "next/head";
import ModalTransaction from "@modules/components/transactions/modal-transaction";
import { useEffect, useState } from "react";
import DataTable from "@modules/components/ui/data-table";
import { columns } from "./columns";
import { MdOutlinePayments } from "react-icons/md";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
  const { data, refetch } = useQuery({
    queryKey: ["all_transactions"],
    queryFn: getAllTransactions,
  });


  console.log(data?.data.transactions);



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
      <ModalTransaction isOpen={isOpen} setIsOpen={setIsOpen} refetchTransactions={refetch} />
    </div>
  );
};

export default TransactionPage;
