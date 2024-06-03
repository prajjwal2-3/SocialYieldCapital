import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Sub from './Sub'
import About from './About'
import CustomizedAccordions from './Accordian'
import Accordianbg from './Accordianbg'
import Cards from './Cards'
import Col from './Col'
import Review2 from './Review2'
import SvgComponent from './Footersvg'

const Home = () => {
  return (
    <div className=''>
    
  
     
      <Hero/>
      <Sub/>
      <About/>
      <Accordianbg/>
      <div className="p-10">
        <section>
          <p className='text-xl font-medium text-[#507B8B]'>Properties</p>
          <p className='text-[#1C2B31] text-4xl font-semibold'>Latest Investment Options</p>
        </section>
      <Cards/>
      </div>
      <Col/>
      <Review2/>
   
    </div>
  )
}

export default Home
