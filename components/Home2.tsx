// 'use client'
// import React from 'react'
// import About from './About'
// import NumberTicker from './magicui/number-ticker'
// import { AnimatePresence, motion } from "framer-motion";
// const Home2 = () => {
//     const arr = [{
//         image:'https://framerusercontent.com/images/6snQ53S3oS3dc72M2cx8gegPU5Q.gif',
//         title:'100% Sustainable',
//         description:' Our network is 100% sustainable, and is the market leader when it comes to truly sustainable Investment services.'
//     },
//     {
//         image:'https://framerusercontent.com/images/tir56azFY9VyVXzk9TxdTIMQApE.gif',
//         title:'Budget friendly',
//         description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident natus corrupti, fugiat aliquid facere q culpa.'
//     },
//     {
//         image:'https://framerusercontent.com/images/kbtj3C4XZevzlKc8m898pwK8CU.gif',
//         title:'The Largest Network',
//         description:'The largest network across England and growing. With more than 403,470 units across England and 70% market share.'
//     },
//     {
//         image:'https://framerusercontent.com/images/H6IcKCn1tnGfoLq8FowiEFBb834.gif',
//         title:'Investor centric',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae dolores quas est esse.'
//     },
//     {
//         image:'https://framerusercontent.com/images/0t6ZM6tCkQBKmoZriNQCO6AuOp0.gif',
//         title:'Reliable Network',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae dolores quas est esse.'
//     },
//     {
//         image:'https://framerusercontent.com/images/0t6ZM6tCkQBKmoZriNQCO6AuOp0.gif',
//         title:'Reliable Network',
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae dolores quas est esse.'
//     },
// ]

//   return (
    
//     <div className='min-h-screen pt-20 flex flex-col gap-10'>
//       <motion.div
//        animate={{
//         opacity: [0, 1],
//         y: [110, 0],
//       }}
//       transition={{
//         duration: 1,
//         type: "keyframes",
//       }}
//       className="pt-28 px-12 flex flex-col items-center justify-center text-center gap-7">
//         <p className='font-extrabold text-8xl '>Invest in <span className='text-Brand/Primary'>Real-estate</span> <br /> with Social Yield Capital</p>
//         <p className='text-2xl w-8/12'> Your gateway to smarter co-ownership and seamless property
//             management, all under the trusted guardianship of the UKs finest
//             real estate innovators.</p>
           
//         <button className='bg-L-Primary p-3 rounded-full text-white'>Start Investing</button>
//         <div className="w-11/12 mt-5">
//         <img src='https://res.cloudinary.com/dzkldv06d/image/upload/v1718376911/Morning_London_Skyline_lzz0ze.jpg' alt='' className='rounded-2xl' />
//       </div>
//       </motion.div>
//       <div className="text-center flex flex-col mt-14 px-12 gap-10">
//         <p className='text-5xl font-bold'>Why are we special</p>

//      <motion.div
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.5 }} 
//       transition={{ duration: 0.5 }} 
//      className="flex flex-wrap justify-center items-center my-20">
//      {arr.map((e,index)=>
//      <div key={index} className="border m-4 border-black/20 rounded-3xl p-6 w-[30%] h-72 flex flex-col justify-between text-left">
//      <section className=''>
//       <img src={e.image} alt="" className='w-10 h-10' />
//      </section>
//      <section className='flex flex-col gap-4'>
//       <p className='text-2xl font-semibold'>{e.title}</p>
//       <p className='text-lg text-black/60'>
//      {e.description}
//       </p>
//      </section>
//      </div>
//     )}
//      </motion.div>
//       </div>
   
    
//     <About/>
    
//       <div className="py-24 flex flex-col gap-6">
//         <motion.p
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.5 }} 
//           transition={{ duration: 0.5 }} 
//         className='text-6xl font-extrabold text-center'>Why you should Invest with us</motion.p>
//         <motion.p 
//           initial={{ opacity: 0, y: 110 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.5 }} 
//           transition={{ duration: 0.5 }} 
//         className='text-xl text-center'>We focus on boosting our metrics rather than speaking.</motion.p>
//         <motion.section
//           initial={{ opacity: 0, y: 150 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.5 }} 
//           transition={{ duration: 0.5 }} 
//         className='flex justify-around items-center mt-10'>
//            <section className='w-3/12'>
//            <p className='text-8xl font-bold text-center'>$ <NumberTicker value={879}/>m </p>
//            <p className='text-2xl text-center'>
//            Total Investment
//            </p>
//            </section>
//            <section className='w-3/12'>
//            <p className='text-8xl font-bold text-center'> <NumberTicker value={400}/>+ </p>
//            <p className='text-2xl text-center'>
//            Properties Listed
//            </p>
//            </section>
//            <section className='w-3/12'>
//            <p className='text-8xl font-bold text-center'> <NumberTicker value={23}/>k+ </p>
//            <p className='text-2xl text-center'>
//            Investors Joined
//            </p>
//            </section>
//         </motion.section>
//       </div>
//     </div>
//   )
// }

// export default Home2
