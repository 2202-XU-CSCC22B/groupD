import React from "react";
import NavBar from "./components/navbar/NavBar";
import MyContainer from "@modules/components/ui/MyContainer";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";

const index = () => {
  return (
    <section className=" h-screen bg-white snap-mandatory snap-y overflow-scroll snap-always  scroll-pt-[87px]">
      <NavBar />
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </section>
  );
};

export default index;
