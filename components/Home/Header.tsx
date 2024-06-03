"use client";
import React from "react";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const {user}=useKindeBrowserClient()
  return (
    <div
      className={`fixed w-full ${
        path === "/view" ? "bg-L-Primary" : "bg-Sur-White"
      } h-auto max-h-[86px] md:p-[20px_60px] p-[12px] z-50 gap-0 ${
        path === "/view" ? "border-0" : "border-b"
      } flex justify-between items-center`}
    >
      <p
        className={`text-3xl font-bold ${
          path === "/view" ? "text-Sur-White" : "text-L-Primary"
        }`}
      >
        SYC
      </p>
      <div
        className={`w-5/12 justify-center items-center h-11 gap-5 flex  ${
          path === "/view" ? "text-Sur-White" : "text-L-Primary"
        }`}
      >
        <button className="">
          <Link href="/">Home</Link>
        </button>
        <button className="">About us</button>
        <button className="">
          <Link href="/properties">Properties</Link>
        </button>
     
      {user?
    <LogoutLink className="w-fit text-center py-2 bg-Brand/Primary hover:bg-Brand/Dark px-4 rounded-full text-Sur-White">Logout</LogoutLink>:
    <>
     <RegisterLink className="w-fit text-center py-2 bg-Brand/Primary hover:bg-Brand/Dark px-4 rounded-full text-Sur-White">Sign up</RegisterLink>
        <LoginLink className="w-fit text-center py-2 bg-Brand/Primary hover:bg-Brand/Dark px-4 rounded-full text-Sur-White">Sign in</LoginLink>
    </>  
    }
      </div>
    </div>
  );
};

export default Header;
