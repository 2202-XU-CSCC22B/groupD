import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";
import backgroundImg from './images/background.jpg';
import logo from "./images/logo.png";

export default function LandingPage() {
  return (
    <ResponsiveAppBar>
      <Paper sx={{ backgroundImage: `url(${backgroundImg})`, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundSize: "cover" }}>
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ marginBottom: 4 }}>
            <Image src={logo} alt="Unscathed Fitness Gym Logo" width={450} height={450} />
          </Box>
          <Typography variant="h3" sx={{ marginBottom: 4, color: "#fff", textAlign: "center" }}>Welcome to Unscathed Fitness Gym!</Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 4, color: "#fff", textAlign: "center" }}>We are committed to helping you achieve your fitness goals</Typography>
          <Link href={"/login"} passHref>
            <Button variant="contained" sx={{ bgcolor: "#404040", color: "#fff", marginBottom: 4 }}>Get started</Button>
          </Link>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 2, textAlign: "center", bgcolor: "#fff", height: "100%" }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>Personal Training</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>Our experienced trainers will design a program tailored to your fitness goals and guide you through each workout.</Typography>
                <Button variant="contained" sx={{ bgcolor: "#404040", color: "#fff" }}>Learn More</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 2, textAlign: "center", bgcolor: "#fff", height: "100%" }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>Muay Thai/Boxing</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>Join our Muay Thai/Boxing classes to meet other gym-goers and challenge yourself with a different workout.</Typography>
                <Button variant="contained" sx={{ bgcolor: "#404040", color: "#fff" }}>Learn More</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ padding: 2, textAlign: "center", bgcolor: "#fff", height: "100%" }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>Nutrition Counseling</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>Our experienced trainers will create a customized meal plan to help you achieve your fitness goals.</Typography>
                <Button variant="contained" sx={{ bgcolor: "#404040", color: "#fff" }}>Learn More</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </ResponsiveAppBar>
  );
}
