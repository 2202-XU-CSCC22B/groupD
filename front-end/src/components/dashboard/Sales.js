import * as React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function Sales({ className, ...props }) {
  return (
    <div
      className={`${className} space-y-2 flex flex-col justify-between h-full`}
      {...props}
    >
      <h1 className=" text-blue-500 text-xl font-medium">Total Sales</h1>

      <div className=" w-full text-center space-y-2  py-8 h-full">
        <RiMoneyDollarCircleFill size={48} className=" mx-auto text-blue-300" />
        <h1 className="text-4xl lg:text-5xl font-bold ">$3,024.00</h1>
        <p className=" text-center text-xs uppercase tracking-wide font-bold text-gray-600">
          May 2023
        </p>
      </div>
    </div>
  );
}
