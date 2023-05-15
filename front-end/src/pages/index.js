import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";
import backgroundImg from '../../public/images/background.jpg';
import logo from "../../public/images/logo.png";
import {backGroundImage} from "@modules/utils/config";
import {productDescription} from "@modules/utils/config";
import ProductDescription from "@modules/components/landingPage/ProductDescription";

export default function LandingPage() {
  return (
    <ResponsiveAppBar>
      <div>

          <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ marginBottom: 4 }}>
              <Image src={logo} alt="Unscathed Fitness Gym Logo" width={400} height={400} />
            </Box>
            <Typography variant="h3" sx={{ marginBottom: 4, color: "#000000", textAlign: "center" }}>Welcome to Unscathed Fitness Gym!</Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: 4, color: "#000000", textAlign: "center" }}>We are committed to helping you achieve your fitness goals</Typography>
            <Link href={"/login"} passHref>
              <Button variant="contained" sx={{ bgcolor: "#404040", color: "#fff", marginBottom: 4 }}>Get started</Button>
            </Link>

            <Grid container spacing={2} justifyContent="center">
              {productDescription.map((product, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ProductDescription title={product.title} description={product.description} function={product.function} icon={product.icon}/>
                  </Grid>
              ))}

            </Grid>
          </Container>

      </div>

    </ResponsiveAppBar>
  );
}
