import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'
const Header = () => {
  return (
    <header className='w-full  h-auto max-h-[86px] p-[20px_60px] gap-0 border-b  justify-between'>
        <Image
              src={logo}
              alt="Vercel Logo"
              
              className='w-[62px] h-[41px]'
              priority
            />
            <div className=""></div>
    </header>
  )
}

export default Header
