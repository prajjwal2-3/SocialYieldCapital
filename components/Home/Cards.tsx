'use client'
import React from 'react'
import Image from 'next/image'
import house1 from '../../public/house1.svg'
import arrow from '../../public/arrow.svg'
import house2 from '../../public/house2.svg'
import house3 from '../../public/house3.svg'
import {motion} from 'framer-motion'
const Cards = () => {
  const arr =[{
    image:house1,
    title:'Wood Creek',
    address:'Kensington Palace, London'
  },{
    image:house2,
    title:'Haringey',
    address:'Enfield and Haringey, London'
  },{
    image:house3,
    title:'Redbridge',
    address:'Havering and Redbridge, London'
  }]
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 justify-between">
      {arr.map((e,index)=>
      <motion.div 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }} 
      transition={{ duration: 0.5 }} 
      key={index} className='md:w-[30%] md:h-[36rem] '>
      <a  className="group relative block bg-black overflow-hidden rounded-xl">
        <div className="w-full h-full">
          <Image
            alt=""
            src={e.image}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
        </div>
        <div className="relative p-4 sm:p-6 lg:p-8">
       
          <div className="mt-32 sm:mt-48 lg:mt-64 bg-[#22343AE5] transform transition-all duration-300 ease-in-out translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 rounded-xl">
            <div className="flex justify-between px-3 py-4">
              <section>
                <p className='text-Sur-White text-xl font-medium'>{e.title}</p>
                <p className='text-base text-[#AFC2CA] font-medium'>{e.address}</p>
              </section>
              <section>
                <Image src={arrow} alt=''/>
              </section>
            </div>
            <div className="flex justify-between mt-5 px-3">
              <p className='text-Sur-White text-xl font-medium'>$830,560</p>
              <p className='text-base text-[#AFC2CA] font-medium'>1/8 ownership</p>
            </div>
            <div className='flex justify-center p-5 '>
              <button className="bg-[#1C2B31] text-Sur-White px-4 py-2 w-full rounded">Sign up to explore</button>
            </div>
          </div>
          
        </div>
      </a>
    </motion.div>
      )}
      
      
    </div>
  )
}

export default Cards
