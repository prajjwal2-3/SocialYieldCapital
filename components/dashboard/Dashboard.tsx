"use client";
import React from "react";
import BasicArea from "./Chart";
import vector from "../../public/Vector2.svg";
import Image from "next/image";
import bed from "../../public/bed.svg";
import house1 from "../../public/house1.svg";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Dashboard = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-row-reverse ">
      <div className=" h-fit w-1/5 bg-Sur-light-200 p-7 flex flex-row-reverse  gap-10">
      <div className=" p-6 flex-col rounded-lg justify-start items-start bg-white gap-7  border-t border-black/20' inline-flex">
        <div className=" h-fit p-4 rounded-lg border  border-neutral-200 flex-col justify-start items-start gap-1.5 flex">
          <p className="text-gray-800 text-sm font-semibold font-['General Sans'] leading-[21px]">
            Ask a question
          </p>
          <p className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
            Our ai agent & team can help
          </p>
        </div>
        <div className=" h-fit p-4 rounded-lg border  border-neutral-200 flex-col justify-start items-start gap-6 flex">
          <div className=" h-fit p-3 bg-white rounded-lg border border-neutral-200 justify-between items-center inline-flex">
            <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
              <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
                Search for help
              </div>
              <div className="w-4 h-4 pl-[1.33px] pr-[3.25px] pt-[2.35px] pb-[1.66px] justify-center items-center flex">
                <div className="w-[11.42px] h-3 relative flex-col justify-start items-start flex" />
              </div>
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
                className=" h-12 p-4 bg-white rounded-lg border w-10/12 border-neutral-200 justify-between items-center flex"
              />
              <div className="w-[75px] px-4 py-3 bg-Brand/Primary h-12 rounded-lg border justify-center items-center gap-2.5 flex">
                <div className="text-white text-base font-medium font-['General Sans']">
                  Apply
                </div>
              </div>
            </div>
          </div>
          <div className=" h-96 p-6 bg-white rounded-lg flex-col  gap-2.5 flex justify-between">
            <div className=" pb-4 justify-between items-center inline-flex">
              <div className="text-gray-800 text-lg font-semibold font-['General Sans'] leading-[27px]">
                Expected Returns
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

            <Image src={house1} alt="" className="rounded-xl" />

            <div className=" h-[50px] flex-col justify-start items-start gap-1.5 flex">
              <div className="w-fit text-gray-800 text-lg font-semibold font-['General Sans'] leading-normal">
                Coastal Treehouse
              </div>
              <div className=" text-gray-800 text-sm font-medium font-['General Sans'] leading-[21px]">
                735 Betty Lane, Incline Village, NV 89451 USA
              </div>
            </div>
            <div className="  gap-4 flex flex-wrap">
              <div className="justify-start items-center gap-3 w-fit flex">
                <Image src={bed} alt="" />
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">
                  3 Bedrooms
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
                  3 Bathrooms
                </div>
              </div>
            </div>
            <div className=" grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
              <p className="w- text-gray-800 text-base font-semibold font-['General Sans'] leading-normal">
                Description
              </p>
              <p className=" text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">
                Set amid towering pines on just under a half-acre, Wood Creek
                offers the best of modern mountain living near Lake Tahoe...
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
