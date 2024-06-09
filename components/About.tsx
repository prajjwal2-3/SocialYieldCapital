
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
    <BentoGrid className="max-w-4xl mx-auto">
     
       
    
      <CardContainer className="inter-var">
    <CardBody className=" relative group/card dark:border-white/[0.2] border-black/[0.1] bg-gray-50 border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-auto h-auto rounded-xl   ">
     
      <CardItem translateZ="100" className="w-full  relative">
    <div  className=''>
      <p className="text-4xl font-semibold">Simple Innovation,Smarter Investing</p>
    </div>
       
       
      </CardItem>
     
    </CardBody>
    
  </CardContainer>
  <CardContainer className="inter-var">
      <CardBody className=" relative group/card dark:border-white/[0.2] border-black/[0.1] bg-gray-50 border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-auto h-auto rounded-xl   ">
       <CardItem className='absolute w-full'>
       <Image src={about} alt='' className='w-full object-cover rounded-xl group-hover/card:shadow-xl '/>
       </CardItem>
        <CardItem translateZ="100" className="w-full  relative">
        
          <Image
            src={about2}
           
            className=" w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
         
        </CardItem>
       
      </CardBody>
      
    </CardContainer>
    </BentoGrid>
    
    </>
  )
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
   '1','2','3','4'
  ];
export default About
