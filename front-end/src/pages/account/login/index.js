import {CircularProgress, TextField, Checkbox, FormControlLabel} from "@mui/material";
import Link from "next/link";
import MyContainer from "@modules/components/ui/MyContainer";
import React, {useState} from "react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState(window.localStorage.getItem("username") === false ? '' : window.localStorage.getItem("username"));
  const [password, setPassword] = useState(window.localStorage.getItem("password")=== false ? '' : window.localStorage.getItem("password"));
  const [loading, setLoading] = useState(false); // State to track loading state
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  async function handleAuthenticate(e) {
    setLoading(true);
    e.preventDefault
    try {
      const response = await fetch(process.env.user_authentication_api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS,GET,PUT'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        sessionStorage.setItem("token", token);

        if(rememberMe) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
        } else {
          sessionStorage.setItem("token", token);
        }

        setLoading(false)
       router.push("/dashboard");
        // Do something with the token
      } else {
        // Handle the error case
        console.error('Error:', response.status);
        alert(response.status)
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error)
    } finally {
      setLoading(false)

    }
  };



  return (
    <>
      <MyContainer className="pt-[87px] text-black min-h-screen ">
        <div className="grid h-[calc(100vh-87px)] place-items-center calc w-full px-4 lg:px-0">
          <div className="flex flex-col gap-2 w-full max-w-[450px] min-[520px]:px-8 min-[520px]:py-12 sm:w-[450px] border border-gray-300 shadow px-4 py-8 bg-white rounded-lg">
            <h1 className="text-3xl font-medium pb-5 text-left w-full">
              Login
            </h1>

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              sx={{ width: "100%", marginBottom: 2 }}
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              sx={{ width: "100%", marginBottom: 4 }}
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />

            <div className=" flex flex-col gap-2 items-center">
              {/*<Link*/}
              {/*  className="w-full mx-auto"*/}
              {/*  href={"/dashboard"}*/}
              {/*  passHref*/}
              {/*  style={{ textDecoration: "none", color: "black" }}*/}
              {/*>*/}
                <button className="rounded-md w-full bg-gray-800 text-slate-50 font-medium tracking-widest drop-shadow-lg py-3 px-6 uppercase text-base -translate-y-2  hover:bg-gray-700 duration-300 transition-all ease-in-out"
                onClick={handleAuthenticate}
                >
                  {loading ? <CircularProgress size={24} /> : 'Login'}

                </button>
              {/*</Link>*/}
              {/*<small className="text-sm text-center w-fit mx-auto">*/}
              {/*  Forgot your password?{" "}*/}
              {/*  <a href="/account/forgot_password" className="text-blue-500 underline">*/}
              {/*    Click here.*/}
              {/*  </a>*/}
              {/*</small>*/}
              <FormControlLabel
                  control={
                    <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                  label="Remember me"
              />
            </div>
          </div>
        </div>
      </MyContainer>
    </>
  );
}
