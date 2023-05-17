import React from "react";

const MyContainer = ({ className, children, ...props }) => {
  return (
    <div className={`container max-w-6xl mx-auto  ${className}`} {...props}>
      {children}
    </div>
  );
};

export default MyContainer;
