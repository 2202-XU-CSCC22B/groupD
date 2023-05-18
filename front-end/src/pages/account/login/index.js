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
        <div className="grid h-[calc(100vh-87px)] place-items-center calc w-full px-4 lg:px-0">
          <div className="flex flex-col gap-2 w-full max-w-[450px] min-[520px]:px-8 min-[520px]:py-12 sm:w-[450px] border border-gray-300 shadow px-4 py-8">
            <h1 className="text-3xl font-medium pb-5 text-left w-full">
              Login
            </h1>

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

            <div className=" flex flex-col gap-2 items-center">
              <Link
                className="w-full mx-auto"
                href={"/dashboard"}
                passHref
                style={{ textDecoration: "none", color: "black" }}
              >
                <button class="rounded-md w-full bg-gray-800 text-slate-50 font-medium tracking-widest drop-shadow-lg py-3 px-6 uppercase text-base tex -translate-y-2 ">
                  Login
                </button>
              </Link>
              <small className=" text-sm text-center w-fit mx-auto">
                Forgot your password?{" "}
                <span className=" text-blue-500 underline">Click here.</span>
              </small>
            </div>
          </div>
        </div>
      </MyContainer>
    </>
  );
}
