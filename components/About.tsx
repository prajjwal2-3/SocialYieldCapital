
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import about from '../public/about.svg'
import about2 from '../public/about2.svg'
import Image from "next/image";
import BlurIn from "../components/magicui/blur-in";
import WordPullUp from "./magicui/word-pull-up";
import un from '../public/unsplash_uhzJ-Ss-57c.svg'
import { Divider } from "@mui/material";
const About = () => {
  return (
    <>
  <div className="flex ">
    <section className="w-4/12">
    <Image src={un} alt=''/>
    </section>
    <section className="bg-L-Primary flex flex-col text-white w-8/12 gap-10 p-24">
    <section className="flex gap-5 items-center">
      <p className="text-white/60">HOW IT WORKS</p>
      <Divider className="bg-white w-8/12"/>
    </section>
    <section className="font-medium text-4xl">
CHOOSE YOUR <br />DREAM LOCATION
    </section>
    <section className="w-10/12">
    Start by telling us about your dream second home. 
Whether it’s a cottage in the Cotswolds or a modern flat in London,

Select your preferred location, and let's begin the search for a property that fits your lifestyle and aspirations.
    </section>
    </section>
  </div>
    
    </>
  )
}

export default About