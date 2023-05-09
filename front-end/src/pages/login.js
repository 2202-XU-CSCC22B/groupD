import {Container, Paper, Typography} from "@mui/material";
import Link from "next/link";

export default function LoginPage(){
    return (
        <Paper>
            Log in page here!
            <Container sx={{display: "flex", flexDirection: "column"}}>
                <Link href={"/forgot_password"}> <Typography variant={"h3"}> Forgot password button</Typography></Link>
                <Link href={"/dashboard"}> <Typography variant={"h3"}> Proceed to home!</Typography></Link>
            </Container>
        </Paper>
    )
}