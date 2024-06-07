import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import logo from '../public/logo.svg'
import twitter from '../public/twitter.svg'
import facebook from '../public/Facebook Icon.svg'
import linkedin from '../public/Linkedin.svg'
const Footer = () => {
  return (
    <div className='bg-L-Primary p-[15px_50px] lg:p-[60px_200px]  h-fit md:h-[19rem] flex flex-col justify-around'>
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
  )
}

export default Footer
