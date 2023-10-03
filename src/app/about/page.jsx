import Image from "next/image";

export default function About() {
    return <div className="h-max w-full flex flex-col justify-around  py-6 px-5 gap-8 md:px-10 lg:px-20 lg:flex-row lg:h-[calc(100vh-3rem)]   " id="about">
        {/* tech stack */}
        <div className="flex flex-col gap-4 lg:flex-1 lg:h-full">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold uppercase px-4 lg:text-5xl lg:p-6">tech stack</h1>
            </div>
            <div className="backdrop-blur-sm bg-white/30  rounded-xl md:p-4">
                <div className="flex flex-col gap-2  p-4   ">
                    <h1 className="text-xl font-semibold">Languages and Tools</h1>
                    <div className="flex gap-4 lg:py-2">
                        <Image src={'/html.svg'} width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/css.svg'}width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/javascript.svg'} width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/sass.svg'}  width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/nodejs.svg'}  width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                    </div>
                </div>
                <div className="flex flex-col gap-2  p-4 lg:py-4 ">
                    <h1 className="text-xl font-semibold">Libraries and Frameworks</h1>
                    <div className="flex gap-4 lg:py-2">
                        <Image src={'/react.svg'} width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/nextjs.svg'}width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/tail.svg'} width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                    </div>
                </div>
                <div className="flex flex-col gap-2  p-4  ">
                    <h1 className="text-xl font-semibold">Other</h1>
                    <div className="flex gap-4 lg:py-2">
                        <Image src={'/git.svg'} width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/ill.svg'}width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/pho.svg'} width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/sql.svg'}  width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                        <Image src={'/postman-icon.webp'}  width={45} height={45} alt="html" className="hover:-translate-y-2 ease-out duration-300 "/>
                    </div>
                </div>


            </div>
        </div>
        {/* text container */}
        <div className="flex flex-col justify-between gap-4 h-max lg:flex-1">
            <div>
                <h1 className="text-3xl font-extrabold uppercase px-4 text-center lg:text-5xl lg:p-6">experience</h1>
            </div>
            <div className="backdrop-blur-sm bg-white/30 p-4 rounded-xl md:p-6">
                <h1 className="text-xl font-semibold">Frontend Developer</h1>
                <p>As a frontend developer, I specialize in creating intuitive and visually appealing user interfaces. I blend my passion for design with strong technical skills to bring digital experiences to life.</p>
            </div>
            <div className="backdrop-blur-sm bg-white/30 p-4 rounded-xl md:p-6">
                <h1 className="text-xl font-semibold">Ceramic Production Manager</h1>
                <p>In my previous role as a Ceramic Production Manager, I led teams in crafting beautiful ceramic art pieces. From managing the production process to ensuring quality, I immersed myself in the world of ceramics.</p>
            </div>
            <div className="backdrop-blur-sm bg-white/30 p-4 rounded-xl md:p-6">
                <h1 className="text-xl font-semibold">Economics Tutor</h1>
                <p>As an Economics Tutor, I shared my knowledge and expertise, helping students grasp economic principles. I enjoyed simplifying complex concepts and fostering a deep </p>
            </div>


        </div>
    </div>

}