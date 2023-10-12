import Image from "next/image";
import Link from "next/link";

export default function Work() {
    return <div className="h-max w-full flex flex-col justify-start py-4   px-5 gap-4 md:px-10 lg:px-20  xl:gap-16  ">
        {/* head */}
        <div className="text-center">
            <h1 className="text-4xl  font-extrabold p-4 lg:text-5xl ">MY PROJECT</h1>
            <h2 className=" font-bold lg:text-xl">Crafting Exceptional Web Experiences</h2>
        </div>
        <div className="flex flex-col gap-4 flex-wrap md:flex-row">
            {/* project1 */}
            <div className="w-full h-[40vh] relative md:w-[48%] xl:w-[32%] hover:-translate-y-2 ease-out duration-300  ">
                <Image src={'/work1.png'} alt="project" fill style={{borderRadius:'1rem'}} sizes="(max-width: 768px) 100vw" className=" object-cover"/>
                <div className=" absolute bg-white/80 bottom-0 rounded-b-2xl p-4 w-full flex flex-col gap-2 ">
                    <h1 className=" uppercase font-bold">Crypto Trading platform</h1>
                    {/* tech */}
                    <div className="flex gap-2">
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90"> Nextjs </h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">Tailwindcss</h2>
                    </div>
                    {/* button */}
                    <div className="flex gap-2">
                        <Link href={'https://github.com/korndoe58/crypto_trading_app'} target="blank">
                            <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Code<Image src={'/github.png'} alt="github" width={25} height={25} /></button>
                        </Link>
                        <Link href={'https://crypto-trading-app-orcin.vercel.app/'} target="blank">
                            <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Live Demo<Image src={'/link.png'} alt="github" width={25} height={25} /></button>
                        </Link>
                    </div>
                </div>
            </div>
           
            {/* project2 */}
            <div className="w-full h-[40vh] relative md:w-[48%] xl:w-[32%] hover:-translate-y-2 ease-out duration-300 ">
                <Image src={'/work2.png'} alt="project" fill style={{borderRadius:'1rem'}} sizes="(max-width: 768px) 100vw" className=" object-cover"/>
                <div className=" absolute bg-white/80 bottom-0 rounded-b-2xl p-4 w-full flex flex-col gap-2 ">
                    <h1 className=" uppercase font-bold">e-commerce website</h1>
                    {/* tech */}
                    <div className="flex gap-2">
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90"> Nextjs </h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">TypeScript</h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">Tailwindcss</h2>
                    </div>
                    {/* button */}
                    <div className="flex gap-2">
                        <Link href={'https://github.com/korndoe58/full_stack_ceramic_ecommerce'} target="blank">
                            <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Code<Image src={'/github.png'} alt="github" width={25} height={25} /></button>
                        </Link>
                        <Link href={'https://ceramic-store.vercel.app/'} target="blank">
                            <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Live Demo<Image src={'/link.png'} alt="github" width={25} height={25} /></button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* project3 */}
            <div className="w-full h-[40vh] relative md:w-[48%] xl:w-[32%] hover:-translate-y-2 ease-out duration-300 ">
                <Image src={'/work3.png'} alt="project" fill style={{borderRadius:'1rem'}} sizes="(max-width: 768px) 100vw" className=" object-cover"/>
                <div className=" absolute bg-white/80 bottom-0 rounded-b-2xl p-4 w-full flex flex-col gap-2 ">
                    <h1 className=" uppercase font-bold">portfolio website</h1>
                    {/* tech */}
                    <div className="flex gap-2">
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90 ">React </h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">Sass</h2>
                    </div>
                    {/* button */}
                    <div className="flex gap-2">
                    <Link href={'https://github.com/korndoe58/portfolio'} target="blank">
                        <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Code<Image src={'/github.png'} alt="github" width={25} height={25} /></button>
                    </Link>
                    <Link href={'https://supakornrportfolio.netlify.app/'} target="blank">
                        <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Live Demo<Image src={'/link.png'} alt="github" width={25} height={25} /></button>
                    </Link>
                    </div>
                </div>
            </div>
            {/* project4 */}
            <div className="w-full h-[40vh] relative md:w-[48%] xl:w-[32%] hover:-translate-y-2 ease-out duration-300 ">
                <Image src={'/work4.png'} alt="project" fill style={{borderRadius:'1rem'}} sizes="(max-width: 768px) 100vw" className=" object-cover"/>
                <div className=" absolute bg-white/80 bottom-0 rounded-b-2xl p-4 w-full flex flex-col gap-2 ">
                    <h1 className=" uppercase font-bold">Admin Dashboard</h1>
                    {/* tech */}
                    <div className="flex gap-2 flex-wrap">
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90"> Nextjs </h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">TypeScript</h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">Tailwindcss</h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">Recharts</h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">MUI X</h2>
                    </div>
                    {/* button */}
                    <div className="flex gap-2">
                        <Link href={'https://github.com/korndoe58/admin_dashboard'} target="blank">
                            <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Code<Image src={'/github.png'} alt="github" width={25} height={25} /></button>
                        </Link>
{/*                         <Link href={'https://ceramic-store.vercel.app/'} target="blank">
                            <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Live Demo<Image src={'/link.png'} alt="github" width={25} height={25} /></button>
                        </Link> */}
                    </div>
                </div>
            </div>
            
            {/* project5 */}
            <div className="w-full h-[40vh] relative md:w-[48%] xl:w-[32%] hover:-translate-y-2 ease-out duration-300  ">
                <Image src={'/work5.png'} alt="project" fill style={{borderRadius:'1rem'}} sizes="(max-width: 768px) 100vw" className=" object-cover"/>
                <div className=" absolute bg-white/80 bottom-0 rounded-b-2xl p-4 w-full flex flex-col gap-2 ">
                    <h1 className=" uppercase font-bold">Movie Store</h1>
                    {/* tech */}
                    <div className="flex gap-2">
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90"> Nextjs </h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">Tailwindcss</h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">TypeScript</h2>
                        <h2 className=" font-semibold px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/90">Zustand</h2>
                    </div>
                    {/* button */}
                    <div className="flex gap-2">
                        <Link href={'https://github.com/korndoe58/Movie_Store'} target="blank">
                            <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Code<Image src={'/github.png'} alt="github" width={25} height={25} /></button>
                        </Link>
                        <Link href={'https://movie-store-drab.vercel.app/'} target="blank">
                            <button  className=' px-2 py-1 rounded-xl text-black  backdrop-blur-sm bg-white/10 hover:bg-black/30 flex gap-2 justify-center items-center '>Live Demo<Image src={'/link.png'} alt="github" width={25} height={25} /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

}
