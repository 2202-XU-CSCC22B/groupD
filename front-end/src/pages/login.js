import { Box, Button, Container, Paper, TextField, Typography, Card} from "@mui/material";
import Link from "next/link";
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";
import Head from "next/head";
import logo from "../../public/images/logo.png";
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';


export default function LoginPage() {
  return (
    <ResponsiveAppBar>
      <Head>
        <title>Login</title>
      </Head>
      <Container sx ={{ display: "flex", flexDirection: "row", alignItems: "center", p: 25}}> 

      <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 5 }}>
      <Box sx={{ marginBottom: 1, marginTop:-20 }}>
              <Image src={logo} alt="Unscathed Fitness Gym Logo" width={250} height={250} />
            </Box>
            <Typography variant="h6" component="h2" sx={{ fontStyle: 'italic' }}>
  "Fitness is not just about the body. It's also about the mind. It's about you waking up every day with the determination to be better than you were yesterday."
</Typography>
        </Container>
      <Card sx={{ backgroundColor: "#f2f2f2", height: "100vh", width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", p:5 }}>
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4}}>
          <Typography variant="h4" sx={{ color: "#404040", marginBottom: 2 }}> User Login</Typography>
          <TextField label="Email" type="email" variant="outlined" sx={{ width: "100%", marginBottom: 2 }} />
          <TextField label="Password" type="password" variant="outlined" sx={{ width: "100%", marginBottom: 4 }} />
          <Link href={"/dashboard"} passHref style={{textDecoration: 'none', color: 'black'}}>
             <Button variant="contained" sx={{ backgroundColor: "#404040", color: "#fff", marginBottom: 2 }}>Log In</Button>
            </Link>
          <Typography variant="subtitle1" sx={{ color: "#737373", marginBottom: 2 }}>Don't have an account yet? </Typography>
          <Link href={"/signup"} passHref>
            <Button variant="outlined" sx={{ backgroundColor: "#fff", color: "#404040" }}>Sign Up</Button>
          </Link>
          <Link href={"/forgot_password"} passHref>
            <Typography variant="subtitle1" sx={{ color: "#737373", marginTop: 4 }}>Forgot your password?</Typography>
          </Link>
        </Container>
        </Card>
        </Container>

    </ResponsiveAppBar>
  );
}
