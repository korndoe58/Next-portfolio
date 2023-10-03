import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='h-24 md:h-24 p-5 lg:px-20 xl:px-40 text-black flex items-center justify-between backdrop-blur-sm bg-white/50'>
        <Link href={'/'}><div className=" h-6 w-6 relative "><Image src={'/logo.png'} alt='logo' sizes="(max-width: 768px) 100vw" fill className=" object-contain" /></div></Link>
        <div className='flex flex-col text-xs'>
            <p className='flex flex-col items-end'>© ALL RIGHTS RESERVED. </p>
            <span>Created by Supakorn Rattnapet</span>
        </div>
        
    </div>
  )
}

export default Footer