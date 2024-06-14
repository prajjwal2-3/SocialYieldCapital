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
    <div className="bg-Brand/Primary w-full flex-row h-auto py-6 md:h-fit justify-between  gap-5 flex px-24 text-center items-center">
<p className='font-semibold text-4xl md:w-6/12 w-8/12 text-white'>Take your investments
to the next level.</p>

<section className="md:w-6/12 justify-center items-center  flex gap-4 3xl:gap-8">
            <button className="inline-flex h-12 animate-shimmer hover:animate-shimmer2 items-center justify-center rounded-lg text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Contact Us
            </button>
           
          </section>
    </div>
    <div className='bg-L-Primary p-[15px_50px] xl:p-[60px_200px] gap-5 h-fit  flex flex-col justify-around'>
      <div className="flex justify-between">
      <section className='flex gap-6 text-L-Secondary text-xs md:text-base'>
        © 2024 Social Yield Capital. All Rights Reserved. 
        </section>
        <section className='flex flex-col lg:flex-row gap-6 text-Sur-White'>
            <button className='text-right'>About us</button>
            <button className='text-right'>Properties</button>
            <button className='text-right'>Contact us</button>
            <button className='text-right'>Terms & Conditions</button>
            <button className='text-right'>Privacy Policy</button>
        </section>
      </div>
      <p className='text-3xl font-bold  text-Sur-White'>
        SYC
     </p>
      
    </div>
    </>
  )
}

export default Footer
