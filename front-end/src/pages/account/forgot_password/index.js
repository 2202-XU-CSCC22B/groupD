import { TextField } from "@mui/material";
import Link from "next/link";
import MyContainer from "@modules/components/ui/MyContainer";

export default function forgotPassword() {
  return (
    <>
      <MyContainer className="pt-[87px] text-black min-h-screen ">
        <div className="grid h-[calc(100vh-87px)] place-items-center calc w-full px-4 lg:px-0">
          <div className="flex flex-col gap-2 w-full max-w-[450px] min-[520px]:px-8 min-[520px]:py-12 sm:w-[450px] border border-gray-300 shadow px-4 py-8 bg-white rounded-lg">
            <h1 className="text-3xl font-medium pb-5 text-left w-full">
              Forgot Password
            </h1>

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              sx={{ width: "100%", marginBottom: 2 }}
            />

            <div className=" flex flex-col gap-2 items-center">
              <Link
                className="w-full mx-auto"
                href={"/account/login"}
                passHref
                style={{ textDecoration: "none", color: "black" }}
              >
                <button className="rounded-md w-full bg-gray-800 text-slate-50 font-medium tracking-widest drop-shadow-lg py-3 px-6 uppercase text-base -translate-y-2  hover:bg-gray-700 duration-300 transition-all ease-in-out">
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </MyContainer>
    </>
  );
}
