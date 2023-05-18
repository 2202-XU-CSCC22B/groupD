import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";

const index = () => {
  return (
    <section className=" md:h-screen bg-white md:snap-mandatory md:snap-y md:overflow-scroll md:snap-always  md:scroll-pt-[87px]">
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </section>
  );
};

export default index;
