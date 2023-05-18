import React from "react";
import Section from "../Section";
import MyContainer from "@modules/components/ui/MyContainer";
import homeBG3 from "../../../../../public/images/gymbg3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gym1 from "../../../../../public/images/gym1.png";
import gym2 from "../../../../../public/images/gym2.png";
import gym3 from "../../../../../public/images/gym3.png";
import gym4 from "../../../../../public/images/gym4.png";
import styles from "../../../carousel.module.css";
import Image from "next/image";

const ContactSection = ({ ...props }) => {
  return (
    <Section
      {...props}
      className="flex items-center -z-50"
      style={{
        backgroundImage: `url(${homeBG3.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MyContainer className="grid place-items-center md:h-[calc(100vh-74px)]">
        <div
          className={`${styles.carouselContainer} flex justify-center items-center`}
        >
          <Carousel
            className={styles.gymImages}
            showThumbs={false}
            infiniteLoop={true}
            centerMode={false}
            showArrows={true}
            emulateTouch={true}
            autoPlay={true}
            interval={3000}
            stopOnHover={true}
            swipeScrollTolerance={10}
            dynamicHeight={false}
          >
            <div>
              <Image src={gym1} />
            </div>
            <div>
              <Image src={gym2} />
            </div>
            <div>
              <Image src={gym3} />
            </div>
            <div>
              <Image src={gym4} />
            </div>
          </Carousel>
        </div>
      </MyContainer>
    </Section>
  );
};

export default ContactSection;
