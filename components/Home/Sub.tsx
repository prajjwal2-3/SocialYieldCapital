"use client";
import React from "react";
import { motion } from "framer-motion";
import NumberTicker from "../magicui/number-ticker";
const Sub = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }} 
      transition={{ duration: 0.5 }} 
      className="flex flex-col md:flex-row border-b border-black/20"
    >
      <section className="md:w-4/12 h-40 pt-10 pb-10 flex flex-col sm:border-r border-b border-black/20 items-center justify-center">
        <p className="text-4xl font-semibold text-[#507B8B]">$ <NumberTicker value={879}/>m</p>
        <p className="text-[#6B7579]">Total Investment</p>
      </section>
      <section className="md:w-4/12 h-40 pt-10 pb-10 flex flex-col sm:border-r border-b border-black/20 items-center justify-center">
        <p className="text-4xl font-semibold text-[#507B8B]"><NumberTicker value={400}/>+</p>
        <p className="text-[#6B7579]">Properties Listed</p>
      </section>
      <section
        className="md:w-4/12 h-40 pt-10 pb-10 flex flex-col 
       border-black/20 items-center justify-center"
      >
        <p className="text-4xl font-semibold text-[#507B8B]"><NumberTicker value={23}/>K+</p>
        <p className="text-[#6B7579]">Investors Joined</p>
      </section>
    </motion.div>
  );
};

export default Sub;
