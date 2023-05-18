import MyContainer from "@modules/components/ui/MyContainer";
import React from "react";
import Logo from "../../../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-900 ">
      <MyContainer>
        <div className="flex flex-col gap-6 items-center justify-center w-full py-8">
          <Link passHref href="/">
            <Image
              src={Logo}
              alt="Logo"
              className=" hover:brightness-75 duration-300 transition-all ease-in-out"
            />
          </Link>
          <small className=" text-gray-300">
            Copyright © 2023 UNSCATHED. All rights reserved
          </small>

          <div className=" flex divide-x divide-solid text-white">
            <Link
              href="/account/login"
              className=" px-6 text-gray-600 hover:text-gray-200 transition-all duration-300 ease-in-out"
            >
              Login
            </Link>
            <Link
              href="/account/register"
              className=" px-6 text-gray-600 hover:text-gray-200 transition-all duration-300 ease-in-out"
            >
              Register
            </Link>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
