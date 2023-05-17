import { useRouter } from "next/router";
import React from "react";

const BackButton = ({ className, children, ...props }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={`ext-sm rounded border px-4 py-1 bg-gray-900 hover:bg-gray-800 text-white hover:scale-95 transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BackButton;
