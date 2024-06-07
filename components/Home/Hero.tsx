"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { motion } from "framer-motion";

const Hero = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  return (
    <div className="h-full">
      <section className="w-full z-40 h-fit absolute p-16 my-8 xl:my-10 2xl:my-12 3xl:my-16 4xl:my-20">
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [-110, 0],
          }}
          transition={{
            duration: 1,
            type: "keyframes",
          }}
          className="text-[2.4rem] xl:text-[2.6rem] 2xl:text-[3.8rem] 3xl:text-[4.6rem] 4xl:text-[5.4rem] text-Sur-White w-7/12 h-fit "
        >
          Invest in{" "}
          <span className="font-semibold text-L-Primary">real-estate</span> with
          Social yield capital
        </motion.div>
        <div className="flex gap-2">
          <div className="border w-fit p-2 border-Sur-White/50 text-Sur-White rounded-full">
United Kingdom
          </div>
          <AnimatedTooltip items={people} />
        </div>
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [110, 0],
          }}
          transition={{
            duration: 1,
            type: "keyframes",
          }}
          className="absolute w-5/12 3xl:w-6/12  flex flex-col mt-10 xl:mt-20 2xl:mt-24 4xl:mt-48 justify-between gap-3"
        >
          <p className="text-Sur-White text-lg xl:text-[1.5rem] 2xl:text-[1.65rem] 3xl:text-4xl 4xl:text-5xl font-medium">
            Your gateway to smarter co-ownership and seamless property
            management, all under the trusted guardianship of the UKs finest
            real estate innovators.
          </p>
          <section className="w-10/12 flex gap-4 3xl:gap-8">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Start Investing
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full text-Sur-White border shadow-xl bg-[linear-gradient(110deg,#1c2b31,45%,#507B8B,55%,#1c2b31)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-[#94a3b8] focus:ring-offset-2 focus:ring-offset-slate-50">
              Who are we
            </button>
          </section>
        </motion.div>
      </section>
      <div className="relative flex flex-col items-center">
        <div className="w-full bg-black/30 absolute h-full"></div>
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/927173841/rendition/1080p/file.mp4?loc=external&log_user=0&signature=8773f924456bcf52f0bdd4e992db6863de1a63ec930f3a45d7fee3d5a77e745b"
          loop
          autoPlay
          muted
          className="w-full aspect-video"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
