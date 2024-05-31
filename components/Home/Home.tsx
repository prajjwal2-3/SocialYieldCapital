import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Sub from './Sub'
import About from './About'
import CustomizedAccordions from './Accordian'
import Accordianbg from './Accordianbg'

const Home = () => {
  return (
    <div className=''>
     <div className="">
     <Header/>
     </div>
      <Hero/>
      <Sub/>
      <About/>
      <Accordianbg/>
      
    </div>
  )
}

export default Home
