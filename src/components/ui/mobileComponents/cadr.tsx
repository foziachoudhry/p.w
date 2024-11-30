import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaGithubSquare, FaLinkedin, FaNpm } from "react-icons/fa";
import Link from "next/link";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaRegCircleDown } from "react-icons/fa6";

const MobileCard = () => {
	return (
		<div data-aos="zoom-in "className =' h-[100vh] bg-[#E8AC04] flex flex-col items-center justify-center '>
			<div className="card glass w-80 p-5 flex flex-col justify-center items-center">

			<Image src="/ss/my pic@.jpg"alt="Profile-Pictuer" width={300} height={300} className="rounded-md mx-auto"/>

      <div className="card-body">

			<h1 className="card-title text-2xl text-center font-bold uppercase">Fozia Choudhry</h1>
			<h2 className="text-md  text-2xl text-center  tracking-tight text-[#0e074d] font-bold">
				<Typewriter
      options={{
      strings: ['WEB DEVELOPER', 'UI.UX DESIGNER','JAVASCRIPT','NEXT JS','REACT JS','THML /CSS' ,'MS Office','Excel'],
      autoStart: true,
      loop: true,
  }}
/>
     {/*social media*/}
			</h2>
						<div className="grid grid-cols-3 gap-3 text-center">
				{/*linkedin*/}
				<div className="mt-3">
					<Link href="https://www.linkedin.com/in/foziachoudhry/"target="_blank" className="text-gray-800 ">
					<FaLinkedin className="text-3xl text-gray-950 hover:text-[#0762c8]"/>
					</Link>
				</div>

				{/*npm*/}
				<div className="mt-3">
				<Link href="https://www.npmjs.com/~fozia-choudhry/"target="_blank" className="text-gray-800 ">
					<FaNpm className="text-3xl text-gray-950 hover:text-[#e41b1b]"/>
					</Link>
				</div>

				{/*github*/}
				<div className="mt-3">
				<Link href="https://github.com/foziachoudhry"target="_blank" className="text-black">
					<FaGithubSquare className="text-3xl text-gray-950 hover:text-[#24292e]"/>
					</Link>
				</div>
				{/*Vercel*/}
							<div className="mt-3 text-center w-full ">
							<Link href="https://mileston-2-by-fozia.vercel.app/ ">
			        <Button className="hover:text-sky-500">
              <FaRegCircleDown/>Login My C-V</Button>

			</Link>
			</div>
				</div>

  </div>
</div>
		</div>
	)
}

export default MobileCard