import React from "react";

const Section = ({ className, children, ...props }) => {
  return (
    <section
      className={`${className} md:h-[calc(100vh-87px)] md:snap-start`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
