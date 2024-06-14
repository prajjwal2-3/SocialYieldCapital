
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
   <div className="bg-white sticky flex flex-col items-center justify-center md:flex-row  top-[4rem] md:top-[8rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12 h-[30rem] md:h-[32rem] m-0 md:m-5 rounded-3xl ">
      <section className="md:w-7/12 3xl:w-8/12 absolute  gap-4 flex flex-col p-6 md:p-10">
      <p className="text-2xl md:text-4xl font-bold text-white text-center">Welcome to <span className="text-white font-extrabold">Social Yield Capital</span> Simple innovation, smarter investing.</p>
      <p className="text-xl font-semibold text-white text-center">At SYC, we are united by a common goal: to empower our stakeholders by providing unmatched investment opportunities.
         Offering co-ownership in carefully selected properties, enabling accessible and lucrative investment options.</p>
      </section>
      
     
    
    
        
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/West_London_Skyline_-_geograph.org.uk_-_4246166.jpg"
           
            className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
         
    

    </div>
    <div className="bg-white sticky flex flex-col md:flex-row justify-center items-center top-[6rem] md:top-[10rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12 h-[30rem] md:h-[32rem] m-0 md:m-5 rounded-3xl ">
      <section className="md:w-7/12 3xl:w-8/12 absolute gap-4 flex flex-col p-6 md:p-10">
      <p className="text-2xl md:text-4xl font-bold text-white text-center">Welcome to <span className="text-L-Primary font-extrabold">Social Yield Capital</span> Simple innovation, smarter investing.</p>
      <p className="text-xl font-semibold text-white text-center">At SYC, we are united by a common goal: to empower our stakeholders by providing unmatched investment opportunities.
         Offering co-ownership in carefully selected properties, enabling accessible and lucrative investment options.</p>
      </section>
      
     
        
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Sunset_Toronto_Skyline_Panorama_from_Snake_Island.jpg"
           
            className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
         

    </div>
    <div className="bg-white sticky flex flex-col md:flex-row  items-center justify-center top-[8rem] md:top-[12rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12 h-[30rem] md:h-[32rem] m-0 md:m-5 rounded-3xl ">
      <section className="md:w-7/12 3xl:w-8/12 absolute gap-4 flex flex-col p-6 md:p-10">
      <p className="text-2xl md:text-4xl font-bold text-white text-center">Welcome to <span className="text-L-Primary font-extrabold">Social Yield Capital</span> Simple innovation, smarter investing.</p>
      <p className="text-xl font-semibold text-white text-center">At SYC, we are united by a common goal: to empower our stakeholders by providing unmatched investment opportunities.
         Offering co-ownership in carefully selected properties, enabling accessible and lucrative investment options.</p>
      </section>
      
  
        
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/London_Skyline_from_Waterloo_Bridge%2C_London%2C_UK_-_Diliff.jpg"
           
            className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
         
     

    </div>
    <div className="bg-white sticky flex flex-col md:flex-row items-center justify-center top-[10rem] md:top-[14rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12 h-[30rem] md:h-[32rem] m-0 md:m-5 rounded-3xl ">
      <section className="md:w-7/12 3xl:w-8/12 absolute gap-4 flex flex-col p-6 md:p-10">
      <p className="text-2xl md:text-4xl font-bold text-white text-center">Welcome to <span className="text-Brand/Primary font-extrabold">Social Yield Capital</span> Simple innovation, smarter investing.</p>
      <p className="text-xl font-semibold text-white text-center">At SYC, we are united by a common goal: to empower our stakeholders by providing unmatched investment opportunities.
         Offering co-ownership in carefully selected properties, enabling accessible and lucrative investment options.</p>
      </section>
     
        
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/London_MMB_%C2%BB067_River_Thames_and_the_City.jpg"
           
            className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
         
       

    </div>
   
   </div>
    
    </>
  )
}

export default About