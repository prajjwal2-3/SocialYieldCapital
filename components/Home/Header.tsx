import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
const Header = () => {
  return (
    <header className='  h-auto max-h-[86px] md:p-[20px_60px] p-[12px] gap-0 border-b flex justify-between'>
        <Image
              src={logo}
              alt="Vercel Logo"
              
              className='w-[62px] h-[41px]'
              priority
            />
            <div className="w-96 h-11 gap-5 sm:flex hidden ">
                <button className='text-[#1C2B31]'>Home</button>
                <button className='text-[#1C2B31]'>About us</button>
                <button className='text-[#1C2B31]'>Properties</button>
                <button className='bg-[#507B8B] text-white rounded-full  h-11 p-[12px_20px_12px_20px]'>Sign up</button>
            </div>
            <DropdownMenu >
  <DropdownMenuTrigger className='sm:hidden flex my-auto outline-none px-4'><ArrowDropDownIcon/></DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator /> */}
    <DropdownMenuItem>Home</DropdownMenuItem>
    <DropdownMenuItem>About us</DropdownMenuItem>
    <DropdownMenuItem>Properties</DropdownMenuItem>
    <DropdownMenuItem className='bg-[#507B8B] text-white '>Sign Up</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </header>
  )
}

export default Header
