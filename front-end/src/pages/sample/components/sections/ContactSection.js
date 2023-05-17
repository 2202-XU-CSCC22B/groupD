import React from "react";
import Section from "../Section";
import MyContainer from "@modules/components/ui/MyContainer";

const ContactSection = ({ ...props }) => {
  return (
    <Section className="bg-emerald-500" {...props}>
      <MyContainer className="grid place-items-center h-[calc(100vh-74px)]">
        <h1 className=" text-5xl">CONTACT SECTION</h1>
      </MyContainer>
    </Section>
  );
};

export default ContactSection;
