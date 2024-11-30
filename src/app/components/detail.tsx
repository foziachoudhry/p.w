import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Education from "./education"
import Experience from "./experience"
import Skills from "./skills"
import Projects from "./projects"
import Contact from "./contact"

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-4 bg-slate-950">
      <TabsList className="grid w-full grid-cols-5 bg-[#E8AC04] text-slate-950">
				{/*Tabs Triger*/}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experince">Experince</TabsTrigger>
				<TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="project">Projects</TabsTrigger>
				<TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
				{/*Tabs and content here*/}
				{/*Education*/}
      <TabsContent value="education">
				<Education />
      </TabsContent>

			 {/*Experience*/}
      <TabsContent value="experince">
				<Experience />
      </TabsContent>

			{/*Skills*/}
      <TabsContent value="skills">
				<Skills />
      </TabsContent>

			 {/*Projects*/}
      <TabsContent value="project">
				<Projects />
      </TabsContent>
						 {/*contact*/}
      <TabsContent value= "contact">
				<Contact />
      </TabsContent>

    </Tabs>
  )
}
