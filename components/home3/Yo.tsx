import Sub from '../Home/Sub'
import React from 'react'
import About from '../About'
import Cards from '../Home/Cards'
import Hero3 from './Hero3'
import Review2 from '../Home/Review2'

export default function Yo() {
  return (
    <div className=''>
   
  
     
      
    <Hero3/>
    <Sub/>
   
    <About/>
          {/* <Accordianbg/> */}
    <div className="px-32 pt-24 pb-8">
      <section className='gap-9 flex flex-col'>
        <p className='text-xl font-medium text-[#507B8B]'>Properties</p>
        <p className='text-[#1C2B31] mb-8 text-4xl font-semibold'>Latest Investment Options</p>
      </section>
    <Cards/>
    </div>
{/* <ParallaxScrollDemo/> */}
    <Review2/>
 
  </div>
  )
}
