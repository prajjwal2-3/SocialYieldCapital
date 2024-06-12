"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import WordRotate from "../magicui/word-rotate";
import { useState,useEffect } from "react";
const Hero = () => {
  


  return (
    <div className="h-full ">
      <section className="w-full  z-40 h-fit absolute  px-[12rem] py-24  my-28 sm:my-10 2xl:my-12 3xl:my-16 4xl:my-20">
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [-110, 0],
          }}
          transition={{
            duration: 1,
            type: "keyframes",
          }}
          className="text-[2.4rem] xl:text-[2.6rem] 2xl:text-[3.8rem] 3xl:text-[4.6rem] 4xl:text-[5.4rem] text-Sur-White flex flex-col w-full md:w-10/12 h-fit "
        >
          <section className="flex">
          <span>Invest in</span>
         
          
          
          <WordRotate
      className="px-4 font-bold text-L-Primary dark:text-white"
      words={["real-estate", "social-housing","properties","commercial-housing","commercial-properties"]}
    />
         
        
          
          </section>
        <p> with  <span className="font-bold"> Social yield capital </span></p>
        
        </motion.div>
       
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [110, 0],
          }}
          transition={{
            duration: 1,
            type: "keyframes",
          }}
          className="absolute w-11/12 sm:w-5/12 3xl:w-6/12  flex flex-col justify-between gap-3"
        >
          <p className="text-Sur-White text-lg xl:text-[1.5rem] 2xl:text-[1.65rem] 3xl:text-4xl 4xl:text-5xl font-medium">
            Your gateway to smarter co-ownership and seamless property
            management, all under the trusted guardianship of the UKs finest
            real estate innovators.
          </p>
          <section className="w-10/12 flex gap-4 3xl:gap-8 mt-10 xl:mt-20 2xl:mt-24 4xl:mt-48 ">
            <button className="inline-flex h-12 animate-shimmer hover:animate-shimmer2 items-center justify-center rounded-xl text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Start Investing
            </button>
            <button className="inline-flex h-12 animate-shimmer hover:animate-shimmer2 items-center justify-center rounded-xl text-Sur-White border shadow-xl  px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Who are we
            </button>
          </section>
        </motion.div>
      </section>
      <div className="relative flex  flex-col items-center">
        <div className="w-full bg-black/30 absolute h-full"></div>
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/927173841/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8773f924456bcf52f0bdd4e992db6863de1a63ec930f3a45d7fee3d5a77e745b"
          loop
          autoPlay
          muted
          className="w-full min-h-screen  md:min-h-full object-cover"
        ></video>
     
      </div>
    </div>
  );
};

export default Hero;
