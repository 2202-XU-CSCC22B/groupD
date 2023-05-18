import React from "react";
import Section from "./Section";
import MyContainer from "@modules/components/ui/MyContainer";
import homeBG3 from "../../../public/images/gymbg3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gym1 from "../../../public/images/gym1.png";
import gym2 from "../../../public/images/gym2.png";
import gym3 from "../../../public/images/gym3.png";
import gym4 from "../../../public/images/gym4.png";
import styles from "../../pages/carousel.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
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
      <MyContainer className="grid place-items-center h-[calc(100vh-74px)]">
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

        <div className="bg-white p-4 rounded-lg mt-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Unscathed Fitness Gym</h2>
          <p className="text-lg text-gray-500 mb-2">
            2nd Floor, Forever Books Bldg., Bulua Highway, Cagayan de Oro,
            Philippines
          </p>
          <div className="flex items-center justify-center">
            <FacebookRoundedIcon
              className="text-gray-500 mr-2"
              style={{ fontSize: "24px", marginBottom: "-2px" }}
            />
            <a
              href="https://facebook.com/unscthdfitness"
              className="text-lg text-gray-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/unscthdfitness
            </a>
          </div>
          <div className="flex items-center justify-center mt-2">
            <ContactPhoneRoundedIcon
              className="text-gray-500 mr-2"
              style={{ fontSize: "24px", marginTop: "-1px" }}
            />
            <p className="text-lg text-gray-500 mt-0">0905 920 8736</p>
          </div>
        </div>
      </MyContainer>
    </Section>
  );
};

export default ContactSection;
