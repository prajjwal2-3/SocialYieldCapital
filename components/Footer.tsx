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
    <div className="bg-Brand/Primary w-full flex-col sm:flex-row h-auto py-6 md:h-fit justify-around  gap-5 flex md:px-24 text-center items-center">
<p className='font-semibold text-2xl md:text-4xl  text-white'>Take your investments
to the next level.</p>

<section className=" justify-center items-center  flex  3xl:gap-8">
            <button className="inline-flex h-12 animate-shimmer hover:animate-shimmer2 items-center justify-center rounded-lg text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Contact Us
            </button>
           
          </section>
    </div>
    <div className='bg-L-Primary p-[15px_50px] xl:p-[60px_200px] gap-5 h-fit  flex flex-col justify-around'>
      <div className="lg:flex hidden flex-row items-center gap-4">
      <p className='text-3xl w-3/12 font-bold text-center text-Sur-White'>
        SYC
     </p> 
      <section className=' w-5/12  text-L-Secondary text-center text-xs md:text-base'>
        © 2024 Social Yield Capital. All Rights Reserved. 
        </section>
        <section className='flex w-4/12 text-center flex-row gap-6 text-Sur-White'>
            <button className='text-right'>About us</button>
            <button className='text-right'>Properties</button>
            <button className='text-right'>Contact us</button>
           
        </section>
      </div>
      <div className="flex flex-wrap lg:hidden items-center justify-between">
      <p className='text-3xl w-2/12 font-bold text-center text-Sur-White'>
        SYC
     </p> 
      <section className=' w-8/12  text-L-Secondary text-center text-xs md:text-base'>
        © 2024 Social Yield Capital. All Rights Reserved. 
        </section>
        <section className='flex w-full justify-center items-center text-center flex-row gap-6 text-Sur-White'>
            <button className='text-right'>About us</button>
            <button className='text-right'>Properties</button>
            <button className='text-right'>Contact us</button>
           
        </section>
      </div>
      
    </div>
    </>
  )
}

export default Footer
