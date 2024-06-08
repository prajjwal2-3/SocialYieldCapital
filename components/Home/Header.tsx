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
       ${path==='/view'?'bg-L-Primary':down?'bg-Brand/Primary bg-opacity-30 shadow-lg shadow-black/20   backdrop-blur-sm':'bg-transparent'}
       `}
    >
      <p
        className={`text-3xl font-bold ${path==='/view'?'text-Sur-White':'text-L-Primary'}`}
      >
        SYC
      </p>
      <div
        className={`  text-lg hidden  items-center h-11 gap-5 sm:flex ${path==='/view'?'text-Sur-White':'text-L-Primary'}`}
      >
        <button className={`${path==='/'?'border-b-2 ':''}`}>
          <Link href="/">Home</Link>
        </button>
        <button className="">About us</button>
        <button className={path==='/properties'?'border-b-2 border-Brand/Primary':''}>
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
          <LogoutLink className="w-full text-center py-2 bg-Brand/Primary hover:bg-Brand/Dark px-4 rounded-full text-Sur-White">
            Logout
          </LogoutLink>
        ) : (
          <>
            <RegisterLink className="w-full text-center py-2 bg-Brand/Primary hover:bg-Brand/Dark px-4 rounded-full text-Sur-White">
              Sign up
            </RegisterLink>
            <LoginLink className="w-full text-center py-2 bg-Brand/Primary hover:bg-Brand/Dark px-4 rounded-full text-Sur-White">
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
