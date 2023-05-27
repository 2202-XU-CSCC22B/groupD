import AboutSection from "@modules/components/home/AboutSection";
import ContactSection from "@modules/components/home/ContactSection";
import HomeSection from "@modules/components/home/HomeSection";

const index = () => {
  return (
    <section className=" md:h-screen bg-white md:snap-mandatory md:snap-y md:overflow-scroll md:snap-always  md:scroll-pt-[87px] ">
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ContactSection id="contact" className="md:mb-[194.17px]" />
    </section>
  );
};

export default index;
