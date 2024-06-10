
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import about from '../public/about.svg'
import about2 from '../public/about2.svg'
import Image from "next/image";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const About = () => {
  return (
    <>
   <div className="bg-L-Primary p-20  flex flex-col justify-center gap-5 items-center">
    <p className="text-5xl font-bold text-white">Who we are</p>
   <div className="bg-white sticky flex  top-[8rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-11/12 h-[32rem] m-5 rounded-3xl ">
      <section className="w-7/12 3xl:w-8/12 gap-4 flex flex-col p-10">
      <p className="text-4xl font-bold text-L-Primary">Welcome to <span className="text-Brand/Primary font-extrabold">Social Yield Capital</span> Simple innovation, smarter investing.</p>
      <p className="text-xl font-semibold text-L-Secondary">At SYC, we are united by a common goal: to empower our stakeholders by providing unmatched investment opportunities.
         Offering co-ownership in carefully selected properties, enabling accessible and lucrative investment options.</p>
      </section>
      
      <CardContainer className=" h-full inter-var">
      <CardBody className=" relative group/card dark:border-white/[0.2] border-black/[0.1] bg-gray-50 border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-full h-full rounded-3xl   ">
       <CardItem className='absolute h-full w-full'>
       <Image src={about} alt='' className='w-full object-cover h-full rounded-3xl group-hover/card:shadow-xl '/>
       </CardItem>
        <CardItem translateZ="100" className="w-full h-full relative">
        
          <Image
            src={about2}
           
            className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
         
        </CardItem>
       
      </CardBody>
      
    </CardContainer>

    </div>
    <div className="bg-white flex sticky top-[10rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] border w-11/12 h-[32rem] m-5 rounded-3xl ">
    <section className="w-7/12 3xl:w-8/12 gap-4 flex flex-col p-10">
  <p className="text-4xl font-bold text-L-Primary">
    Our Mission
  </p>
  <p className="text-xl font-semibold text-L-Secondary">
    At Social Yield Capital, our mission is to democratize real estate investment by making it accessible to everyone. We strive to create a sustainable and inclusive investment platform that benefits both investors and communities alike. Through transparency and innovation, we aim to build a future where real estate investment opportunities are available to all.
  </p>
</section>
      
      <CardContainer className=" h-full inter-var">
      <CardBody className=" relative group/card dark:border-white/[0.2] border-black/[0.1] bg-gray-50 border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-full h-full rounded-3xl   ">
       <CardItem className='absolute h-full w-full'>
       <Image src={about} alt='' className='w-full object-cover h-full rounded-3xl group-hover/card:shadow-xl '/>
       </CardItem>
        <CardItem translateZ="100" className="w-full h-full relative">
        
          <Image
            src={about2}
           
            className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
         
        </CardItem>
       
      </CardBody>
      
    </CardContainer>
    </div>
    <div className="bg-white flex sticky top-[12rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-11/12 h-[32rem] m-5 rounded-3xl ">
    <section className="w-7/12 3xl:w-8/12 gap-4 flex flex-col p-10 shadow-lg">
  <p className="text-4xl font-bold text-L-Primary">
    Investment Opportunities
  </p>
  <p className="text-xl font-semibold text-L-Secondary">
    Social Yield Capital offers a range of investment opportunities, including social housing, corporate housing, and more. Each property is carefully vetted to ensure it meets our high standards for quality and profitability. Our platform allows investors to co-own properties, providing a unique opportunity to participate in the real estate market with lower barriers to entry.
  </p>
</section>
<CardContainer className=" h-full inter-var">
      <CardBody className=" relative group/card dark:border-white/[0.2] border-black/[0.1] bg-gray-50 border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-full h-full rounded-3xl   ">
       <CardItem className='absolute h-full w-full'>
       <Image src={about} alt='' className='w-full object-cover h-full rounded-3xl group-hover/card:shadow-xl '/>
       </CardItem>
        <CardItem translateZ="100" className="w-full h-full relative">
        
          <Image
            src={about2}
           
            className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
         
        </CardItem>
       
      </CardBody>
      
    </CardContainer>
    </div>
    <div className="bg-white flex sticky top-[14rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-11/12 h-[32rem] m-5 rounded-3xl ">
    <section className="w-7/12 3xl:w-8/12 gap-4 flex flex-col p-10 shadow-lg">
  <p className="text-4xl font-bold text-L-Primary">
    Why Choose Us?
  </p>
  <p className="text-xl font-semibold text-L-Secondary">
    At Social Yield Capital, we prioritize transparency, security, and profitability in all our investment opportunities. Our expert team uses data-driven insights to select and manage properties, ensuring that our investors receive the best possible returns. We are committed to providing a seamless and rewarding investment experience for all our stakeholders.
  </p>
</section>
    <CardContainer className=" h-full inter-var">
      <CardBody className=" relative group/card dark:border-white/[0.2] border-black/[0.1] bg-gray-50 border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-full h-full rounded-3xl   ">
       <CardItem className='absolute h-full w-full'>
       <Image src={about} alt='' className='w-full object-cover h-full rounded-3xl group-hover/card:shadow-xl '/>
       </CardItem>
        <CardItem translateZ="100" className="w-full h-full relative">
        
          <Image
            src={about2}
           
            className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
         
        </CardItem>
       
      </CardBody>
      
    </CardContainer>
    </div>
   
   </div>
    
    </>
  )
}

export default About
