import React, { useState } from 'react'
import axios from 'axios'
export default function Chatbot() {
    const [query,setquery] = useState('')
  const [isloading,setisloading]=useState(false)
  const [ans,setans]=React.useState('')
  let data1 = JSON.stringify({
   "inputText": query
 });
 
 let config1 = {
   method: 'post',
   maxBodyLength: Infinity,
   url: 'https://wordent-be.vercel.app/sum/askSYC',
   headers: { 
     'Content-Type': 'application/json'
   },
   data : data1
 };
    function askSYC(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        setisloading(true)
        axios.request(config1)
    .then((response) => {
        setans(JSON.stringify(response.data))
      console.log(JSON.stringify(response.data));
      setisloading(false)
    })
    .catch((error) => {
      console.log(error);
      setisloading(false)
    });
    
    }
  return (
    <div className="bg-white w-3/12 hidden md:flex flex-col gap-10 mt-10 mr-5 rounded-lg h-screen p-5">
    <div className=" h-fit p-4 rounded-lg border  border-neutral-200 flex-col justify-start items-start gap-1.5 flex">
        <p className="text-gray-800 text-sm font-semibold font-['General Sans'] leading-[21px]">
          Ask a question
        </p>
        <p className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
          Our ai agent & team can help
        </p>
      </div>
      <div className=" h-fit w-full p-4 rounded-lg border  border-neutral-200 flex-col justify-start items-start gap-6 flex">
        <div className=" h-fit  bg-white rounded-lg  justify-center items-center flex">
          <div className="grow shrink basis-0  justify-between items-center gap-2 flex flex-row">
            <input className="text-zinc-500 text-sm p-3 border border-neutral-200 outline-none rounded-lg  font-medium font-['General Sans'] leading-[21px]"  
            onChange={(e)=>{
              setquery(e.target.value)
            }}
            placeholder="Search for help"
            />
              
       <button className="p-2 bg-L-Primary text-white rounded-lg" onClick={(e)=>askSYC(e)} >{isloading?'Wait..':'Ask'}</button>
            
          </div>
        </div>
        <div className="  h-fit flex-col justify-start items-start gap-4 flex">
          {ans===''?
          <>
          <div className="bg-white rounded-lg px-3 py-2 justify-start items-center gap-1.5 inline-flex">
          <ul className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
            How to invest on syc
          </ul>
        </div>
        <div className=" px-3 bg-white rounded-lg py-1 justify-start items-center gap-1.5 inline-flex">
          <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
            What are the steps to invest
          </div>
        </div>
        <div className=" px-3 py-1 bg-white rounded-lg justify-start items-center gap-1.5 inline-flex">
          <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
            How much return i can get
          </div>
        </div>
        <div className=" px-3 py-1 bg-white rounded-lg justify-start items-center gap-1.5 inline-flex">
          <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
            How to invest on syc
          </div>
        </div>
        <div className=" px-3 py-1 bg-white rounded-lg justify-start items-center gap-1.5 inline-flex">
          <div className="text-zinc-500 text-sm font-medium font-['General Sans'] leading-[21px]">
            What are the steps to invest
          </div>
        </div>
          </>:ans}
        </div>
        </div>
    </div>
  )
}
