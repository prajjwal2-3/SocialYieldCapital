import React from "react";
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
import { usePathname } from "next/navigation";
const Viewproperty = () => {
  const arr = ['1','2','3','4']
  const arr2=[{ imagelink: house1,
    title:'Coastal Treehouse',
    address:'735 betty lane,Incline village, NV 89451 USA',
    area:'3000 sq metre',
    bedrooms:'3 Bedrooms',
    bathrooms:'3 Bathrooms',
    price:'$638,000',
    share:'1/8'
 },
{ imagelink: house2,
    title:'Coastal Treehouse',
    address:'735 betty lane,Incline village, NV 89451 USA',
    area:'3000 sq metre',
    bedrooms:'3 Bedrooms',
    bathrooms:'3 Bathrooms',
    price:'$638,000',
    share:'1/8' },
{ imagelink: house3,
    title:'Coastal Treehouse',
    address:'735 betty lane,Incline village, NV 89451 USA',
    area:'3000 sq metre',
    bedrooms:'3 Bedrooms',
    bathrooms:'3 Bathrooms',
    price:'$638,000',
    share:'1/8' },]
  const amenities = [
    "Swimming Pool",
    "Fitness Center/Gym",
    "Laundry Facilities",
    "Parking Garage/Spaces",
    "24-Hour Security",
    "Playground",
    "Clubhouse/Community Room",
    "Pet-Friendly Areas",
    "On-site Maintenance Services"
]

  return (
    <div className="pt-20 bg-Sur-light-200">
      <div className="w-full h-20 bg-L-Primary"></div>
     
      <div className="px-14 -mt-14 flex gap-2 pb-5 w-full justify-center items-center">
       
        <Image src={main} alt="" className="w-7/12" />

        <div className="flex flex-wrap justify-center items-center w-5/12 gap-2">
          <Image src={pic1} alt="" className="" />
          <Image src={pic2} alt="" />
          <Image src={pic3} alt="" className="" />
          <Image src={pic4} alt="" />
        </div>
      </div>
      <div className="px-14">
        <div className="bg-Sur-White w-7/12 p-4 my-4 shadow-xl flex flex-col gap-10 rounded">
          <div className="">
            <p className="text-3xl  font-semibold text-L-Primary">
              Coastal Treehouse
            </p>
            <p className="font-medium  text-L-Secondary text-base">
              735 betty lane,Incline village, NV 89451 USA
            </p>
          </div>
          <section className="flex w-7/12 text-base font-medium text-L-Secondary">
            <p className="w-4/12 p-1  text-center flex">
              <Image src={bed} alt="" />
              <span className="mt-1">3000 sq meter</span>
            </p>
            <p className="w-4/12 text-center p-1 flex ">
              <Image src={bed} alt="" />
              <span className="mt-1">3 Bedrooms</span>
            </p>
            <div className="w-4/12  p-1 text-center flex">
              <Image src={bed} alt="" />
              <span className="mt-1">3 Bathrooms</span>
            </div>
          </section>
          <div className="">
            <p className="text-lg font-semibold text-L-Primary">Description</p>
            <p className="text-base font-medium text-L-Secondary">
              Set amid towering pines on just under a half-acre, Wood Creek
              offers the best of modern mountain living near Lake Tahoe. Incline
              Village amenities include boating, fishing and tubing on local
              lakes; walking, hiking and biking on nearby trails; and premium
              skiing and golf. The completely remodeled home includes a massive
              great room with a soaring, wood-beamed Read more...
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
           {arr.map((e,index)=>
           <div key={index} className="rounded-md border flex gap-3 p-3">
           <Image src={bed} alt="" />
           <section>
             <p className="text-base font-medium text-L-Primary">Made for hosting</p>
             <p className="text-xs font-medium text-L-Secondary">Five spacious bedrooms and a bunk room</p>
           </section>
           </div>
          )}
          </div>
          <div className="">
          <p className="text-lg font-semibold text-L-Primary">Property Amenities</p>
          <section className="bg-Sur-light-100 rounded grid grid-cols-3 grid-rows-3">
          {amenities.map((e,index)=>
          <div key={index} className=" flex gap-3 p-3 h-fit">
          <Image src={bed} alt="" />
          <section>
            <p className="text-base font-medium  text-L-Primary">{e}</p>
          
          </section>
          </div>
          )}
          </section>
          </div>
          <div className="">
            <Image src={map} alt="" className="w-full"/>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="bg-Sur-White p-14 text-L-Primary">
        <p className="text-3xl font-semibold">More for you</p>
        <section className="flex flex-wrap justify-center items-center">
        {arr2.map((e,index)=>
 <div key={index} className="w-3/12 m-6 shadow-xl h-fit bg-Sur-White rounded-lg hover:scale-105 duration-300 transition-transform ease-in-out">

<div className="h-48">
<Image src={e.imagelink} alt="" className="w-full  rounded-t-lg object-cover h-full inset-y-10"/>
</div>

 <div className="py-4 flex flex-col gap-5">
 <section>
 <p className="text-base px-4 font-semibold text-L-Primary">{e.title}</p>
 <p className="font-medium px-4 text-L-Secondary text-sm">{e.address}</p>
 </section>
 <section className="flex w-full text-sm text-L-Secondary">
    <p className="w-4/12 border border-Brand/Light/50 p-1 text-center">{e.area}</p>
    <p className="w-4/12 border border-Brand/Light/50 p-1 text-center">{e.bedrooms}</p>
    <div className="w-4/12 border border-Brand/Light/50 p-1 text-center">{e.bathrooms}</div>
 </section>
 <section className="px-4 flex justify-between">
     <p className="text-L-Primary text-xl font-semibold">{e.price}</p>
     <p className="font-medium text-L-Secondary">{e.share} ownership</p>
 </section>
 </div>
     </div>
)}
        </section>
      </div>
    </div>
  );
};

export default Viewproperty;
