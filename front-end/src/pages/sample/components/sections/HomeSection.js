import React from "react";
import Section from "../Section";
import MyContainer from "@modules/components/ui/MyContainer";
import Link from "next/link";
import Button from "@mui/material/Button";

const HomeSection = ({ ...props }) => {
  return (
    <Section
      {...props}
      className="flex items-center"
      style={{
        backgroundImage: `url("/images/gymbg1.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MyContainer className="text-center">
        <div style={{ position: "relative", marginBottom: "1rem" }}>
          <h1 className="text-6xl text-white" style={{ textShadow: "2px 2px 2px black", marginBottom: "1rem" }}>
            Welcome to Unscathed Fitness Gym!
          </h1>
          <div
            style={{
              position: "absolute",
              top: "-150px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "150px",
              height: "150px",
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
        </div>
        <p className="text-lg text-white" style={{ marginBottom: "1rem" }}>
          We are committed to helping you achieve your fitness goals.
        </p>
        <Link href="/register" passHref>
          <Button
            variant="contained"
            sx={{ bgcolor: "#757575", color: "white", marginBottom: "1rem" }}
          >
            Get started
          </Button>
        </Link>
      </MyContainer>
    </Section>
  );
};

export default HomeSection;
