import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import logo from "../../../../public/images/logo.png";
import Image from "next/image";
import MyContainer from "@modules/components/ui/MyContainer";

export default function LoginPage() {
  return (
    <>
      <MyContainer className="pt-[87px] text-black min-h-screen ">
        <div className="grid h-[calc(100vh-87px)] place-items-center calc" >
          <div className=" border border-gray-300 rounded-lg p-20 min-w-lg flex flex-col items-center">
            <h1 className="text-3xl font-medium pb-5 text-left w-full">Login</h1>

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              sx={{ width: "100%", marginBottom: 2 }}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              sx={{ width: "100%", marginBottom: 4 }}
            />

            <Link
              className="w-full mx-auto"
              href={"/dashboard"}
              passHref
              style={{ textDecoration: "none", color: "black" }}
            >
              <button class="rounded-md w-full bg-gray-800 text-slate-50 drop-shadow-lg py-2 px-6 uppercase tracking-wide text-sm tex -translate-y-2 ">
                Login
              </button>
            </Link>
          </div>
        </div>
      </MyContainer>
    </>
  );
}
