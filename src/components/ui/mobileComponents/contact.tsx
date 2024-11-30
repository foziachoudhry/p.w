import React from 'react'

const MobileContact = () => {
	return (
		<div>
			<h2 className="border-blue-600 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-yellow-500">
      Contact
      </h2>
			<div>

  {/*  */}
  <div className="awesome bg-yellow-500 text-white" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text " id="name" />
  </div>
  <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder={0}
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "contrast(1.2) opacity(0.4)" }}
        />
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              Karachi South District, Sindh, Pakistan 
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-yellow-500 leading-relaxed">azeemcho640@email.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

        <div className="relative mb-4">
          <label htmlFor="name" className="scroll-m-20 text-sm font-semibold tracking-tight">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-950 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="scroll-m-20 text-sm font-semibold tracking-tight">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-800 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="scroll-m-20 text-sm font-semibold tracking-tight">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-800 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-300 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
          />
        </div>
        <button className="text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Send
        </button>
      </div>
    </div>
  </section>


			</div>
		</div>
	)
}

export default MobileContact