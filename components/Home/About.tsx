import React from 'react'
import about from '../../public/aboutphoto.svg'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const About = () => {
  return (
    <div className='py-24 px-14 xl:px-24 flex gap-10 justify-between'>
      <section className='w-8/12 p-3'>
        <p className='text-xl font-medium text-[#507B8B]'>Who we are</p>
        <p className='text-4xl font-semibold '>Welcome to 
        <span className='text-4xl font-semibold text-[#507B8B] px-2'>Social Yield Capital</span>
Simple innovation, smarter investing.</p>
        <p className='text-[#6B7579] text-xl mt-5 font-medium'>At SYC, we are united by a common goal: to empower our stakeholders by providing unmatched investment opportunities. 
Offering co-ownership in carefully selected properties, enabling accessible and lucrative investment options.</p>
        <button className='text-[#507B8B] font-semibold mt-4'>Read more
        <ArrowForwardIcon fontSize='small' className='text-[#507B8B]'/>
        </button>
      </section>
      <section className='w-4/12 flex items-center justify-center'>
        <Image src={about} alt=''/>
      </section>
    </div>
  )
}

export default About
