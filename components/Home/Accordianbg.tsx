"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import auto1 from "../../public/auto1.svg";
import auto2 from "../../public/auto2.svg";
import auto3 from "../../public/auto3.svg";
import { styled } from "@mui/material/styles";
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
      <div className="absolute w-full bg-L-Primary/50 h-[31rem] flex items-center justify-start">
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
        className="w-full object-cover h-[31rem] "
      />
    </div>
  );
};

export default Accordianbg;
