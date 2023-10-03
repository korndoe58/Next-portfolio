import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='w-full h-16    p-4 flex justify-between items-center uppercase md:h-18 md:px-10 lg:px-20 lg:h-18  xl:px-40 xl:h-24 '>
        {/* logo */}
        <div className="text-[#0d0b06] font-bold text-xl md:font-bold  md:text-center">
          <Link href={'/'}><div className=" h-9 w-9 relative "><Image src={'/logo.PNG'} alt='logo' sizes="(max-width: 768px) 100vw" fill className=" object-contain" /></div></Link>
        </div>
        {/*mobile munu */}
        <div className="md:hidden">
            <Menu/>
        </div>
        {/* right LINKS */}
        <div className="hidden  md:flex text-sm gap-4 lg:font-medium  xl:text-base ">
            <Link className='px-3 py-2 rounded-xl hover:backdrop-blur-sm hover:bg-white/30' href="/">Home</Link>
            <Link className='px-3 py-2 rounded-xl hover:backdrop-blur-sm hover:bg-white/30' href="/about">About</Link>
            <Link className='px-3 py-2 rounded-xl hover:backdrop-blur-sm hover:bg-white/30' href="/myproject">my project</Link>
            <Link className='px-3 py-2 rounded-xl hover:backdrop-blur-sm hover:bg-white/30' href="/contact">contact</Link>


        </div>


    </div>
  )
}

export default Navbar