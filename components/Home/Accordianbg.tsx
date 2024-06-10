"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import auto1 from "../../public/auto1.svg";
import auto2 from "../../public/auto2.svg";
import auto3 from "../../public/auto3.svg";
import { styled } from "@mui/material/styles";
import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Accordianbg = () => {
  const images = [auto1, auto2, auto3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const arr = [
    {
      panel: "panel1",
      control: "panel1d-content",
      id: "panel1d-header",
      number: "01",
      Summary: "Choose your dream location",
    },
    {
      panel: "panel2",
      control: "panel2d-content",
      id: "panel2d-header",
      number: "02",
      Summary: "Tailor Your Investment",
    },
    {
      panel: "panel3",
      control: "panel3d-content",
      id: "panel3d-header",
      number: "03",
      Summary: "Schedule Virtual Tours",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setExpanded(`panel${((currentImageIndex + 1) % images.length) + 1}`);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentImageIndex, images.length]);

  return (
    <div className="flex items-center justify-start">
      <div className="absolute w-full bg-L-Primary/50 h-[38rem] flex items-center justify-start">
      <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Magic UI<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="text-[#5046e6]">Design Engineers</span>
        </h2>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br />
          </p>
        </div>
      </BoxReveal>
 
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal>
    </div>
        <div className=" bg-transparent md:w-5/12">
          {arr.map((e, index) => (
            <Accordion
            key={index}
              className="bg-transparent border-0"
              expanded={expanded === e.panel}
            >
              <AccordionSummary
                className="border-0"
                aria-controls={e.control}
                id={e.id}
              >
                <Typography className="text-3xl 2xl:text-4xl 4xl:text-5xl text-[#FFFFFF] font-semibold flex">
                  <p className="text-3xl 2xl:text-4xl 4xl:text-5xl text-[#8AA7B1] font-semibold px-2">
                    {e.number}
                  </p>
                  {e.Summary}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="border-0 px-20 4xl:px-24">
                <Typography className="text-Sur-White font-medium text-xl 2xl:text-2xl 4xl:text-3xl">
                  lets begin the search for a property that fits your lifestyle
                  and aspirations.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      <Image
        src={images[currentImageIndex]}
        alt="Auto changing image"
        className="w-full object-cover h-[38rem] "
      />
    </div>
  );
};

export default Accordianbg;
