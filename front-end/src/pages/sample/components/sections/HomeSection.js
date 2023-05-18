import React from "react";
import Section from "../Section";
import MyContainer from "@modules/components/ui/MyContainer";
import Link from "next/link";
import Button from "@mui/material/Button";
import homeBG from "../../../../../public/images/gymbg1.png";
import { Paper } from "@mui/material";

const HomeSection = ({ ...props }) => {
  return (
    <Section
      {...props}
      className="flex items-center mt-[87px] -z-50"
      style={{
        backgroundImage: `url(${homeBG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MyContainer className="text-center">
      <div className="relative flex min-h-screen justify-center items-center">
  <div
    aria-hidden="true"
    className="absolute inset-y-0 inset-x-0 w-72 rounded-full rotate-90 bg-gradient-to-b from-gray-700  to-blue-950 blur-3xl mx-auto opacity-80"
  ></div>

          <div
            className="relative z-10"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-150px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 0 0 4px black",
              }}
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              className=" text-6xl md:text-5xl font-semibold text-slate-50 drop-shadow-lg text-center md:!leading-tight md:pt-16 "

            >
              Welcome to Unscathed Fitness Gym!
            </div>
            <p
              className=" text-2xl text-slate-50 drop-shadow-lg text-center md:text-2xl"
              style={{
                marginBottom: "1rem",
              }}
            >
              We are committed to helping you achieve your fitness goals.
            </p>
            <Link href="/account/register" passHref>
              <button class="rounded-full bg-gray-800 text-slate-50 drop-shadow-lg text-lg py-2 px-4">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </MyContainer>
    </Section>
  );
};

export default HomeSection;
