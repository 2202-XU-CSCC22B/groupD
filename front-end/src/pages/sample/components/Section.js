import React from "react";

const Section = ({ className, children, ...props }) => {
  return (
    <section
      className={`${className} h-[calc(100vh-87px)] snap-start`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
