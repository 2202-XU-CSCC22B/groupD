import React from "react";

const MyButton = ({ className, children, ...props }) => {
  return (
    <button
      className={`${className} rounded bg-blue-700 text-white px-4 py-2 disabled:bg-gray-500 hover:scale-95 hover:bg-blue-500 hover:disabled:bg-gray-500 transition-all duration-300 ease-in-out `}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
