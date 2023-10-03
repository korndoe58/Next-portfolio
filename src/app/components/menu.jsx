"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "ABOUT", url: "/about" },
  { id: 3, title: "MY PROJECT ", url: "/myproject" },
  { id: 4, title: "CONTACT", url: "/contact" },


];

const Menu = () => {
   const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;
  return ( 
    <div>
    <Image
      src={open ? "/close.svg" : "/open.svg"}
      alt=""
      width={20}
      height={20}
      onClick={() => setOpen(!open)}
      className="cursor-pointer"
    />
    {open && (
      <div className="  backdrop-blur-sm bg-white/60 text-black font-semibold absolute left-0 bottom-0 w-full h-[calc(100vh-4rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10  ">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
            {item.title}
          </Link>
        ))}


      </div>
    )}
  </div>
  )
}

export default Menu