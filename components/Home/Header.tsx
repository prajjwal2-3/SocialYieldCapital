"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
       ${path.startsWith('/view/')?'bg-L-Primary':down?'bg-Brand/Primary bg-opacity-30 shadow-lg shadow-black/20   backdrop-blur-sm':'bg-transparent '}
       
       `}
    >
      <p
        className={`text-3xl font-bold ${path==='/AboutUs'|| path==='/dashboard' || path==='/properties'?'  text-L-Primary':'text-white'}`}
      >
      <Link href="/">SYC</Link>
      </p>
      <div
        className={`  text-lg hidden justify-center  items-center h-11 gap-5 sm:flex ${path==='/AboutUs'|| path==='/dashboard' || path==='/properties'?'  text-L-Primary':'text-white'}`}
      >
        <button className={`${path==='/'?'border-b-2 ':''}`}>
          <Link href="/">Home</Link>
        </button>
        <button className={path==='/AboutUs'?'border-b-2 border-Brand/Primary ':''}>
          <Link href="/AboutUs">About us</Link>
        </button>
        <button className="">Our team</button>
        <button className={path==='/properties'||path==='/dashboard'?'border-b-2 border-Brand/Primary':''}>
          <Link href="/properties">Our Vision</Link>
        </button>
        <button className={path==='/properties'||path==='/dashboard'?'border-b-2 border-Brand/Primary':''}>
          <Link href="/home2">Home 2</Link>
        </button>
        </div>
<div className="hidden sm:flex gap-5">
        {user ? (
          <LogoutLink className="inline-flex h-12 animate-shimmer hover:animate-shimmer2 items-center justify-center rounded-lg text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
            Logout
          </LogoutLink>
        ) : (
          <>
            
            <LoginLink className="inline-flex h-12 animate-shimmer hover:animate-shimmer2 items-center justify-center rounded-lg text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Sign in
            </LoginLink>
          </>
        )}
      </div>
      <DropdownMenu >
      <DropdownMenuTrigger asChild className="block sm:hidden">
        <Button className="outline-none"><ArrowDropDownIcon/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <button className={`${path==='/'?'border-b-2 ':''}`}>
          <Link href="/">Home</Link>
        </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
        <button className="">About us</button>
        </DropdownMenuItem>
         <DropdownMenuItem>
        <button className={path==='/properties'?'border-b-2 border-Brand/Primary':''}>
          <Link href="/properties">Properties</Link>
        </button>
        </DropdownMenuItem>
        <DropdownMenuGroup className="flex flex-col gap-3">
        {user ? (
          <LogoutLink className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
            Logout
          </LogoutLink>
        ) : (
          <>
            <RegisterLink className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Sign up
            </RegisterLink>
            <LoginLink className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Sign in
            </LoginLink>
          </>
        )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
};

export default Header;
