
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import about from '../public/about.svg'
import about2 from '../public/about2.svg'
import Image from "next/image";
import BlurIn from "../components/magicui/blur-in";
import WordPullUp from "./magicui/word-pull-up";
import un from '../public/unsplash_uhzJ-Ss-57c.svg'
import prop1 from '../public/prop1.svg'
import prop2 from '../public/prop2.svg'
import prop3 from '../public/prop3.svg'
import prop4 from '../public/prop4.svg'
import house1 from '../public/house1.svg'
import { Divider } from "@mui/material";
const About = () => {
  const arr =[{
    image:prop1,
    title:'THE THAMES',
    address:'Kensington Palace, London'
  },{
    image:prop2,
    title:'DOWNING STREET',
    address:'Enfield and Haringey, London'
  },{
    image:prop3,
    title:'JERMYN',
    address:'Havering and Redbridge, London'
  },
  {
    image:prop4,
    title:'DOUGHTY STREET',
    address:'Havering and Redbridge, London'
  }]
  return (
    <>
  <div className="flex flex-col md:flex-row">
    <section className="md:w-4/12">
    <Image src={un} alt='' className="w-full object-cover"/>
    </section>
    <section className="bg-L-Primary  flex-col hidden  md:flex text-white w-8/12 gap-10 p-24">
    <section className="flex gap-5 items-center">
      <p className="text-white/60">HOW IT WORKS</p>
      <Divider className="bg-white w-8/12"/>
    </section>
    <section className="font-medium text-4xl">
CHOOSE YOUR <br />DREAM LOCATION
    </section>
    <section className="w-10/12">
    Start by telling us about your dream second home. 
Whether its a cottage in the Cotswolds or a modern flat in London,

Select your preferred location, and lets begin the search for a property that fits your lifestyle and aspirations.
    </section>
    </section>
  </div>
    <div className="flex flex-col md:flex-row h-[36rem]">
      
    {arr.map((e, index) => (
  <section key={index} className="w-3/12 group relative  overflow-hidden">
    <div className="z-10 w-full h-full absolute bg-black/50 transition-transform duration-300 transform group-hover:bg-transparent"></div>
    <div className="absolute z-20 w-full h-full pb-12 flex justify-center items-end">
     <p className="text-4xl font-bold text-white"> {e.title}</p>
    </div>
    <div className="w-full h-full z-0">
      <Image
        alt=""
        src={e.image}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
      />
    </div>
    
  </section>
))}

    </div>
    </>
  )
}

export default About