import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaGithubSquare, FaLinkedin, FaNpm } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaRegCircleDown } from "react-icons/fa6";



export function Sidebar() {
  return (
		
		
    <div className="h-screen flex flex-col items-center p-3 bg-[#E8AC04]">
			{/*image */}
			
			<Image src="/ss/my pic@.jpg"alt="Profile-Pictuer" width={300} height={300} className="rounded-md"/>

			{/*name */}
			<div className="mt-5">
				<h3 className="text-xl font-bold tracking-tight  text-center">Hi i am</h3>
			<h1 className="text-xl font-bold tracking-tight uppercase">Fozia Choudhry</h1>
			<h2 className="text-lg text-center font-semibold tracking-tight text-gray-900">
				<Typewriter
  options={{
    strings: ['WEB DEVELOPER', 'UI.UX DESIGNER','JAVASCRIPT','NEXT JS','REACT JS','M.S Office', 'Excel','THML /CSS'],
    autoStart: true,
    loop: true,
  }}
/>
			</h2>
			</div>

			{/*social media Account */}
			<div className="grid grid-cols-3 gap-3">
				{/*linkedin*/}
				<div className="mt-4">
					<Link href="https://www.linkedin.com/in/foziachoudhry/"target="_blank" className="text-gray-600 ">
					<FaLinkedin className="text-3xl text-gray-800 hover:text-[#0762c8]"/>
					</Link>
				</div>

				{/*npm*/}
				<div className="mt-4">
				<Link href="https://www.npmjs.com/~fozia-choudhry/"target="_blank" className="text-gray-600 ">
					<FaNpm className="text-3xl text-gray-600 hover:text-[#e41b1b]"/>
					</Link>
				</div>

				{/*github*/}
				<div className="mt-4">
				<Link href="https://github.com/foziachoudhry"target="_blank" className="text-black">
					<FaGithubSquare className="text-3xl text-gray-800 hover:text-[#24292e]"/>
					</Link>
				</div>

			{/*C V button */}

			<div className="mt-4 text-center">
												<Link href="https://mileston-2-by-fozia.vercel.app/ ">
			<Button className="hover:text-sky-500">
      <FaRegCircleDown  />Login My C-V </Button>

			</Link>
			</div>
				</div>

    </div>
  )
}