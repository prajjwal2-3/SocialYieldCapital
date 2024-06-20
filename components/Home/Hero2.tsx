"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import hero from '../../public/hero.svg'
import Image from "next/image";
export default function Hero2() {
    
  return (
    <motion.div className="min-h-screen bg-slate-600">
       <div className="w-full bg-black/30 absolute z-20 h-screen"></div>
      <video
          src="https://player.vimeo.com/progressive_redirect/playback/927173841/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8773f924456bcf52f0bdd4e992db6863de1a63ec930f3a45d7fee3d5a77e745b"
          loop
          autoPlay
          muted
          className="w-full h-screen absolute object-cover"
        ></video>
    
      <section className="absolute  h-full pt-20 px-4 w-full flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
        <motion.p
          className=" h-fit w-full  text-[13rem] p-0 m-0 font-extrabold text-white/60  text-left"
          initial={{ x: 0 }}
          animate={{ x: +1700 } }
          transition={{
            repeat:Infinity,
            repeatType:"loop",
              duration: 3,
              ease: [1,0, 0,0.99],
          }}
        >
          SOCIAL YIELD 
        </motion.p>
        <motion.p
          className=" h-fit w-full  text-[13rem] p-0 m-0 font-extrabold text-white/60  text-right"
          initial={{ x: 0 }}
          animate={{ x: -1700 } }
          transition={{
            repeat:Infinity,
            repeatType:"loop",
              duration: 3,
              ease: [1,0, 0,0.99], 
          }}
        >
  CAPITAL
        </motion.p>
        
      </section>
      <section className="absolute pt-20 px-10">
      <motion.p
        initial={{ y: -500,opacity:0 }}
        animate={{ y: 0,opacity:1 } }
        transition={{
          repeat:Infinity,
          repeatType:"loop",
            duration: 3,
            ease: [1,0, 0,0.99],
        }}
        className="text-[4rem] font-bold "
        >
REAL <br /> ESTATE <br /> <span className="text-white">INVESTMENTS</span> <br /> <span className="text-4xl">SOCIAL YIELD CAPITAL</span>
        </motion.p>
      </section>
    </motion.div>
  );
}
