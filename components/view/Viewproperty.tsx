
import React from 'react'
import Image from 'next/image'
import main from '../../public/viewhome.svg'
import pic1 from '../../public/viewprop1.svg'
import pic2 from '../../public/viewprop2.svg'
import pic3 from '../../public/viewprop3.svg'
import pic4 from '../../public/viewprop4.svg'
import map from '../../public/map.svg'
import { usePathname } from 'next/navigation'
const Viewproperty = () => {
   
  return (
    <div className='pt-20'>
    <div className="w-full h-20 bg-L-Primary"></div>
      <div className="px-14 -mt-14 flex gap-2 pb-5">
        <Image src={main} alt=''/>
        <div className="flex flex-wrap p-2">
        <Image src={pic1} alt=''/>
        <Image src={pic2} alt=''/>
        <Image src={pic3} alt=''/>
        <Image src={pic4} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Viewproperty
