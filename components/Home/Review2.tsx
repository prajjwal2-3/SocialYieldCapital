import React from 'react'
import review from '../../public/review.svg'
import Image from 'next/image'
const Review2 = () => {
  return (
    <div className='p-10 h-[45rem] mb-20 flex flex-col justify-between bg-white'>
        <section>
          <p className='text-xl font-medium text-[#507B8B]'>Testimonials</p>
          <p className='text-[#1C2B31] text-4xl mt-5 font-semibold'>Some words from our clients</p>
        </section>
        <section className='w-full flex justify-center items-center cursor-pointer mt-5'>
            <Image src={review} alt=''/>
        </section>
    </div>
  )
}

export default Review2
