import React from 'react'
import Image from 'next/image'
import col from '../../public/col.svg'
const Col = () => {
  return (
    <div className='p-10 h-[45rem] flex flex-col justify-between bg-gradient-to-r from-[#507B8B] to-[#344A53]'>
        <section>
          <p className='text-xl font-medium text-white'>Why us?</p>
          <p className='text-[#1C2B31] text-4xl mt-5 font-semibold'>Invest with the best</p>
        </section>
        <section className='w-full flex justify-center items-center'>
            <Image src={col} alt=''/>
        </section>
    </div>
  )
}

export default Col
