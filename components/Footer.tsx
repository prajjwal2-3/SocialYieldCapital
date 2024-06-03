import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import logo from '../public/logo.svg'
import twitter from '../public/twitter.svg'
import facebook from '../public/Facebook Icon.svg'
import linkedin from '../public/Linkedin.svg'
const Footer = () => {
  return (
    <div className='bg-L-Primary p-[60px_200px] h-[19rem] flex flex-col justify-around'>
      <div className="flex justify-between">
        <section className='flex gap-4 text-L-Secondary'>
            <button>Talk to us</button>
            <button>+1234566879</button>
            <button>support@gmail.com</button>
        </section>
        <section className='flex gap-6 text-Sur-White'>
            <button>About us</button>
            <button>Properties</button>
            <button>Contact us</button>
            <button>Terms & Conditions</button>
            <button>Privacy Policy</button>
        </section>
      </div>
      <Separator className='bg-L-Secondary'/>
      <div className="flex justify-between">
     
     <p className='text-3xl font-bold text-Sur-White'>
        SYC
     </p>
       
        <section className='flex gap-6 text-L-Secondary'>
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
