import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import about from "../public/about.svg";
import about2 from "../public/about2.svg";
import Image from "next/image";
import BlurIn from "../components/magicui/blur-in";
import BoxReveal from "@/components/magicui/box-reveal";
import WordPullUp from "./magicui/word-pull-up";
const About = () => {
  return (
    <>
      <div className="bg-L-Primary p-2 md:p-20  flex flex-col justify-center gap-5 items-center">
        <WordPullUp
          words="Who we are"
      
        />
        <div className="sticky  top-[4rem] md:top-[8rem] !rounded-3xl">
        <CardContainer className=" h-[30rem] md:h-[32rem] inter-var bg-white border-opacity-30 backdrop-blur-lg  flex flex-col md:flex-row  shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12 m-0 md:m-5 rounded-3xl">
        <CardBody className=" relative group/card flex flex-row  w-full h-full rounded-3xl   ">
          
          <section className="md:w-7/12 3xl:w-8/12 gap-4 flex flex-col p-6 md:p-10">
            <BoxReveal boxColor={"#507B8B"} duration={0.5}>
              <p className="text-2xl md:text-4xl font-bold text-L-Primary">
                Welcome to{" "}
                <span className="text-Brand/Primary font-extrabold">
                  Social Yield Capital
                </span>{" "}
                Simple innovation, smarter investing.
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#507B8B"} duration={0.5}>
              <p className="text-lg font-medium text-L-Secondary">
                At SYC, we are united by a common goal: to empower our
                stakeholders by providing unmatched investment opportunities.
                Offering co-ownership in carefully selected properties, enabling
                accessible and lucrative investment options.
              </p>
            </BoxReveal>
          </section>

         
            <section className="w-6/12">
            <CardItem className="absolute h-full w-full">
                <Image
                  src={about}
                  alt=""
                  className="w-full object-cover h-full rounded-3xl group-hover/card:shadow-xl "
                />
              </CardItem>
              <CardItem translateZ="100" className="w-full h-full relative">
                <Image
                  src={about2}
                  className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </section>
            </CardBody>
          </CardContainer>
        </div>
        <div className="  sticky   top-[6rem] md:top-[10rem]  ">
         
        <CardContainer className="  inter-var h-[30rem] md:h-[32rem] flex flex-col md:flex-row backdrop-blur-lg shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12  m-0 md:m-5 rounded-3xl shadow-black/20">
        <CardBody className=" relative group/card  flex flex-row w-full h-full rounded-3xl   ">
          <section className="w-7/12 3xl:w-8/12 gap-4 flex flex-col p-10 shadow-lg">
            <BoxReveal boxColor={"#507B8B"} duration={0.5}>
              <p className="text-4xl font-bold text-L-Primary">Our Mission</p>
            </BoxReveal>
            <BoxReveal boxColor={"#507B8B"} duration={0.5}>
              <p className="text-lg font-medium text-L-Secondary">
                At Social Yield Capital, our mission is to democratize real
                estate investment by making it accessible to everyone. We strive
                to create a sustainable and inclusive investment platform that
                benefits both investors and communities alike. Through
                transparency and innovation, we aim to build a future where real
                estate investment opportunities are available to all.
              </p>
            </BoxReveal>
          </section>

       
              <section className="w-6/12">
              <CardItem className="absolute h-full w-full">
                <Image
                  src={about}
                  alt=""
                  className="w-full object-cover h-full rounded-3xl group-hover/card:shadow-xl "
                />
              </CardItem>
              <CardItem translateZ="100" className="w-full h-full relative">
                <Image
                  src={about2}
                  className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              </section>
            </CardBody>
          </CardContainer>
        </div>
        <div className=" sticky    top-[8rem] md:top-[12rem]  ">
         
        <CardContainer className=" border-opacity-30 backdrop-blur-lg md:flex-row inter-var h-[30rem] md:h-[32rem] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12  m-0 md:m-5 rounded-3xl">
        <CardBody className=" relative group/card flex flex-row w-full h-full rounded-3xl   ">
          <section className="w-7/12 3xl:w-8/12 gap-4 flex flex-col p-10 shadow-lg">
           
        
            <BoxReveal boxColor={"#507B8B"} duration={0.5}>
              <p className="text-3xl font-bold text-L-Primary">
                Investment Opportunities
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#507B8B"} duration={0.5}>
              <p className="text-lg font-medium text-L-Secondary">
                Social Yield Capital offers a range of investment opportunities,
                including social housing, corporate housing, and more. Each
                property is carefully vetted to ensure it meets our high
                standards for quality and profitability. Our platform allows
                investors to co-own properties, providing a unique opportunity
                to participate in the real estate market with lower barriers to
                entry.
              </p>
            </BoxReveal>
          </section>

          
             <section className="w-6/12">
             <CardItem className="absolute h-full w-full">
                <Image
                  src={about}
                  alt=""
                  className="w-full object-cover h-full rounded-3xl group-hover/card:shadow-xl "
                />
              </CardItem>
              <CardItem translateZ="100" className="w-full h-full relative">
                <Image
                  src={about2}
                  className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
             </section>
            </CardBody>
          </CardContainer>
        </div>
        <div className="  sticky    top-[10rem] md:top-[14rem]  ">
          
        <CardContainer className=" inter-var md:flex-row h-[30rem] md:h-[32rem] border-opacity-30 backdrop-blur-lg shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full sm:w-11/12  m-0 md:m-5 rounded-3xl">
        <CardBody className=" relative group/card flex flex-row w-full h-full rounded-3xl   ">
          <section className="w-7/12 3xl:w-8/12 gap-4 flex flex-col p-10 shadow-lg">
            <BoxReveal boxColor={"#507B8B"} duration={0.5}>
              <p className="text-3xl font-bold text-L-Primary">
                Why Choose Us?
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#507B8B"} duration={0.5}>
              <p className="text-lg font-medium text-L-Secondary">
                At Social Yield Capital, we prioritize transparency, security,
                and profitability in all our investment opportunities. Our
                expert team uses data-driven insights to select and manage
                properties, ensuring that our investors receive the best
                possible returns. We are committed to providing a seamless and
                rewarding investment experience for all our stakeholders.
              </p>
            </BoxReveal>
          </section>

          
              <section className="w-6/12">
              <CardItem className="absolute h-full ">
                <Image
                  src={about}
                  alt=""
                  className="w-full object-cover h-full rounded-3xl group-hover/card:shadow-xl "
                />
              </CardItem>
              <CardItem translateZ="100" className="w-full h-full relative">
                <Image
                  src={about2}
                  className=" w-full h-full object-cover rounded-3xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              </section>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default About;
