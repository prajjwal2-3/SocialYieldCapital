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
const Hero = () => {
  return (
    <div>
      <Image src={building2} alt="" className="absolute ml-[1020px]" />
      <section className="m-14">
      <Image src={abbey} alt="" className="absolute  ml-[800px] mt-[130px]" />
      <Image src={abbey2} alt="" className="absolute ml-[900px] mt-[30px]" />
      <Image src={abbey3} alt="" className="absolute  ml-[1200px] mt-[100px]" />
      <Image src={park} alt="" className="absolute ml-[1150px]" />
        <h1 className="text-6xl text-[#1C2B31]  w-7/12">
          Invest in <span className="font-semibold">real-estate</span> with
          Social yield capital
        </h1>
        <div className="flex w-4/12 my-6 justify-between">
          <Image src={uk24} alt="" className="" />
          <Image src={people} alt="" className="" />
        </div>
      </section>
      <section className="w-full ">
        <div className="absolute w-5/12 m-16 flex flex-col justify-between h-40">
          <p className="text-[##1C2B31]  text-lg font-medium">
            Your gateway to smarter co-ownership and seamless property
            management , all under the trusted guardianship of UK finest real
            estate innovators.
          </p>
          <section className="w-10/12  flex gap-4">
            <button className="w-fit bg-[#1C2B31] font-medium rounded-full p-[12px_20px] text-white">
              Start Investing
            </button>
            <button className="w-fit border-[#1C2B31] border rounded-full p-[12px_20px] text-[#1C2B31] font-medium">
              Who are we
            </button>
          </section>
        </div>

        <Image src={image4} alt="" className="w-full " />
      </section>
    </div>
  );
};

export default Hero;
