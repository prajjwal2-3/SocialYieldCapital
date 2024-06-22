import React from "react";
import Image from "next/image";
import { Divider } from "@mui/material";
import un from '../public/unsplash_uhzJ-Ss-57c.svg';
import prop1 from '../public/prop1.svg';
import prop2 from '../public/prop2.svg';
import prop3 from '../public/prop3.svg';
import prop4 from '../public/prop4.svg';

const About = () => {
  const arr = [
    {
      image: prop1,
      title: 'THE THAMES',
      address: 'Kensington Palace, London',
    },
    {
      image: prop2,
      title: 'DOWNING STREET',
      address: 'Enfield and Haringey, London',
    },
    {
      image: prop3,
      title: 'JERMYN',
      address: 'Havering and Redbridge, London',
    },
    {
      image: prop4,
      title: 'DOUGHTY STREET',
      address: 'Havering and Redbridge, London',
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <section className="md:w-4/12">
        <section className="bg-transparent  flex-col flex md:hidden text-white w-8/12 gap-10 p-24">
          <div className="flex gap-5 items-center">
            <p className="text-white/60">HOW IT WORKS</p>
            <Divider className="bg-white w-8/12" />
          </div>
          <h2 className="font-medium text-4xl">
            CHOOSE YOUR <br /> DREAM LOCATION
          </h2>
          <p className="w-10/12">
            Start by telling us about your dream second home. Whether its a cottage in the Cotswolds or a modern flat in London,
            select your preferred location, and lets begin the search for a property that fits your lifestyle and aspirations.
          </p>
        </section>
          <Image src={un} alt="" className="w-full object-cover" />
        </section>
        <section className="bg-L-Primary hidden flex-col md:flex text-white w-8/12 gap-10 p-24">
          <div className="flex gap-5 items-center">
            <p className="text-white/60">HOW IT WORKS</p>
            <Divider className="bg-white w-8/12" />
          </div>
          <h2 className="font-medium text-4xl">
            CHOOSE YOUR <br /> DREAM LOCATION
          </h2>
          <p className="w-10/12">
            Start by telling us about your dream second home. Whether its a cottage in the Cotswolds or a modern flat in London,
            select your preferred location, and lets begin the search for a property that fits your lifestyle and aspirations.
          </p>
        </section>
      </div>
      <div className="flex  flex-wrap  h-auto sm:h-[36rem]">
        {arr.map((e, index) => (
          <section key={index} className="w-6/12 sm:w-3/12 group relative overflow-hidden">
            <div className="absolute z-10 w-full h-full bg-black/50 transition duration-300 transform group-hover:bg-transparent"></div>
            <div className="absolute z-20 w-full h-full pb-12 flex justify-center items-end">
              <p className="text-xl md:text-4xl font-bold text-white">{e.title}</p>
            </div>
            <Image
              src={e.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
          </section>
        ))}
      </div>
    </>
  );
};

export default About;
