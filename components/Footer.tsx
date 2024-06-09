import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import logo from '../public/logo.svg'
import twitter from '../public/twitter.svg'
import facebook from '../public/Facebook Icon.svg'
import linkedin from '../public/Linkedin.svg'
const Footer = () => {
  return (
    <>
    <div className="bg-Brand/Primary w-full flex-col h-auto py-6 md:h-[24rem]  gap-5 flex justify-center text-center items-center">
<p className='font-semibold text-4xl md:w-5/12 w-8/12 text-white'>Take your investments
to the next level.</p>
<p className='font-medium text-xl md:w-5/12 w-8/12 text-D-Secondary'>Discover the exclusive benefits of our co-ownership model, designed to elevate your portfolio through premium property investments with accessible entry points.</p>
<section className="md:w-5/12 justify-center items-center flex gap-4 3xl:gap-8">
            <button className="inline-flex h-12 animate-shimmer hover:animate-shimmer2 items-center justify-center rounded-xl text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Contact Us
            </button>
            <button className="inline-flex h-12 animate-shimmer hover:animate-shimmer2 items-center justify-center rounded-xl text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Sign Up
            </button>
          </section>
    </div>
    <div className='bg-L-Primary p-[15px_50px] xl:p-[60px_200px]  h-fit md:h-[19rem] flex flex-col justify-around'>
      <div className="flex justify-between">
        <section className='flex flex-col lg:flex-row gap-4    text-L-Secondary'>
            <button className='text-left'>Talk to us</button>
            <button className='text-left'>+1234566879</button>
            <button className='text-left'>support@gmail.com</button>
        </section>
        <section className='flex flex-col lg:flex-row gap-6 text-Sur-White'>
            <button className='text-right'>About us</button>
            <button className='text-right'>Properties</button>
            <button className='text-right'>Contact us</button>
            <button className='text-right'>Terms & Conditions</button>
            <button className='text-right'>Privacy Policy</button>
        </section>
      </div>
      <Separator className='bg-L-Secondary'/>
      <div className="flex flex-col gap-5 sm:flex-row  justify-between my-5 md:my-0">
     
     <p className='text-3xl font-bold text-Sur-White'>
        SYC
     </p>
       
        <section className='flex gap-6 text-L-Secondary text-xs md:text-base'>
        © 2024 Social Yield Capital. All Rights Reserved. 
        </section>
        <section className='flex gap-3 flex-row'>
         <Image src={facebook} alt=''/>
         <Image src={linkedin} alt=''/>
         <Image src={twitter} alt=''/>
        </section>
      </div>
    </div>
    </>
  )
}

export default Footer
