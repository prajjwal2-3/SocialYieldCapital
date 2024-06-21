"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import hero from '../../public/onlyshar.svg'
import bg from '../../public/bgsh.svg'
import Image from "next/image";
export default function Hero2() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <motion.div className="min-h-screen bg-transparent overflow-hidden">
     <motion.section 
       initial={{ backdropFilter: 'blur(12px)' }}
       animate={loaded?{ backdropFilter: 'blur(0px)' }:{}}
       transition={{ duration: 3, ease: [1, 0, 0, 0.99], }}
     className="w-full absolute h-screen bg-black/20 z-10 "></motion.section>

     <div className=" h-screen w-full absolute overflow-hidden z-10">
     <motion.section
     initial={{ scale: 1, originX: 0, originY: 0 }}
     animate={loaded?{ scale: 1.3, originX: 0, originY: 0 }:{}}
     transition={{ duration: 3, ease: [1, 0, 0, 0.99] }}
     className="h-screen w-full  overflow-hidden">
  <Image priority src={hero} alt="" className="w-full h-full object-cover object-left-top "/>
</motion.section>
     </div>
     <div className=" h-screen w-full absolute overflow-hidden z-0">
     <motion.section
    //  initial={{ scale: 1, originX: 0, originY: 0 }}
    //  animate={{ scale: 1.3, originX: 0, originY: 0 }}
    //  transition={{ duration: 3, ease: [1, 0, 0, 0.99] }}
     className="h-screen w-full  overflow-hidden">
  <Image priority src={bg} alt="" className="w-full h-full object-cover object-left-top "/>
</motion.section>
     </div>

    
      <section className="absolute z-20 h-full pt-20 px-4 w-full flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
        <motion.p
          className=" h-fit w-full  text-[13rem] p-0 m-0 font-extrabold text-white/60  text-left"
          initial={{ x: 0 }}
          animate={loaded?{ x: +5000 }:{} }
          transition={{
          
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
          animate={loaded?{ x: -5000 }:{} }
          transition={{
            
            repeatType:"loop",
              duration: 3,
              ease: [1,0, 0,0.99], 
          }}
        >
  CAPITAL
        </motion.p>
        
      </section>
      <section className="absolute z-20 pt-20 px-10">
      <motion.p
        initial={{ y: -500,opacity:0 }}
        animate={loaded?{ y: 0,opacity:1 } :{}}
        transition={{
          
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
