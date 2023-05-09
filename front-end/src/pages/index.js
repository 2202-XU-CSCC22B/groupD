import {Container, Paper, Typography} from "@mui/material";
import Link from "next/link";

export default function LandingPage(){
  return(
      <Paper>
          <Container sx={{display: "flex", flexDirection: "column"}}>
              <Typography> Landing Page</Typography>
              <Link href={"/login"}> <Typography variant={"h3"}> Login here!</Typography></Link>
          </Container>


      </Paper>
  )
}