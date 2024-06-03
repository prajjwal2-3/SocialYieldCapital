"use client";
import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
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
        className={`w-96 h-11 gap-5 flex  ${
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
        <button className="bg-[#507B8B] text-Sur-White  rounded-full  h-11 p-[12px_20px_12px_20px]">
          <Link href="/Auth">Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
