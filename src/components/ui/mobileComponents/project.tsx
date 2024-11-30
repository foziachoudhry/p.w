import React from 'react'
import Image from "next/image";
const MobileProject = () => {
	return (
		<div className='p-5 flex flex-col justify-center items-center w-full'>
						<h2 className="border-yellow-500 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white ">
      Projects
          </h2>
			      <div className="flex flex-wrap m-4 items-center  text-center">
							
        <div className="lg:w-1/3 sm:w-1/2 p-4">
				<h2 className='text-yellow-500 p-4 font-bold'>HTML Project</h2>
          <div className="flex relative h-64">
            <Image
              alt="gallery"
							width={1000}
							height={1000}
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/ss/html-pro.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 cursor-pointer duration-300 bg-yellow-400">
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3 bg-yellow-300">
                This is HTML Project
              </h2>
              <p className="leading-relaxed line-clamp-2">
                here my HTLL project.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
				<h2 className='text-[#E17CF0] p-4 font-bold'>Profile Project</h2>
          <div className="flex relative h-64">
            <Image
              alt="gallery"
							width={1000}
							height={1000}
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/ss/resume 2.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-yellow-400 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                My Portfolio
              </h2>
              <p className="leading-relaxed">
								This is my Profile Project with HTML ,CSS & JAVASCRIPT
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
				<h2 className='text-purple-300 p-4 font-bold'>Resume Project</h2>
          <div className="flex relative h-64">
            <Image
              alt="gallery"
							height={1000}
							width={1000}
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/ss/rus.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-yellow-400 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Resume Project
              </h2>
              <p className="leading-relaxed">
								This is my Resume Project with HTML ,CSS & javascript
              </p>
            </div>
          </div>
        </div>

        </div>

		</div>
	)
}

export default MobileProject
