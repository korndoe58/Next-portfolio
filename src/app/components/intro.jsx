import Image from "next/image";
import Link from "next/link";

const imageStyle = {
    borderRadius: '60% 40% 30% 70%/ 60% 30% 70% 40%',
    boxShadow:'0 0 30px 5px #fff',
      
}


export default function Intro() {
    return <div className="h-[calc(100vh-3rem)] w-full flex flex-col  p-2 px-10 justify-between md:px-22 lg:flex-row lg:px-20 lg:gap-4  " >
        {/* image container */}
        <div className=" flex justify-center items-center flex-1 "  >
            <div  className=" h-60 w-80 relative md:h-80 md:w-100 lg:h-[60%] lg:w-[90%] " id="img" >
                <Image src={"/k.jpg"} alt="me"  className=" object-cover p-0 " fill sizes="(max-width: 768px) 100vw" style={imageStyle} />
            </div>
        </div>

        {/* text container */}
        <div className="flex-1 flex flex-col justify-start gap-10 text-center md:justify-around md:items-center md:pb-10 lg:justify-center lg:gap-20  ">
            <h1 className=" text-3xl font-extrabold">Front-End React Developer </h1>
            <p className="md:px-10 md:text-lg md:font-semibold md:w-[70%] lg:w-full ">Hi, I'm Supakorn Rattanapet.Crafting seamless UI/UX experiences with React and cutting-edge technologies.</p>
            {/* linkin github */}
                <div className="flex justify-center items-center gap-4">
                    <Link href={'https://www.linkedin.com/in/supakorn-rattanapet-505907282/'} target="blank"><Image src={'/li.png'} alt="linkin" width={30} height={30}  className="hover:-translate-y-2 ease-out duration-300 " /></Link>
                    <Link href={'https://github.com/korndoe58'} target="blank"><Image src={'/github.png'} alt="github" width={30} height={30} className="hover:-translate-y-2 ease-out duration-300 " /></Link>
                    <Link href={'https://www.facebook.com/korn.doe.5'} target="blank"><Image src={'/facebook.svg'} alt="github" width={30} height={30} className="hover:-translate-y-2 ease-out duration-300 "/></Link>
                    <Link href={'https://www.instagram.com/korn_doe/'} target="blank"><Image src={'/ins.png'} alt="github" width={32} height={32} className="hover:-translate-y-2 ease-out duration-300 "/></Link>
                </div>
            
        </div>
        
    </div>
  }