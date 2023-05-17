import { Container, Typography } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

export default function forgotPassword() {
  return (
    <>
      <Head>
        <title>Password Reset</title>
      </Head>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography> Forgot Password here</Typography>
        <Link href={"/"}>
          {" "}
          <Typography variant={"h3"}> Go back to Landing Page!</Typography>
        </Link>
      </Container>
    </>
  );
}
