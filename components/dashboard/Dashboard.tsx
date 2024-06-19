"use client";
import React, { useState } from "react";
import BasicArea from "./Chart";
import vector from "../../public/Vector2.svg";
import Image from "next/image";
import bed from "../../public/bed.svg";
import house1 from "../../public/house1.svg";
import Link from "next/link";
import axios from 'axios'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { property } from "@/constants/properties";
const Dashboard = () => {
  const initialProperty =  {
    "id": 1,
    "name": "Cosy Studio Apartment",
    "location": {
      "city": "Glasgow",
      "area": "City Centre",
      "address": "5 Central Street, Glasgow G1 1AA"
    },
    "price": 75000,
    "roi_percentage": 9,
    "description": "Charming studio apartment in the heart of Glasgow's city center. Ideal for students or young professionals. Features include a compact living area, kitchenette, and a communal garden.",
    "amenities": ["Communal Garden", "Secure Entry System"],
    "nearby_facilities": ["Public Transport", "Universities", "Shopping Centers"],
    "features": {
      "bedroom": 1,
      "kitchen": 1,
      "bathroom": 1
    },
    "image_url": "https://res.cloudinary.com/dzkldv06d/image/upload/v1718758559/phil-hearing-IYfp2Ixe9nM-unsplash_y1edh1.jpg"
  }
  const [inputText,setinputText]=useState('')
  const [arr,setarr]=useState([1])
  const [searching,setsearching]=useState(false)
  const [prop,setprop]=useState<Property | null>(initialProperty || null);
  // Define the Location interface
interface Location {
  city: string;
  area: string;
  address: string;
}

// Define the Features interface
interface Features {
  bedroom: number;
  kitchen: number;
  bathroom: number;
}

// Define the Property interface
interface Property {
  id: number;
  name: string;
  location: Location;
  price: number;
  roi_percentage: number;
  description: string;
  amenities: string[];
  nearby_facilities: string[];
  features: Features;
  image_url: string;
}

// Define the main PropertyList interface
interface PropertyList {
  properties: Property[];
}
  let data = JSON.stringify({
    "inputText": inputText
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://wordent-be.vercel.app/sum/property',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  function search(){
    setsearching(true)
    axios.request(config)
.then((response) => {
  setsearching(false)
  setarr(response.data)
  handleSelectProperty(response.data[0])
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  setsearching(false)
  console.log(error);
});
  }
  let id = arr[0]
  const handleSelectProperty = (id: number) => {
    const property = getPropertyById(id);
    if (typeof property === 'string') {
      console.error(property); // Handle the error case
    } else {
      setprop(property);
    }
  };
  function getPropertyById(id:any) {
    // Find the property with the matching ID in the properties array
    let foundProperty = property.properties.find(prop => prop.id === id);
    
    // If the property is found, return it; otherwise, return a message
    return foundProperty ? foundProperty : `No property found with ID: ${id}`;
  }
  return (
    <div className="pt-20 min-h-screen bg-Sur-light-200 flex flex-row-reverse ">
     
      <div className="bg-white flex flex-col gap-10 mt-10 mr-5 rounded-lg h-fit p-5">
      <div className=" h-fit p-4 rounded-lg border  border-neutral-200 flex-col justify-start items-start gap-1.5 flex">
          <p className="text-gray-800 text-sm font-semibold font-['General Sans'] leading-[21px]">
            Ask a question
          </p>
          <p className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
            Our ai agent & team can help
          </p>
        </div>
        <div className=" h-fit p-4 rounded-lg border  border-neutral-200 flex-col justify-start items-start gap-6 flex">
          <div className=" h-fit  bg-white rounded-lg  justify-center items-center flex">
            <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
              <input className="text-zinc-500 text-sm p-3 border border-neutral-200 outline-none rounded-lg mt-3 font-medium font-['General Sans'] leading-[21px]"  
              
              placeholder="Search for help"
              />
                
            
              
            </div>
          </div>
          <div className="  h-fit flex-col justify-start items-start gap-4 flex">
            <div className="bg-white rounded-lg px-3 py-2 justify-start items-center gap-1.5 inline-flex">
              <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
                How to invest on syc
              </div>
            </div>
            <div className=" px-3 bg-white rounded-lg py-1 justify-start items-center gap-1.5 inline-flex">
              <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
                What are the steps to invest
              </div>
            </div>
            <div className=" px-3 py-1 bg-white rounded-lg justify-start items-center gap-1.5 inline-flex">
              <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
                How much return i can get
              </div>
            </div>
            <div className=" px-3 py-1 bg-white rounded-lg justify-start items-center gap-1.5 inline-flex">
              <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
                How to invest on syc
              </div>
            </div>
            <div className=" px-3 py-1 bg-white rounded-lg justify-start items-center gap-1.5 inline-flex">
              <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
                What are the steps to invest
              </div>
            </div>
          </div>
          </div>
      </div>
       
      <div className="bg-Sur-light-200 w-10/12 p-10 flex flex-row-reverse gap-10">
        <div className="flex flex-col gap-8 w-8/12">
          <div className=" h-fit p-6 bg-white rounded-lg flex-col  gap-6 w-full flex">
            <div className="w-full flex-col justify-start items-start gap-1 flex">
              <div className="text-gray-800 text-lg font-semibold font-['General Sans'] leading-[27px]">
                Your Investment amount
              </div>
              <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
                Set the amount you wish to invest
              </div>
            </div>
            <div className=" justify-between items-center gap-6 flex">
              <input
                type="text"
                placeholder="Enter Amount"
                onChange={(e)=>{
                  setinputText(e.target.value)
                }}
                className=" h-12 p-4 bg-white rounded-lg border w-10/12 border-neutral-200 outline-none justify-between items-center flex"
              />
              <div className="w-fit px-4 py-3 bg-Brand/Primary h-12 rounded-lg border justify-center items-center gap-2.5 flex">
                <button onClick={search} className="text-white text-base font-medium font-['General Sans']">
                  {searching?'searching....':'search'}
                </button>
                
              </div>
              
            </div>
          </div>
          <div className=" h-96 p-6 bg-white rounded-lg flex-col  gap-2.5 flex justify-between">
            <div className=" pb-4 justify-between items-center inline-flex">
              <div className="text-gray-800 text-lg flex gap-3 font-semibold font-['General Sans'] leading-[27px]">
                Expected Returns

                <p className="font-medium">{prop?.roi_percentage} %</p>
              </div>
              <div className="justify-start items-center gap-1 flex">
                <button className="text-zinc-700 text-sm font-medium flex">
                    <KeyboardArrowDownIcon className="text-zinc-700"/>
                  Yearly
                </button>
                <div className="w-3.5 h-3.5 relative" />
              </div>
            </div>
            <div className="w-full h-full">
              <BasicArea />
            </div>
          </div>
          <div className=" h-[153.99px] p-6 bg-white rounded-lg justify-start items-start gap-2.5 inline-flex">
            <div className="w-5/12 h-[105.99px] flex flex-col justify- items-center relative bg-gradient-to-b from-emerald-100 to-transparent rounded border  border-violet-50">
              <div className="w-fit h-7  mt-5 justify-start items-center gap-1 inline-flex">
                <div className="text-neutral-800 text-2xl font-semibold  leading-7">
                  $124,20
                </div>
                <div className="px-1 py-0.5 bg-neutral-200 rounded justify-start items-start gap-2.5 flex">
                  <div className="text-center text-green-700 text-xs font-medium  leading-none">
                    +3.4%
                  </div>
                </div>
              </div>
              <div className="left-[26px] top-[32px]  text-neutral-500 text-xs font-medium  leading-none">
                12 Jun, 2020
              </div>

              <div className="w-full -mt-3 ">
                <Image src={vector} alt="" className="w-full" />
              </div>
            </div>

            <div className="grow shrink basis-0  px-[38px] py-[22px] bg-gray-50 rounded border border-zinc-100 flex-col justify-center items-center gap-[7px] inline-flex">
              <div className="text-neutral-500 text-sm font-semibold font-['General Sans'] leading-[18px]">
                CASH FLOW
              </div>
              <div className="text-neutral-800 text-2xl font-medium  leading-7">
                26,8M
              </div>
            </div>
            <div className="grow shrink basis-0  px-[38px] py-[22px] bg-gray-50 rounded border border-zinc-100 flex-col justify-center items-center gap-[7px] inline-flex">
              <div className="text-neutral-500 text-sm font-semibold font-['General Sans'] uppercase leading-[18px]">
                Market Trends
              </div>
              <div className="text-neutral-800 text-2xl font-semibold  leading-7">
                $165,02
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <div className="w-full h-fit p-6 bg-white rounded-lg flex-col justify-start items-start gap-6 inline-flex">
            <div className=" justify-between items-center w-full  flex">
              <div className="text-gray-800 text-lg font-semibold font-['General Sans'] leading-[27px]">
                Select Property
              </div>
              <div className="justify-start items-center gap-1.5 flex">
                <button className="w-8 h-8 rounded-full border border-black/30 justify-center items-center gap-[13.33px] flex">
                <ArrowBackIosNewIcon fontSize="small"/>
                </button>
                <button className="w-8 h-8   rounded-full border border-black/30 justify-center items-center gap-[13.33px] flex">
                <ArrowForwardIosIcon fontSize="small"/>
                </button>
              </div>
            </div>

            <img src={prop?.image_url} alt="" className="rounded-xl w-full h-full" />

            <div className=" h-[50px] flex-col justify-start items-start gap-1.5 flex">
              <div className="w-fit text-gray-800 text-lg font-semibold font-['General Sans'] leading-normal">
                {prop?.name}
              </div>
              <div className=" text-gray-800 text-sm font-medium font-['General Sans'] leading-[21px]">
                {prop?.location.address}
              </div>
            </div>
            <div className="  gap-4 flex flex-wrap">
              <div className="justify-start items-center gap-3 w-fit flex">
                <Image src={bed} alt="" />
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">
                  {prop?.features.bedroom} Bedrooms
                </div>
              </div>
              <div className="justify-start items-center gap-3 w-fit flex">
                <Image src={bed} alt="" />
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">
                  {prop?.features.kitchen} Kitchen
                </div>
              </div>
              <div className="justify-start items-center gap-3 w-fit flex">
                <Image src={bed} alt="" />
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">
                  3,822 m2
                </div>
              </div>
              <div className="justify-start items-center gap-3 w-fit flex">
                <Image src={bed} alt="" />
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">
                {prop?.features.kitchen} Bathrooms
                </div>
              </div>
            </div>
            <div className=" grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
              <p className="w- text-gray-800 text-base font-semibold font-['General Sans'] leading-normal">
                Description
              </p>
              <p className=" text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">
              {prop?.description}
              </p>
            </div>
            <div className="w-full h-[42px] px-4 py-3 rounded-lg border border-black/20 justify-center items-center gap-2.5 inline-flex">
              <button className="text-gray-800 text-base font-medium font-['General Sans']">
              
                <Link href="/view">
                Go to the property page
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
