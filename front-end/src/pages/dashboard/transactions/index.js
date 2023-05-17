import TransactionContent from "@modules/components/transactions/TransactionContent";
import Head from "next/head";
import React from "react";

const TransactionsPage = () => {
  return (
    <div>
      <Head>
        <title>Sales</title>
      </Head>

      <TransactionContent />
    </div>
  );
};

export default TransactionsPage;
