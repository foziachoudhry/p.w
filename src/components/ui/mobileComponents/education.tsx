import React from 'react'
import Image from "next/image";

const MobileEducation = () => {
	return (
		
		<div className='bg-slate-400 w-full p-5 '>
			<h2 className="border-slate-950 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-slate-950">
      Education
          </h2>
			      <div className="mt-4 divide-y-2 divide-slate-950 ">
        <div className="py-2 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="title-font text-slate-950 font-bold">
              Bachelor's of Arts
							<Image src="/ss/col.jpg"alt="Profile-Pictuer" width={200} height={200} className="rounded-md "/>
            </span>
            <span className="mt-1 text-slate-950 text-sm">Pakistan</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-slate-950 title-font mb-2">
              Bachelor's of Arts degree from karachi university.
            </h2>
            <p className="leading-relaxed">
              This experience not only strengthened her academic knowledge but also enriched her understanding of various disciplines, providing a well-rounded foundation for her career. The supportive environment and dedicated faculty at the college played a significant role in her educational journey..
            </p>

              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>

          </div>
        </div>
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-bold title-font text-slate-950">
              Intermediate
							<Image src="/ss/images 222.jpg"alt="Profile-Pictuer" width={250} height={250} className="rounded-md "/>
            </span>
            <span className="mt-1 text-slate-950 text-sm">Pakistan</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-slate-950 title-font mb-2">
              Intermediate degree from Sir Syed Government Girls College.  
            </h2>
            <p className="leading-relaxed">
             At Sir Syed Government Girls College, I completed my Intermediate education, which was a period of growth and learning..
            </p>

              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>

          </div>
        </div>
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-bold title-font text-slate-950">
              Matriculation Mehran Public School Karachi.
            </span>
            <span className="text-sm text-slate-950">Pakistan</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-slate-950 title-font mb-2">
             I completed my Matric in the Science group at Mehran Public School
            </h2>
            <p className="leading-relaxed">
              I attended Mehran Public School, where I built a strong foundation in my early education. 
            </p>

              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>

          </div>
        </div>
      </div>
		</div>
	)
}

export default MobileEducation
