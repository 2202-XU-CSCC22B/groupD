import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";

const index = () => {
  return (
    <section className=" h-screen bg-white snap-mandatory snap-y overflow-scroll snap-always  scroll-pt-[87px]">
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </section>
  );
};

export default index;
