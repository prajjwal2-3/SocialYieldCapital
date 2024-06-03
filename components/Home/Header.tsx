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
import Link from 'next/link';
  
const Header = () => {
  return (
    <div className='fixed w-full bg-Sur-White h-auto max-h-[86px] md:p-[20px_60px] p-[12px] z-50 gap-0 border-b flex justify-between'>
        <Image
              src={logo}
              alt="Vercel Logo"
              
              className='w-[62px] h-[41px]'
              priority
            />
            <div className="w-96 h-11 gap-5 flex ">
                <button className='text-[#1C2B31]'>
                  <Link href='/'>
                  Home
                  </Link>
                </button>
                <button className='text-[#1C2B31]'>About us</button>
                <button className='text-[#1C2B31]'>Properties</button>
                <button  className='bg-[#507B8B] text-Sur-White  rounded-full  h-11 p-[12px_20px_12px_20px]'>
                <Link
                 href='/Auth'
                
                >
               
              Sign up
               </Link>
               </button>
            </div>
            

    </div>
  )
}

export default Header
