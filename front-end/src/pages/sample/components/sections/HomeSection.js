import React from "react";
import Section from "../Section";
import MyContainer from "@modules/components/ui/MyContainer";

const HomeSection = ({ ...props }) => {
  return (
    <Section className="bg-red-500 mt-[87px]" {...props}>
      <MyContainer className="grid place-items-center h-[calc(100vh-74px)]">
        <h1 className=" text-5xl">HOME SECTION</h1>
      </MyContainer>
    </Section>
  );
};

export default HomeSection;
