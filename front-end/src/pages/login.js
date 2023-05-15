import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import Link from "next/link";
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";
import Head from "next/head";

export default function LoginPage() {
  return (
    <ResponsiveAppBar>
      <Head>
        <title>Login</title>
      </Head>
      <Paper sx={{ bgcolor: "#f2f2f2", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4 }}>
          <Typography variant="h4" sx={{ color: "#404040", marginBottom: 4 }}>Welcome to Unscathed Fitness Gym!</Typography>
          <TextField label="Email" type="email" variant="outlined" sx={{ width: "100%", marginBottom: 2 }} />
          <TextField label="Password" type="password" variant="outlined" sx={{ width: "100%", marginBottom: 4 }} />
          <Link href={"/dashboard"}>
             <Button variant="contained" sx={{ bgcolor: "#404040", color: "#fff", marginBottom: 2 }}>Log In</Button>
            </Link>
          <Typography variant="subtitle1" sx={{ color: "#737373", marginBottom: 2 }}>Don't have an account yet nachange na?</Typography>
          <Link href={"/signup"} passHref>
            <Button variant="outlined" sx={{ bgcolor: "#fff", color: "#404040" }}>Sign Up</Button>
          </Link>
          <Link href={"/forgot_password"} passHref>
            <Typography variant="subtitle1" sx={{ color: "#737373", marginTop: 4 }}>Forgot your password?</Typography>
          </Link>
        </Container>
      </Paper>
    </ResponsiveAppBar>
  );
}
