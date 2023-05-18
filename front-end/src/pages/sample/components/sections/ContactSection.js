import React from "react";
import Section from "../Section";
import MyContainer from "@modules/components/ui/MyContainer";
import homeBG3 from "../../../../../public/images/gymbg3.png";
import { Carousel } from "react-responsive-carousel";
import Image from "next/Image";
import gym1 from "../../../../../public/images/gym1.jpg";
import gym2 from "../../../../../public/images/gym2.jpg";
import gym3 from "../../../../../public/images/gym3.jpg";
import gym4 from "../../../../../public/images/gym4.jpg";
import styles from "../../../carousel.module.css"

const ContactSection = ({ ...props }) => {
  return (
    <Section
      {...props}
      className="flex items-center mt-[87px] -z-50"
      style={{
        backgroundImage: `url(${homeBG3.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MyContainer className="grid place-items-center h-[calc(100vh-74px)]">
  
      </MyContainer>
    </Section>
  );
};

export default ContactSection;
