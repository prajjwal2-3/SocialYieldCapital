import React from "react";

import Hero from "./Hero";
import Sub from "./Sub";



import Cards from "./Cards";
import About2 from "./About";

import Review2 from "./Review2";


const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Sub />
        <About2 />
        <div className="md:px-32 px-6 pt-24 pb-8 flex flex-col justify-center items-center text-center">
          <section className="gap-9 flex flex-col">
            <p className="text-xl font-medium text-[#507B8B]">Properties</p>
            <p className="text-[#1C2B31] mb-8 text-4xl font-semibold">
              Latest Investment Options
            </p>
          </section>
          <Cards />
        </div>
        <Review2 />
      </div>
    </>
  );
};

export default Home;
