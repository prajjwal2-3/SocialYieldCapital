"use client";
import { type AnimationProps, motion } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

const ShinyButton = ({ text = "shiny-button" }) => {
  return (
    <motion.button
      {...animationProps}
      className="relative rounded-full p-4 font-medium  transition-[box-shadow] duration-300 ease-in-out  bg-L-Primary hover:shadow-[0_0_20px_#507B8B1A]"
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide text-Sur-White"
        style={{
          maskImage:
            "linear-gradient(-75deg,#507B8B calc(var(--x) + 20%),transparent calc(var(--x) + 30%),#507B8B calc(var(--x) + 100%))",
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(#000000, #000000) content-box,linear-gradient(#000000, #000000)",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,#507B8B_calc(var(--x)+20%),#507B8B_calc(var(--x)+25%),#507B8B_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
