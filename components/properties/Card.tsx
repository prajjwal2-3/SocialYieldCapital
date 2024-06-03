import React from "react";
import house1 from "../../public/house12.svg";
import house2 from "../../public/house22.svg";
import house3 from "../../public/house32.svg";
import Image from "next/image";
const Card = () => {
  const arr = [
    { imagelink: house1,
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
        share:'1/8' },
    { imagelink: house1,
        title:'Coastal Treehouse',
        address:'735 betty lane,Incline village, NV 89451 USA',
        area:'3000 sq metre',
        bedrooms:'3 Bedrooms',
        bathrooms:'3 Bathrooms',
        price:'$638,000',
        share:'1/8' },
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
        share:'1/8' },
    { imagelink: house1,
        title:'Coastal Treehouse',
        address:'735 betty lane,Incline village, NV 89451 USA',
        area:'3000 sq metre',
        bedrooms:'3 Bedrooms',
        bathrooms:'3 Bathrooms',
        price:'$638,000',
        share:'1/8' },
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
        share:'1/8' },

];
  return (

  <div className="flex flex-wrap justify-center items-center p-10">
   {arr.map((e,index)=>
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
  </div>
  )
};

export default Card;
