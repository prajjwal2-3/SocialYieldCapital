"use client";
import React, { useState } from "react";
import Image from "next/image";
import house1 from "../../public/house12.svg";
import house2 from "../../public/house22.svg";
import house3 from "../../public/house32.svg";
import main from "../../public/viewhome.svg";
import pic1 from "../../public/viewprop1.svg";
import pic2 from "../../public/viewprop2.svg";
import pic3 from "../../public/viewprop3.svg";
import pic4 from "../../public/viewprop4.svg";
import bed from "../../public/bed.svg";
import map from "../../public/map.svg";
import { property } from "@/constants/properties";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
const Viewproperty = () => {
  const params = useParams();
  const { viewId } = params;
  const [page, setpage] = useState(1);

  console.log(params);
  const arr = ["1", "2", "3", "4"];
  const path = usePathname();
  const arr2 = [
    {
      imagelink: house1,
      title: "Coastal Treehouse",
      address: "735 betty lane,Incline village, NV 89451 USA",
      area: "3000 sq metre",
      bedrooms: "3 Bedrooms",
      bathrooms: "3 Bathrooms",
      price: "$638,000",
      share: "1/8",
    },
    {
      imagelink: house2,
      title: "Coastal Treehouse",
      address: "735 betty lane,Incline village, NV 89451 USA",
      area: "3000 sq metre",
      bedrooms: "3 Bedrooms",
      bathrooms: "3 Bathrooms",
      price: "$638,000",
      share: "1/8",
    },
    {
      imagelink: house3,
      title: "Coastal Treehouse",
      address: "735 betty lane,Incline village, NV 89451 USA",
      area: "3000 sq metre",
      bedrooms: "3 Bedrooms",
      bathrooms: "3 Bathrooms",
      price: "$638,000",
      share: "1/8",
    },
  ];
  const amenities = [
    "Swimming Pool",
    "Fitness Center/Gym",
    "Laundry Facilities",
    "Parking Garage/Spaces",
    "24-Hour Security",
    "Playground",
    "Clubhouse/Community Room",
    "Pet-Friendly Areas",
    "On-site Maintenance Services",
  ];

  return (
    <div className="pt-14 md:pt-20 bg-Sur-light-200">
      <div className="w-full h-20 bg-L-Primary"></div>

      <div className="px-14 -mt-14 flex gap-2 pb-5 w-full justify-center items-center">
        <img
          src={property.properties[Number(viewId) - 1].image_url}
          alt=""
          className="w-full md:w-7/12 h-2/6 md:h-[600px] object-cover"
        />

        <div className="md:flex hidden  flex-wrap justify-center items-center w-5/12 gap-2">
          <Image src={pic1} alt="" className="" />
          <Image src={pic2} alt="" />
          <Image src={pic3} alt="" className="" />
          <Image src={pic4} alt="" />
        </div>
      </div>
      <div className="px-6 md:px-14">
        <div className="bg-Sur-White md:w-7/12 p-4 my-4 shadow-xl flex flex-col gap-10 rounded">
          <div className="">
            <p className="text-3xl  font-semibold text-L-Primary">
              {property.properties[Number(viewId) - 1].name}
            </p>
            <p className="font-medium  text-L-Secondary text-base">
              {property.properties[Number(viewId) - 1].location.address}
            </p>
          </div>
          <section className="flex flex-wrap md:w-7/12 text-base font-medium text-L-Secondary">
            <p className="md:w-4/12 p-1  text-center flex">
              <Image src={bed} alt="" />
              <span className="mt-1">
                {property.properties[Number(viewId) - 1].features.kitchen}{" "}
                Kitchens
              </span>
            </p>
            <p className="md:w-4/12 text-center p-1 flex ">
              <Image src={bed} alt="" />
              <span className="mt-1">
                {property.properties[Number(viewId) - 1].features.bedroom}{" "}
                Bedrooms
              </span>
            </p>
            <div className="md:w-4/12  p-1 text-center flex">
              <Image src={bed} alt="" />
              <span className="mt-1">
                {property.properties[Number(viewId) - 1].features.bathroom}{" "}
                Bathrooms
              </span>
            </div>
          </section>
          <div className="">
            <p className="text-lg font-semibold text-L-Primary">Description</p>
            <p className="text-base font-medium text-L-Secondary">
              {property.properties[Number(viewId) - 1].description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {arr.map((e, index) => (
              <div key={index} className="rounded-md border flex gap-3 p-3">
                <Image src={bed} alt="" />
                <section>
                  <p className="text-base font-medium text-L-Primary">
                    Made for hosting
                  </p>
                  <p className="text-xs font-medium text-L-Secondary">
                    Five spacious bedrooms and a bunk room
                  </p>
                </section>
              </div>
            ))}
          </div>
          <div className="">
            <p className="text-lg font-semibold text-L-Primary">
              Property Amenities
            </p>
            <section className="bg-Sur-light-100 rounded grid grid-cols-3 grid-rows-3">
              {property.properties[Number(viewId) - 1].amenities.map(
                (e, index) => (
                  <div key={index} className=" flex gap-3 p-3 h-fit">
                    <Image src={bed} alt="" />
                    <section>
                      <p className="text-base font-medium  text-L-Primary">
                        {e}
                      </p>
                    </section>
                  </div>
                )
              )}
            </section>
          </div>
          <div className="">
            <Image src={map} alt="" className="w-full" />
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="bg-Sur-White p-6 md:p-14 text-L-Primary">
        <p className="text-3xl font-semibold">More for you</p>
        <section className="flex flex-wrap justify-center items-center">
          {arr2.map((e, index) => (
            <div
              key={index}
              className=" m-6 shadow-xl h-fit bg-Sur-White rounded-lg hover:scale-105 duration-300 transition-transform ease-in-out"
            >
              <div className="h-48">
                <Image
                  src={e.imagelink}
                  alt=""
                  className="w-full  rounded-t-lg object-cover h-full inset-y-10"
                />
              </div>

              <div className="py-4 flex flex-col gap-5">
                <section>
                  <p className="text-base px-4 font-semibold text-L-Primary">
                    {e.title}
                  </p>
                  <p className="font-medium px-4 text-L-Secondary text-sm">
                    {e.address}
                  </p>
                </section>
                <section className="flex w-full text-sm text-L-Secondary">
                  <p className="w-4/12 border border-Brand/Light/50 p-1 text-center">
                    {e.area}
                  </p>
                  <p className="w-4/12 border border-Brand/Light/50 p-1 text-center">
                    {e.bedrooms}
                  </p>
                  <div className="w-4/12 border border-Brand/Light/50 p-1 text-center">
                    {e.bathrooms}
                  </div>
                </section>
                <section className="px-4 flex justify-between">
                  <p className="text-L-Primary text-xl font-semibold">
                    {e.price}
                  </p>
                  <p className="font-medium text-L-Secondary">
                    {e.share} ownership
                  </p>
                </section>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Viewproperty;
