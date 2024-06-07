"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
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
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
};

export default Header;
