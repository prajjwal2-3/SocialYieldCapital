import React from 'react'
import Image from 'next/image'
import frame251 from '../../public/Frame251.svg'
import frame276 from '../../public/Frame276.svg'
import emily from '../../public/emily.svg'
import wong from '../../public/wong.svg'
import david from '../../public/david.svg'
import mapa from '../../public/mapa.svg'
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import location from '../../public/location.svg'
const AboutusPage = () => {
  return (
    <div className=' pt-20 pb-40'>
      <div className="w-full h-full p-14 bg-white flex flex-col justify-center items-start gap-14 ">
    <div className="self-stretch justify-start items-end gap-14 inline-flex">
        <div className="w-6/12 flex flex-col justify-start items-start gap-6 ">
            <div className="text-Brand/Primary text-2xl font-semibold font-sans break-words">About Social Yield Capital</div>
            <div className="flex flex-col">
                <span className="text-L-Primary text-5xl font-bold font-sans leading-tight break-words">We set out to build</span>
            
                <span className="text-Brand/Primary text-5xl font-medium font-sans leading-tight break-words">a better way to invest</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 ">
            <div className="w-5/12 text-L-Secondary text-lg font-medium font-sans leading-normal break-words">At Social Yield Capital, we are dedicated to transforming the landscape of investment by focusing on social housing and sustainable living.</div>
        </div>
    </div>
</div>
<Image  src={frame251} alt='' className='w-full'/>
<div className="w-full h-fit px-[120px] py-[100px] bg-white flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch justify-start items-center gap-[60px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-10 inline-flex">
            <div className="self-stretch h-[49px] flex-col justify-center items-start gap-8 flex">
                <div className="text-black text-[38px] font-semibold font-['General Sans'] leading-[49.40px]">Who we are</div>
            </div>
            <div className="self-stretch h-[509px] flex-col justify-start items-start gap-8 flex">
                <div className="w-6/12 text-gray-800 text-xl font-semibold font-['General Sans'] leading-[30px]">Social Yield Capital, we are more than just an investment firm.</div>
                <div className="self-stretch text-zinc-500 text-xl font-medium font-['General Sans'] leading-[30px]">We are a collective of pioneers, thinkers, and believers united by a shared purpose to make meaningful impacts through our investments. Our foundation is built on the principles of integrity, innovation, and inclusivity, propelling us to redefine the norms of investment by focusing on areas that traditionally lack attention yet hold immense potential for societal benefit.</div>
                <div className="self-stretch text-zinc-500 text-xl font-medium font-['General Sans'] leading-[30px]">Our approach is holistic and rooted in a deep understanding of the intricate balance between financial returns and social impact. By integrating cutting-edge technology and sustainable practices into our investment strategies, we ensure that each project not only meets the highest standards of efficiency and effectiveness but also contributes positively to environmental sustainability and community resilience.</div>
                <div className="justify-start items-start gap-8 inline-flex">
                    <div className="bg-slate-500 rounded-[238.33px] border-2 justify-start items-center flex">
                        <img className="w-[101.24px] h-[67.49px]" src="https://via.placeholder.com/101x67" />
                    </div>
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-gray-800 text-lg font-semibold font-['General Sans'] leading-[27px]">Emily Thompson</div>
                        <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">Chief Executive Officer</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[447px] p-8 border border-neutral-200 justify-start items-center gap-2.5 flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-8 inline-flex">
                <div className="flex-col justify-center items-start gap-4 flex">
                    <div className="text-slate-500 text-[46px] font-semibold font-['General Sans'] leading-[42.32px]">403,470</div>
                    <div className="text-zinc-500 text-lg font-medium font-['General Sans'] leading-[27px]">units across England</div>
                </div>
                <div className="flex-col justify-center items-start gap-4 flex">
                    <div className="self-stretch text-slate-500 text-[46px] font-semibold font-['General Sans'] leading-[42.32px]">£40,000</div>
                    <div className="self-stretch text-zinc-500 text-lg font-medium font-['General Sans'] leading-[27px]">Savings per Person per Year</div>
                </div>
                <div className="flex-col justify-center items-start gap-4 flex">
                    <div className="self-stretch text-slate-500 text-[46px] font-semibold font-['General Sans'] leading-[42.32px]">70.4%</div>
                    <div className="self-stretch text-zinc-500 text-lg font-medium font-['General Sans'] leading-[27px]">Market Share</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="w-full h-[953px] px-[120px] py-[100px] bg-white flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch justify-start items-center gap-[60px] inline-flex">
        <div className="w-4/12 bg-zinc-100 flex-col justify-start items-center inline-flex">
            <Image  alt='' src={frame276} />
        </div>
        <div className="flex-col w-8/12 justify-center items-start gap-10 inline-flex">
            <div className="flex-col justify-center items-center gap-8 flex">
                <div className="text-black text-[38px] font-semibold font-['General Sans'] leading-[49.40px]">Our Mission</div>
            </div>
            <div className="flex-col justify-start items-start gap-8 flex">
                <div className=" text-gray-800 text-xl font-semibold font-['General Sans'] leading-[30px]">Our mission is simple yet ambitious: to invest in properties that not only yield high returns but also contribute positively to society.</div>
                <div className="self-stretch"><span className="text-gray-800 text-xl font-medium font-['General Sans'] leading-[30px]">Empower Communities:</span><span className="text-zinc-500 text-xl font-medium font-['General Sans'] leading-[30px]"> We strive to empower communities by providing them with sustainable, affordable, and supportive housing that enhances quality of life. Our investments are designed to address the urgent needs of underserved populations, including the elderly, disabled, and low-income families, ensuring they have access to safe, dignified, and long-term housing solutions.<br/></span><span className="text-gray-800 text-xl font-medium font-['General Sans'] leading-[30px]"><br/>Promote Sustainable Living:</span><span className="text-zinc-500 text-xl font-medium font-['General Sans'] leading-[30px]"> Central to our mission is the promotion of sustainable living. By integrating green building practices and renewable technologies into our developments, we not only reduce the environmental impact but also pave the way for healthier, energy-efficient living spaces that set new standards in the housing sector.</span></div>
                <div className="self-stretch text-gray-800 text-xl font-medium font-['General Sans'] leading-[30px]">Through our mission, Social Yield Capital aims to demonstrate that it is possible to achieve excellent financial returns while making a meaningful impact on society and the environment. Our approach not only satisfies the economic goals of our investors but also aligns with a broader commitment to social progress and ecological sustainability.</div>
            </div>
        </div>
    </div>
</div>
<div className="w-full h-fit px-[120px] py-[50px] bg-white flex-col justify-start items-start gap-[60px] inline-flex">
    <div className="self-stretch h-[92px] flex-col justify-start items-start gap-4 flex">
        <div className="text-slate-500 text-xl font-medium font-['General Sans']">Our Team</div>
        <div className="self-stretch h-[49px] flex-col justify-start items-start gap-6 flex">
            <div className="w-8/12 text-gray-800 text-[38px] font-semibold font-['General Sans'] leading-[49.40px]">Meet the Minds Behind Social Yield Capital</div>
        </div>
    </div>
    <div className="self-stretch h-[427px] justify-start items-start gap-6 inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <Image src={emily} alt=''/>
            <div className="self-stretch h-[58px] flex-col justify-start items-start gap-1 flex">
                <div className="text-gray-800 text-xl font-medium font-['General Sans'] leading-[30px]">Emily Thompson</div>
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">Chief Executive Officer</div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <Image src={david} alt=''/>
            <div className="self-stretch h-[58px] flex-col justify-start items-start gap-1 flex">
                <div className="text-gray-800 text-xl font-medium font-['General Sans'] leading-[30px]">David Lee</div>
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">Head of Sustainable Housing Development</div>
            </div>
        </div>
    </div>
    <div className="self-stretch h-[427px] justify-start items-start gap-6 inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
           <Image src={emily} alt=''/>
            <div className="self-stretch h-[58px] flex-col justify-start items-start gap-1 flex">
                <div className="text-gray-800 text-xl font-medium font-['General Sans'] leading-[30px]">Emily Thompson</div>
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">Chief Executive Officer</div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <Image src={wong} alt=''/>
            <div className="self-stretch h-[58px] flex-col justify-start items-start gap-1 flex">
                <div className="text-gray-800 text-xl font-medium font-['General Sans'] leading-[30px]">Michael Wong</div>
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">Lead Architect for Green Building Design</div>
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <Image src={david} alt=''/>
            <div className="self-stretch h-[58px] flex-col justify-start items-start gap-1 flex">
                <div className="text-gray-800 text-xl font-medium font-['General Sans'] leading-[30px]">Sarah Martinez</div>
                <div className="text-zinc-500 text-base font-medium font-['General Sans'] leading-normal">Director of Community Outreach</div>
            </div>
        </div>
    </div>
</div>
<div className="w-full h-[1028px] px-[120px] py-[50px] bg-white flex-col justify-center items-center gap-[60px] inline-flex">
    <div className="self-stretch h-[98px] flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch h-[98px] flex-col justify-center items-start gap-6 flex">
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
                <div className="w-5/12 text-black text-[38px] font-semibold font-['General Sans'] leading-[49.40px]">We’ve investment opportunities across London city</div>
            </div>
        </div>
    </div>
    <div className="self-stretch h-[770px] px-[3px] py-8 bg-white rounded-xl border-2 border-neutral-200 flex-col justify-center items-center gap-2.5 flex">
      
    <div className="absolute flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        London
      </span>
 
      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Image src={location} alt='' />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
         <Image src={location} alt='' />
      </OrbitingCircles>
 
      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
         <Image src={location} alt='' />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Image src={location} alt='' />
      </OrbitingCircles>
    </div>
        <Image src={mapa} alt='' className=''/>
       
    </div>
</div>
    </div>
  )
}

export default AboutusPage
