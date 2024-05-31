'use client'
import React from 'react'
import Image from 'next/image'
import house1 from '../../public/house1.svg'
import arrow from '../../public/arrow.svg'
import house2 from '../../public/house2.svg'
import house3 from '../../public/house3.svg'
const Cards = () => {
  return (
    <div className="flex ">
      <div className='w-4/12 h-[36rem] m-10'>
        <a href="#" className="group relative block bg-black overflow-hidden rounded-lg">
          <div className="w-full h-full">
            <Image
              alt=""
              src={house1}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
          <div className="relative p-4 sm:p-6 lg:p-8">
         
            <div className="mt-32 sm:mt-48 lg:mt-64 bg-[#22343AE5] transform transition-all duration-300 ease-in-out translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 rounded-lg">
              <div className="flex justify-between px-3 py-4">
                <section>
                  <p className='text-white text-xl font-medium'>Wood Creek</p>
                  <p className='text-base text-[#AFC2CA] font-medium'>Kensington Palace, London</p>
                </section>
                <section>
                  <Image src={arrow} alt=''/>
                </section>
              </div>
              <div className="flex justify-between mt-5 px-3">
                <p className='text-white text-xl font-medium'>$830,560</p>
                <p className='text-base text-[#AFC2CA] font-medium'>1/8 ownership</p>
              </div>
              <div className='flex justify-center p-5 '>
                <button className="bg-[#1C2B31] text-white px-4 py-2 w-full rounded">Sign up to explore</button>
              </div>
            </div>
            
          </div>
        </a>
      </div>
      <div className='w-4/12 h-[36rem] m-10'>
        <a href="#" className="group relative block bg-black overflow-hidden rounded-lg">
          <div className="w-full h-full">
            <Image
              alt=""
              src={house2}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
          <div className="relative p-4 sm:p-6 lg:p-8">
         
            <div className="mt-32 sm:mt-48 lg:mt-64 bg-[#22343AE5] transform transition-all duration-300 ease-in-out translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 rounded-lg">
              <div className="flex justify-between px-3 py-4">
                <section>
                  <p className='text-white text-xl font-medium'>Haringey</p>
                  <p className='text-base text-[#AFC2CA] font-medium'>Enfield and Haringey, London</p>
                </section>
                <section>
                  <Image src={arrow} alt=''/>
                </section>
              </div>
              <div className="flex justify-between mt-5 px-3">
                <p className='text-white text-xl font-medium'>$830,560</p>
                <p className='text-base text-[#AFC2CA] font-medium'>1/8 ownership</p>
              </div>
              <div className='flex justify-center p-5 '>
                <button className="bg-[#1C2B31] text-white px-4 py-2 w-full rounded">Sign up to explore</button>
              </div>
            </div>
            
          </div>
        </a>
      </div>
      <div className='w-4/12 h-[36rem] m-10'>
        <a href="#" className="group relative block bg-black overflow-hidden rounded-lg">
          <div className="w-full h-full">
            <Image
              alt=""
              src={house3}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
          <div className="relative p-4 sm:p-6 lg:p-8">
         
            <div className="mt-32 sm:mt-48 lg:mt-64 bg-[#22343AE5] transform transition-all duration-300 ease-in-out translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 rounded-lg">
              <div className="flex justify-between px-3 py-4">
                <section>
                  <p className='text-white text-xl font-medium'>Redbridge</p>
                  <p className='text-base text-[#AFC2CA] font-medium'>Havering and redbridge, London</p>
                </section>
                <section>
                  <Image src={arrow} alt=''/>
                </section>
              </div>
              <div className="flex justify-between mt-5 px-3">
                <p className='text-white text-xl font-medium'>$830,560</p>
                <p className='text-base text-[#AFC2CA] font-medium'>1/8 ownership</p>
              </div>
              <div className='flex justify-center p-5 '>
                <button className="bg-[#1C2B31] text-white px-4 py-2 w-full rounded">Sign up to explore</button>
              </div>
            </div>
            
          </div>
        </a>
      </div>
    </div>
  )
}

export default Cards
