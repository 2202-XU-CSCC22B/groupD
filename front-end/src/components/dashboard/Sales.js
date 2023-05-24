import * as React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import {useEffect, useState} from "react";

export default function Sales({ className, ...props }) {
  const [summary, setSummary] = useState({});
  const date = new Date(); // Create a new Date object
  const month = date.getMonth() + 1; // getMonth() returns a zero-based month index, so add 1
  const year = date.getFullYear();
  const [netProfit, setNetProfit] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(process.env.retrieve_all_transactions_byMonth.replace("{year}", year).replace("{month}", month))
        const response = await fetch(process.env.retrieve_all_transactions_byMonth.replace("{year}", year).replace("{month}", month), {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET'
          }
        }); // Replace 'API_ENDPOINT' with the actual endpoint URL
        const jsonData = await response.json();
        setSummary(jsonData.summary);
        const value = summary.netProfit;
        const numberValue = parseFloat(value);
        const roundedValue = Math.round(numberValue);
        const formattedValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(roundedValue);

        setNetProfit(formattedValue)
      } catch (error) {
        console.error("Error fetching row:", error);

      }
    };

    fetchData();
  }, [netProfit]);
  return (
    <div
      className={`${className} space-y-2 flex flex-col justify-between h-full`}
      {...props}
    >
      <h1 className=" text-blue-500 text-xl font-medium">Total Sales</h1>

      <div className=" w-full text-center space-y-2  py-8 h-full">
        <RiMoneyDollarCircleFill size={48} className=" mx-auto text-blue-300" />
        <h1 className="text-4xl lg:text-5xl font-bold ">{netProfit}</h1>
        <p className=" text-center text-xs uppercase tracking-wide font-bold text-gray-600">
          May 2023
        </p>
      </div>
    </div>
  );
}
