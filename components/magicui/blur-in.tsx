"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion"
import { useRef } from "react";
interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
    const ref = useRef(null)
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  return (
    <motion.h1
    ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
