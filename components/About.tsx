
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import about from '../public/about.svg'
import about2 from '../public/about2.svg'
import Image from "next/image";
import BlurIn from "../components/magicui/blur-in";
import WordPullUp from "./magicui/word-pull-up";
const About = () => {
  return (
    <>
   <div className="bg-L-Primary p-2 md:p-20  flex flex-col justify-center gap-5 items-center">
   <WordPullUp
      words="Who we are"
      className="text-4xl font-bold text-white dark:text-white"
    />
   <div className="bg-white sticky flex flex-col md:flex-row  top-[4rem] md:top-[8rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12 h-[30rem] md:h-[32rem] m-0 md:m-5 rounded-3xl ">
      <section className="md:w-7/12 3xl:w-8/12 gap-4 flex flex-col p-6 md:p-10">
      <p className="text-2xl md:text-4xl font-bold text-L-Primary">Welcome to <span className="text-Brand/Primary font-extrabold">Social Yield Capital</span> Simple innovation, smarter investing.</p>
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
    <div className="bg-white sticky flex flex-col md:flex-row  top-[6rem] md:top-[10rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12 h-[30rem] md:h-[32rem] m-0 md:m-5 rounded-3xl ">
      <section className="md:w-7/12 3xl:w-8/12 gap-4 flex flex-col p-6 md:p-10">
      <p className="text-2xl md:text-4xl font-bold text-L-Primary">Welcome to <span className="text-Brand/Primary font-extrabold">Social Yield Capital</span> Simple innovation, smarter investing.</p>
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
    <div className="bg-white sticky flex flex-col md:flex-row  top-[8rem] md:top-[12rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12 h-[30rem] md:h-[32rem] m-0 md:m-5 rounded-3xl ">
      <section className="md:w-7/12 3xl:w-8/12 gap-4 flex flex-col p-6 md:p-10">
      <p className="text-2xl md:text-4xl font-bold text-L-Primary">Welcome to <span className="text-Brand/Primary font-extrabold">Social Yield Capital</span> Simple innovation, smarter investing.</p>
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
    <div className="bg-white sticky flex flex-col md:flex-row  top-[10rem] md:top-[14rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12 h-[30rem] md:h-[32rem] m-0 md:m-5 rounded-3xl ">
      <section className="md:w-7/12 3xl:w-8/12 gap-4 flex flex-col p-6 md:p-10">
      <p className="text-2xl md:text-4xl font-bold text-L-Primary">Welcome to <span className="text-Brand/Primary font-extrabold">Social Yield Capital</span> Simple innovation, smarter investing.</p>
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
   
   </div>
    
    </>
  )
}

export default About