import Image from 'next/image'
import React from 'react'

const Experience = () => {
	return (
		<div data-aos="zoom-in-right" className='text-white justify-between flex'>
			<>


  <div className="card ">
		<h1 className='text-3xl '>My Experience</h1>
		    <Image src="/ss/card3.png"alt="Profile-Pictuer" width={550} height={550} className="rounded-md" />
    <h1>Fozia Choudhry</h1>
    <p>
      Hi,  I&apos;m Fozia Choudhry!
			 Since 2016, I&apos;ve been dedicated to my role as an Inventory Officer at Eastern Garments (PVT) LTD, where I focus on optimizing inventory processes. I&apos;m passionate about exploring the future of technology and expanding my skills in program management. Let&apos;s connect to discuss technology, innovation, and professional growth! 🚀
    </p>
    <button>READ MORE</button>
  </div>
	
  <div className="card">
    <div>
			<h1 className='text-3xl '>My Experience</h1>
      <Image src="/ss/card2.png"alt="Profile-Pictuer" width={550} height={550} className="rounded-md" />
    </div>
    <div className="card">
      <h1>Fozia Choudhry</h1>
      <p>
       Hi, I&apos;m Fozia Choudhry!
			  Since 2016, I&apos;ve been dedicated to my role as an Inventory Officer at Eastern Garments (PVT) LTD, where I focus on optimizing inventory processes. I&apos;m passionate about exploring the future of technology and expanding my skills in program management. Let&apos;s connect to discuss technology, innovation, and professional growth! 🚀
      </p>
      <button>READ MORE</button>
    </div>
  </div>
</>

		</div>
	)
}

export default Experience
