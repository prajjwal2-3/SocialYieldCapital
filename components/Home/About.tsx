import React from 'react'
import about from '../../public/aboutphoto.svg'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const About = () => {
  return (
    <div className='py-24 px-14 xl:px-24 flex gap-10 justify-between '>
      <section className='w-8/12 flex flex-col 2xl:gap-5 items-start p-3'>
        <p className='text-xl 3xl:text-[1.5rem] 4xl:text-[2rem] font-medium text-[#507B8B]'>Who we are</p>
        <p className='text-4xl 3xl:text-5xl 4xl:text-6xl font-semibold '>Welcome to 
        <span className='text-4xl 3xl:text-5xl 4xl:text-6xl font-semibold text-[#507B8B] px-2'>Social Yield Capital</span>
Simple innovation, smarter investing.</p>
        <p className='text-[#6B7579] text-xl 4xl:text-3xl mt-5 font-medium'>At SYC, we are united by a common goal: to empower our stakeholders by providing unmatched investment opportunities. 
Offering co-ownership in carefully selected properties, enabling accessible and lucrative investment options.</p>
        <button className='text-[#507B8B] font-semibold mt-4 4xl:text-2xl '>Read more
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
