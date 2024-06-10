"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "../../lib/utils";
import { useInView } from "framer-motion"
import { useRef } from "react";
interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.1 });
  return (
    <motion.h1
    ref={ref}
      variants={wrapperFramerProps}
      initial="hidden"
      animate={isInView?"show":"hidden"}
      className={cn(
        " text-white text-center font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
       
          className="pr-2 text-[4rem] inline-block "
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
