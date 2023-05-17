import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../../../public/logo.svg";
import MyContainer from "@modules/components/ui/MyContainer";
import { FaTimes, FaBars } from "react-icons/fa";
import { Menu } from "@headlessui/react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },

  { label: "Contact", href: "#contact" },
];

const NavBar = ({ className, ...props }) => {
  return (
    <div
      className={`${className} fixed  bg-gray-900 w-full py-6 px-4 xl:px-0 shadow-lg`}
      {...props}
    >
      <MyContainer className=" flex justify-between items-center ">
        {/* logo */}
        <Link
          passHref
          href="/"
          className="  hover:scale-95 transition-all duration-300 ease-in-out  "
        >
          <Image src={Logo} />
        </Link>

        {/* desktop nav */}
        <div className="hidden sm:flex gap-6">
          {links.map((link, index) => (
            <Link
              className="text-sm transition-all duration-300 ease-in-out p-2 text-gray-50 uppercase font-medium tracking-wide hover:bg-gray-700 rounded-lg"
              key={index}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* mobile nav */}
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="cursor-pointer text-white sm:hidden">
                {open ? <FaTimes size={24} /> : <FaBars size={24} />}
              </Menu.Button>
              {open && (
                <div className="absolute right-0 translate-y-[160px] w-full bg-gray-900 sm:hidden block">
                  <Menu.Items className=" flex flex-col px-4 py-8 divide-y divide-solid divide-gray-800 outline-none ">
                    {links.map((link) => (
                      <Menu.Item
                        as="a"
                        key={link.href}
                        href={link.href}
                        className="py-4 hover:bg-gray-800 transition-all duration-300 ease-in-out px-4 text-white uppercase tracking-widest"
                      >
                        {link.label}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </div>
              )}
            </>
          )}
        </Menu>
      </MyContainer>
    </div>
  );
};

export default NavBar;
