"use client";
import React, { useState } from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const Header = () => {
  const path = usePathname();
  const { user } = useKindeBrowserClient();
  var className = "inverted";
  var scrollTrigger = 50;
  const [down, setdown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY >= scrollTrigger;
   setdown(scrolled)
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="header"
      className={`fixed w-full  h-auto max-h-[86px] md:p-[20px_60px] p-[12px] z-50 gap-0
       flex justify-between items-center
       ${path==='/view'?'bg-L-Primary':down?'bg-gray-500 bg-opacity-10   backdrop-blur-sm':'bg-transparent'}
       `}
    >
      <p
        className={`text-3xl font-bold text-Sur-White`}
      >
        SYC
      </p>
      <div
        className={`w-5/12 justify-center items-center h-11 gap-5 flex text-Sur-White`}
      >
        <button className="">
          <Link href="/">Home</Link>
        </button>
        <button className="">About us</button>
        <button className="">
          <Link href="/properties">Properties</Link>
        </button>

        {user ? (
          <LogoutLink className="w-fit text-center py-2 bg-Brand/Primary hover:bg-Brand/Dark px-4 rounded-full text-Sur-White">
            Logout
          </LogoutLink>
        ) : (
          <>
            <RegisterLink className="w-fit text-center py-2 bg-Brand/Primary hover:bg-Brand/Dark px-4 rounded-full text-Sur-White">
              Sign up
            </RegisterLink>
            <LoginLink className="w-fit text-center py-2 bg-Brand/Primary hover:bg-Brand/Dark px-4 rounded-full text-Sur-White">
              Sign in
            </LoginLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
