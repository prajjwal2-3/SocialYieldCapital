'use client'
import React from 'react'
import Image from 'next/image'
import coder from '../../public/coderrrr.svg'
import { motion } from 'framer-motion'
export default function Hero3() {
  return (
    <div className='h-screen bg-Sur-light-300 w-full'>
<section className="w-full  z-40 h-fit absolute  px-[6rem] py-24  my-28 sm:my-10 2xl:my-12 3xl:my-16 4xl:my-20">
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [-110, 0],
          }}
          transition={{
            duration: 1,
            type: "keyframes",
          }}
          className="text-[2.4rem] xl:text-[2.6rem] 2xl:text-[3.8rem] 3xl:text-[4.6rem] 4xl:text-[5.4rem] text-L-Primary flex flex-col w-full md:w-11/12 h-fit "
        >
          <section className="flex">
          <span>Invest in</span>
         
          
          
          <p className="px-4 font-bold text-Brand/Primary">real-estate</p>
      
     
         
        
          
          </section>
        <p> with  <span className="font-bold"> Social yield capital </span></p>
        
        </motion.div>
       
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [110, 0],
          }}
          transition={{
            duration: 1,
            type: "keyframes",
          }}
          className="absolute w-11/12 sm:w-5/12 3xl:w-6/12 mt-5  flex flex-col justify-between gap-3"
        >
          <p className="text-L-Primary text-lg xl:text-[1.5rem] 2xl:text-[1.65rem] 3xl:text-4xl 4xl:text-5xl leading-10 font-normal">
            Your gateway to smarter co-ownership and seamless property
            management, all under the trusted guardianship of the UKs finest
            real estate innovators.
          </p>
          <section className="w-10/12 flex gap-4 3xl:gap-8 mt-10 xl:mt-20 2xl:mt-24 4xl:mt-48 ">
            <button className="inline-flex h-12 animate-shimmer hover:animate-shimmer2 items-center justify-center rounded-lg text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Start Investing
            </button>
            <button className="inline-flex h-12 animate-shimmer bg-transparent hover:animate-shimmer2 items-center justify-center rounded-lg text-L-Primary border shadow-xl  px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Who are we
            </button>
          </section>
        </motion.div>
      </section>
      <Image src={coder} alt='' className='w-full h-full object-cover'/>
    </div>
  )
}
