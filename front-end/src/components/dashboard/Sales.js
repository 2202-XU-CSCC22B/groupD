import * as React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import {useEffect, useState} from "react";
import Divider from "@mui/material/Divider";
export const FormattedNumber = ({ number }) => {
    const formattedNumber = Number(number).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: "1rem" , flexDirection: "row", marginRight: '1rem'}}>
      <span style={{textAlign: 'left'}}>₱</span>
      <span style={{ textAlign: 'right' }}>{formattedNumber}</span>
    </div>
    );
};

export const FormattedMonth = ({ month, year }) => {
    const longMonth = new Date(2000, month - 1).toLocaleString('en-US', {
        month: 'long',
    });

    return <div>{`${longMonth} ${year}`}</div>;
};


export default function Sales({ className, data , month, year}) {


  const netProfitColor = data?.summary.netProfit >= 0 ? 'text-green-600' : 'text-red-600';
  const cashOnHandColor = data?.summary.cashOnHand >= 0 ? 'text-green-600' : 'text-red-600';

    const dividerStyle = {
        height: 2,
        background: 'transparent',
        borderBottom: '1px dashed #A9A9A9', // Customize the color if needed
        margin: '16px 0', // Customize the margin if needed
    };

  return (
      <div >
        <h1 className="text-2xl font-bold mb-4"><FormattedMonth month={month} year={year}/></h1>

            <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600">Gross Profit</p>
                <span className="text-green-600 font-semi-bold"><FormattedNumber number={data?.summary.grossProfit}/></span>
            </div>
          <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Total Expense</p>
              <span className="text-red-600 font-semi-bold"><FormattedNumber number={data?.summary.expense}/></span>
          </div>
            <Divider style={dividerStyle}/>

          <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Net Profit</p>
              <span className={`font-semi-bold ${netProfitColor}`}><FormattedNumber number={data?.summary.netProfit}/></span>
          </div>

          <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Cash Out</p>
              <span className="text-red-600 font-semi-bold"><FormattedNumber number={data?.summary.cashOut}/></span>
          </div>
          <Divider style={dividerStyle}/>
          <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Cash on Hand</p>
              <span className={`font-semi-bold ${cashOnHandColor}`}><FormattedNumber number={data?.summary.cashOnHand}/></span>
          </div>

      </div>
  );
};


