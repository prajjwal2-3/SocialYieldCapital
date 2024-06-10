"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import auto1 from "../../public/auto1.svg";
import auto2 from "../../public/auto2.svg";
import auto3 from "../../public/auto3.svg";


const Accordianbg = () => {
  const images = [auto1, auto2, auto3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentImageIndex, images.length]);

  return (
    <div className="flex items-center justify-start">
      <div className="absolute w-full bg-L-Primary/50 h-[31rem] flex  items-center text-center justify-center">
        
  
       <div className={`${currentImageIndex===0?'block':'hidden'} flex flex-col gap-10 items-center justify-center`} >
      <section className={`relative w-fit  `}>
      <motion.div
         initial={{opacity:0,y:75}}
         whileInView={{opacity:1,y:0}}
         
        transition={{ duration:  0.5, delay: 0.25 }}
      >
         <p className="text-[3.5rem] font-semibold text-white">
             Choose the Dream location
           </p>
           </motion.div>
       <motion.div
         
         initial={{left:0}}
         whileInView={{left:'100%'}}
         viewport={{ once: false, amount: 0.5 }} 
         transition={{ duration:  0.5, ease: "easeIn" }}
         style={{
           position: "absolute",
           top: 4,
           bottom: 4,
           left: 0,
           right: 0,
           zIndex: 20,
           background: "#507B8B",
         }}
       />
      </section>
      <section className={`relative w-6/12 `}>
      <motion.div
         initial={{opacity:0,y:75}}
         whileInView={{opacity:1,y:0}}
         
        transition={{ duration:  0.5, delay:0.75 }}
      >
         <p className="text-xl font-semibold text-white">
         lets begin the search for a property that fits your lifestyle and aspirations.
           </p>
           </motion.div>
       <motion.div
         
         initial={{right:0}}
         whileInView={{right:'100%'}}
         viewport={{ once: false, amount: 0.5 }} 
         transition={{ duration:  0.5, ease: "easeIn",delay:0.50 }}
         style={{
           position: "absolute",
           top: 4,
           bottom: 4,
           left: 0,
           right: 0,
           zIndex: 20,
           background: "#507B8B",
         }}
       />
      </section>
     </div>
    
     <div className={`${currentImageIndex===1?'block':'hidden'} flex flex-col gap-10 items-center justify-center`} >
      <section className={`relative w-fit  `}>
      <motion.div
         initial={{opacity:0,y:75}}
         whileInView={{opacity:1,y:0}}
         
        transition={{ duration:  0.5, delay: 0.25 }}
      >
         <p className="text-[3.5rem] font-semibold text-white">
             Tailor your investments
           </p>
           </motion.div>
       <motion.div
         
         initial={{left:0}}
         whileInView={{left:'100%'}}
         viewport={{ once: false, amount: 0.5 }} 
         transition={{ duration:  0.5, ease: "easeIn" }}
         style={{
           position: "absolute",
           top: 4,
           bottom: 4,
           left: 0,
           right: 0,
           zIndex: 20,
           background: "#507B8B",
         }}
       />
      </section>
      <section className={`relative w-6/12 `}>
      <motion.div
         initial={{opacity:0,y:75}}
         whileInView={{opacity:1,y:0}}
         
        transition={{ duration:  0.5, delay: 0.75 }}
      >
         <p className="text-xl font-semibold text-white">
         lets begin the search for a property that fits your lifestyle and aspirations.
           </p>
           </motion.div>
       <motion.div
         
         initial={{right:0}}
         whileInView={{right:'100%'}}
         viewport={{ once: false, amount: 0.5 }} 
         transition={{ duration:  0.5, ease: "easeIn",delay:0.50 }}
         style={{
           position: "absolute",
           top: 4,
           bottom: 4,
           left: 0,
           right: 0,
           zIndex: 20,
           background: "#507B8B",
         }}
       />
      </section>
     </div>
     <div className={`${currentImageIndex===2?'block':'hidden'} flex flex-col gap-10 items-center justify-center`} >
      <section className={`relative w-fit  `}>
      <motion.div
         initial={{opacity:0,y:75}}
         whileInView={{opacity:1,y:0}}
         
        transition={{ duration:  0.5, delay: 0.25 }}
      >
         <p className="text-[3.5rem] font-semibold text-white">
             Schedule virtual tours
           </p>
           </motion.div>
       <motion.div
         
         initial={{left:0}}
         whileInView={{left:'100%'}}
         viewport={{ once: false, amount: 0.5 }} 
         transition={{ duration:  0.5, ease: "easeIn" }}
         style={{
           position: "absolute",
           top: 4,
           bottom: 4,
           left: 0,
           right: 0,
           zIndex: 20,
           background: "#507B8B",
         }}
       />
      </section>
      <section className={`relative w-6/12 `}>
      <motion.div
         initial={{opacity:0,y:75}}
         whileInView={{opacity:1,y:0}}
         
        transition={{ duration:  0.5, delay: 0.75 }}
      >
         <p className="text-xl font-semibold text-white">
         lets begin the search for a property that fits your lifestyle and aspirations.
           </p>
           </motion.div>
       <motion.div
         
         initial={{right:0}}
         whileInView={{right:'100%'}}
         viewport={{ once: false, amount: 0.5 }} 
         transition={{ duration:  0.5, ease: "easeIn",delay:0.50 }}
         style={{
           position: "absolute",
           top: 4,
           bottom: 4,
           left: 0,
           right: 0,
           zIndex: 20,
           background: "#507B8B",
         }}
       />
      </section>
     </div>
      
    

    
      </div>
      <Image
        src={images[currentImageIndex]}
        alt="Auto changing image"
        className="w-full object-cover h-[31rem] "
      />
    </div>
  );
};

export default Accordianbg;
