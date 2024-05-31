'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import auto1 from '../../public/auto1.svg';
import auto2 from '../../public/auto2.svg';
import auto3 from '../../public/auto3.svg';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
  
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Accordianbg = () => {
  const images = [auto1, auto2, auto3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expanded, setExpanded] = useState<string | false>('panel1');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setExpanded(`panel${(currentImageIndex + 1) % images.length + 1}`);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentImageIndex, images.length]);

  return (
    <div className='flex items-center justify-start'>
      <div className="absolute w-full bg-black/50 h-[31rem] flex items-center justify-start">
      <div className=' bg-transparent w-5/12'>
        <Accordion className='bg-transparent border-none' expanded={expanded === 'panel1'} >
          <AccordionSummary className='border-none' aria-controls="panel1d-content" id="panel1d-header">
            <Typography className='text-3xl text-[#FFFFFF] font-semibold flex'>
            <p className='text-3xl text-[#8AA7B1] font-semibold px-2'>01</p>
                Choose your dream location</Typography>
          </AccordionSummary>
          <AccordionDetails className='border-none px-20'>
            <Typography className='text-white font-medium text-xl'>
            lets begin the search for a property that fits your lifestyle and aspirations.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='bg-transparent border-none' expanded={expanded === 'panel2'} >
          <AccordionSummary className='border-none' aria-controls="panel2d-content" id="panel2d-header">
            <Typography className='text-3xl text-[#FFFFFF] font-semibold flex'>
                <p className='text-3xl text-[#8AA7B1] font-semibold px-2'>02</p>
                Tailor Your Investment</Typography>
          </AccordionSummary>
          <AccordionDetails className='border-none px-20'>
            <Typography className='text-white text-xl font-medium'>
            lets begin the search for a property that fits your lifestyle and aspirations.
            </Typography>
          </AccordionDetails>
        </Accordion >
        <Accordion className='bg-transparent border-none' expanded={expanded === 'panel3'} >
          <AccordionSummary className='border-none' aria-controls="panel3d-content" id="panel3d-header">
            <Typography className='text-3xl text-[#FFFFFF] font-semibold flex'>
            <p className='text-3xl text-[#8AA7B1] font-semibold px-2'>03</p>
                Schedule Virtual Tours</Typography>
          </AccordionSummary>
          <AccordionDetails className='border-none px-20'>
            <Typography className='text-white text-xl font-medium'>
            lets begin the search for a property that fits your lifestyle and aspirations.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      </div>
      <Image src={images[currentImageIndex]} alt='Auto changing image' className='w-full object-cover h-[31rem] '/>
    </div>
  );
};

export default Accordianbg;
