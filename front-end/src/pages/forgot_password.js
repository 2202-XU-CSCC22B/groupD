import {Container, Typography} from "@mui/material";
import Link from "next/link";

export default function forgotPassword(){
    return (
        <Container sx={{display: "flex", flexDirection: "column"}}>
            <Typography> Forgot Password here</Typography>
            <Link href={"/"}> <Typography variant={"h3"}> Go back to Landing Page!</Typography></Link>
        </Container>
    )
}