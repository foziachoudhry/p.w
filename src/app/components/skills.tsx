import React from 'react'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiHtml5Line, RiNextjsFill, RiTailwindCssLine } from 'react-icons/ri'
import { SiCss3 } from 'react-icons/si'
import Image from "next/image";

const Skills = () => {
	return (
		<div>
		<>


  <div data-aos="zoom-in-right" className=" skills text-3xl text-yellow-500" id="skills ">
    <h2 className="heading">
      My <span>Skills</span>
    </h2>
    <div className="skills-container text-yellow-500 text-2xl h-[85vh] overflow-y-scroll">
      <div className="skills-box" id="hyper">
        <i className="bx bxl-html5" id="html" />
        <h3>HTML</h3>
				<Image src="/ss/images js2.jpg"alt="Profile-Pictuer" width={300} height={300} className="rounded-md "/>
        <p>
          am skilled in HTML, creating well-structured and semantically rich web
          pages, ensuring clear, accessible content and a strong foundation for
          web development.
        </p>
				<RiHtml5Line className= 'mt-4 bg-red-600 text-center ' />
        <a href="#" className="btn">
          Read More
        </a>
      </div>
      <div className="skills-box" id="cascading">
				
        <i className="bx bxl-css3" id="css" />
        <h3>CSS 3</h3>
				< FaCss3Alt className= 'mt-4 text-blue-600 text-center ' />
        <p>
          I am skilled in CSS, enabling me to create visually appealing and
          responsive designs that enhance the user experience across various
          devices and screen sizes.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
      <div className="skills-box" id="javascript">
				< IoLogoJavascript className= 'mt-4 bg-red-600 text-center ' />
        <i className="bx bxl-javascript" id="js" />
        <h3>Javascript</h3>
        <p>
          Proficient in JavaScript, capable of building interactive and dynamic
          web applications, enhancing user experiences with responsive and
          efficient code.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
      <div className="skills-box" id="react.js">
				< FaReact className= 'mt-4 text-blue-500 text-center ' />
        <i className="bx bxl-react" id="react" />
        <h3>React JS</h3>
        <p>
          Proficient in React, building dynamic web applications with reusable
          components, efficient state management, and enhancing user experience
          through interactivity.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
      <div className="skills-box" id="next.js">
				< RiNextjsFill className= 'mt-4 text-center ' />
        <i id="next">

        </i>
        <h3>Next JS</h3>
        <p>
          Skilled in Next.js, creating optimized, SEO-friendly, server-side
          rendered applications with fast performance, improved routing, and
          scalable architecture for modern websites.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
      <div className="skills-box" id="tailwind-css">
				< RiTailwindCssLine className= 'mt-4 text-center text-[#17f7f7] ' />
        <i className="bx bxl-tailwind-css" id="tailwind" />
        <h3>Tailwind CSS</h3>
        <p>
          Experienced with Tailwind CSS, crafting responsive, utility-first
          designs that ensure clean, consistent, and flexible styling for
          efficient user interface development.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </div>
  </div>
</>

		</div>
	)
}

export default Skills
