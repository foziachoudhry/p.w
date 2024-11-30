"use client";

import { useEffect } from "react";
//animate scroll library
import AOS from "aos"
import "aos/dist/aos.css";
//components

import {Detail} from "./detail";
import { Sidebar } from "./sidebar";
import MobileCard from "@/components/ui/mobileComponents/cadr";
import MobileEducation from "@/components/ui/mobileComponents/education";
import MobileExperience from "@/components/ui/mobileComponents/experience";
import MobileSkill from "@/components/ui/mobileComponents/skill";
import MobileProject from "@/components/ui/mobileComponents/project";
import MobileContact from "@/components/ui/mobileComponents/contact";
import { Contact } from "lucide-react";



const MainPage = () => {
// useEffect for AOS
		useEffect(() => {
AOS.init({
	once:false,
})
},[]);
	return (
		<div>
			{/*Mobile view */}
			<div className=" overflow-x-hidden bg-slate-950 h-screen md:hidden">
			{/*Card */}
			<div data-aos="zoom-in" >
			<MobileCard/>
			</div>
			{/*eudation */}
			<MobileEducation/>
			{/*experience*/}
			<MobileExperience/>
			{/*skills */}
			<MobileSkill/>
			{/*Projects */}
			<MobileProject/>
			{/*Contact */}
			<MobileContact/>
			
			</div>
      {/*desktop view */}
		<div className="hidden  md:flex md:overflow-hidden md:h-screen">
			{/* side bar */}
			<div className="w-1/5">
				<Sidebar />
			</div>
			{/*main*/ }
			<div className="w-full">
				<Detail/>
			</div>
			<div>
				<Contact/>
			</div>
		</div>
		</div>
	)
}
export default MainPage