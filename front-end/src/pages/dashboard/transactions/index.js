import Head from "next/head";
import ModalTransaction from "@modules/components/transactions/modal-transaction";
import { useState } from "react";
import DataTable from "@modules/components/ui/data-table";
import { columns } from "./columns";
import { MdOutlinePayments } from "react-icons/md";

const data = [
  {
    firstName: "Bruce",
    lastName: "Salcedo",
    date: "2020-05-03",
    description: null,
    paymentMethod: "Cash",
    transactionType: "Sales",
    memberID: 476,
    staffID: null,
  },
  {
    firstName: "John",
    lastName: "Doe",
    date: "2021-01-15",
    description: "Product XYZ",
    paymentMethod: "GCash",
    transactionType: "CashOut",
    memberID: null,
    staffID: 102,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    date: "2022-07-28",
    description: "Service ABC",
    paymentMethod: "Cash",
    transactionType: "Sales",
    memberID: 789,
    staffID: null,
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    date: "2020-11-10",
    description: null,
    paymentMethod: "GCash",
    transactionType: "Sales",
    memberID: null,
    staffID: 205,
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    date: "2023-03-19",
    description: "Product DEF",
    paymentMethod: "Cash",
    transactionType: "CashOut",
    memberID: 624,
    staffID: null,
  },
  {
    firstName: "David",
    lastName: "Davis",
    date: "2022-09-07",
    description: "Service XYZ",
    paymentMethod: "GCash",
    transactionType: "Sales",
    memberID: null,
    staffID: 305,
  },
  {
    firstName: "Sophia",
    lastName: "Wilson",
    date: "2021-05-30",
    description: "Product ABC",
    paymentMethod: "Cash",
    transactionType: "Sales",
    memberID: 456,
    staffID: null,
  },
  {
    firstName: "James",
    lastName: "Thomas",
    date: "2023-02-14",
    description: null,
    paymentMethod: "GCash",
    transactionType: "Sales",
    memberID: null,
    staffID: 108,
  },
  {
    firstName: "Olivia",
    lastName: "Martinez",
    date: "2020-08-18",
    description: "Product XYZ",
    paymentMethod: "Cash",
    transactionType: "Sales",
    memberID: 237,
    staffID: null,
  },
  {
    firstName: "Daniel",
    lastName: "Taylor",
    date: "2022-01-05",
    description: "Service ABC",
    paymentMethod: "GCash",
    transactionType: "Sales",
    memberID: null,
    staffID: 401,
  },
  {
    firstName: "Emma",
    lastName: "Garcia",
    date: "2021-11-24",
    description: null,
    paymentMethod: "Cash",
    transactionType: "Sales",
    memberID: 925,
    staffID: null,
  },
  {
    firstName: "Benjamin",
    lastName: "Hernandez",
    date: "2023-04-02",
    description: "Product DEF",
    paymentMethod: "GCash",
    transactionType: "Sales",
    memberID: null,
    staffID: 150,
  },
  {
    firstName: "Ava",
    lastName: "Lopez",
    date: "2022-12-10",
    description: "Service XYZ",
    paymentMethod: "Cash",
    transactionType: "Maintenance",
    memberID: 372,
    staffID: null,
  },
  {
    firstName: "William",
    lastName: "Clark",
    date: "2020-07-14",
    description: "Product ABC",
    paymentMethod: "GCash",
    transactionType: "Utilities",
    memberID: null,
    staffID: 215,
  },
];

const TransactionPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const formattedData = data.map((item) => ({
    ...item,
    // don't remove
    transactionType:
      item.transactionType === "CashOut" ? "Cash out" : item.transactionType,
    paymentMethod: item.paymentMethod === "GCash" ? "GC" : "CASH",
  }));
  return (
    <div>
      <Head>
        <title>Transactions</title>
      </Head>

      <div className="container pr-4 py-8 overflow-hidden space-y-2">
        <section className="max-w-6xl w-full flex gap-2 flex-col min-[450px]:flex-row min-[450px]:items-end min-[450px]:justify-between  pr-12 lg:pr-0">
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
        <DataTable columns={columns} data={formattedData} />
      </div>

      {/* Add Transaction logic inside */}
      <ModalTransaction isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default TransactionPage;
