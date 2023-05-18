import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";
import logo2 from "../../public/images/logo2.png";
import { productDescription } from "@modules/utils/config";
import ProductDescription from "@modules/components/landingPage/ProductDescription";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./carousel.module.css";
import { StyledContainer } from "@modules/utils/config";

import gym1 from "../../public/images/gym1.jpg";
import gym2 from "../../public/images/gym2.jpg";
import gym3 from "../../public/images/gym3.jpg";
import gym4 from "../../public/images/gym4.jpg";

export default function LandingPage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div id="home">
          <StyledContainer>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                marginTop: 15,
              }}
            >
              <Box sx={{ marginBottom: 4 }}>
                <Image
                  src={logo2}
                  alt="Unscathed Fitness Gym Logo"
                  width={400}
                  height={400}
                />
              </Box>
              <Typography
                variant="h3"
                sx={{ marginBottom: 4, color: "#000000", textAlign: "center" }}
              >
                Welcome to Unscathed Fitness Gym!
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ marginBottom: 4, color: "#000000", textAlign: "center" }}
              >
                We are committed to helping you achieve your fitness goals.
              </Typography>
              <Link href={"/login"} passHref>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#404040", color: "#0D0D0D", marginBottom: 4 }}
                >
                  Get started
                </Button>
              </Link>
            </Container>
          </StyledContainer>
        </div>
        <div id="about" style={{ height: "100vh" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {productDescription.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProductDescription
                    title={product.title}
                    description={product.description}
                    function={product.function}
                    icon={product.icon}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>

        <div id="contact" style={{ height: "100vh", backgroundColor: "red" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flexstart",
              marginTop: 10,
            }}
          >
            <Typography
              variant="h3"
              sx={{ marginBottom: 4, color: "#000000", textAlign: "center" }}
            >
              Contact information should go here
            </Typography>
            <div className={styles.carouselContainer}>
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
          </Container>
        </div>
      </div>
    </>
  );
}
