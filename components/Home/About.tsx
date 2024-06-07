import React from 'react'
import about from '../../public/aboutphoto.svg'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

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
      
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
       
        <CardItem translateZ="100" className="w-full ">
          <Image
            src={about}
           
            className=" w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
    </div>
  )
}

export default About
