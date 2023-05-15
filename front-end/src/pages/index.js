import {Container, Paper, Typography} from "@mui/material";
import Link from "next/link";
import ResponsiveAppBar from "@modules/components/layouts/ResponsiveAppBar";

export default function LandingPage(){
  return(
      <ResponsiveAppBar>
          <Paper>
              <Container sx={{display: "flex", flexDirection: "column"}}>
                  <Typography> Landing Page</Typography>
                  <Link href={"/login"}> <Typography variant={"h3"}> Login here!</Typography></Link>
              </Container>


          </Paper>
      </ResponsiveAppBar>

  )
}