import React from "react";
import image4 from "../../public/image 4.svg";
import building from "../../public/building.svg";
import building2 from "../../public/building2.svg";
import uk24 from "../../public/uk24.svg";
import people from "../../public/people.svg";
import abbey from '../../public/abbey.svg'
import abbey2 from '../../public/lambeth.svg'
import abbey3 from '../../public/palace.svg'
import park from '../../public/park.svg'
import Image from "next/image";
import coder from '../../public/coderrrr.svg'
const Hero = () => {
  return (
    <div className="">
       <section className="w-full h-fit absolute p-16 my-8 xl:my-10 2xl:my-12 3xl:my-16 4xl:my-20">
       <h1 className="text-[2.4rem] xl:text-[2.6rem] 2xl:text-[3.8rem] 3xl:text-[4.6rem] 4xl:text-[5.4rem] text-[#1C2B31] w-7/12 h-fit ">
          Invest in <span className="font-semibold">real-estate</span> with
          Social yield capital
        </h1>
        <div className="flex w-4/12  justify-between">
          <Image src={uk24} alt="" className="" />
          <Image src={people} alt="" className="" />
        </div>
        <div className="absolute w-5/12 3xl:w-6/12  flex flex-col mt-10 xl:mt-20 2xl:mt-24 4xl:mt-48 justify-between gap-3">
          <p className="text-[#1C2B31] text-lg xl:text-[1.5rem] 2xl:text-[1.65rem] 3xl:text-4xl 4xl:text-5xl font-medium">
            Your gateway to smarter co-ownership and seamless property
            management, all under the trusted guardianship of the UKs finest real
            estate innovators.
          </p>
          <section className="w-10/12 flex gap-4 3xl:gap-8">
            <button className="w-fit bg-[#1C2B31] font-medium rounded-full p-[12px_20px] 3xl:p-[20px_28px] 4xl:p-[28px_36px] 4xl:text-xl text-Sur-White">
              Start Investing
            </button>
            <button className="w-fit border-[#1C2B31] border rounded-full p-[12px_20px] 3xl:p-[20px_28px] 4xl:p-[28px_36px] 4xl:text-xl text-[#1C2B31] font-medium">
              Who are we
            </button>
          </section>
        </div>
 
      </section>
    <Image 
        src={coder} 
        alt="" 
        className=" w-full" 
        priority
      />
      
    </div>
  );
};

export default Hero;
