"use client"
import Card from "@/app/components/SkillCard"
import { useState } from "react"
import { skills } from '@/app/data/skills'
import { Code2, Server, Database, Wrench, Library, Brain } from "lucide-react"

const tabs = [
  { name: "All Skills", icon: Library },
  { name: "Frontend", icon: Code2 },
  { name: "Backend", icon: Server },
  { name: "Database", icon: Database },
  { name: "Tools & Others", icon: Wrench },
]

export default function Skill(){
    const Skills = [
  {  title: "2+", desc: "Years of Experience" },
  {  title: "2", desc: "Projects Completed" },
  {  title: "10+", desc: "Languages in SkillSet" },
    ];

    const [active, setActive] = useState("All Skills")
    const filtered = active === "All Skills"
    ? skills
    : skills.filter(s => s.category === active.replace(" & Others", ""))

    return(

        <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col mx-6 my-8 lg:mx-15 lg:my-15">
                    <p className="font-serif text-accent dark:text-dark-accent text-[16px] lg:text-[20px] font-[600] mb-[5px]">My Skills</p>
                    <h1 className="font-serif text-text-primary dark:text-dark-text-primary text-[36px] sm:text-[48px] lg:text-[64px] font-[600] mb-[3px]">Tech Stacks & <span className="text-accent dark:text-dark-accent">Skills</span></h1>
                    <p className="font-serif text-text-secondary dark:text-dark-text-secondary font-[300] text-[16px] lg:text-[20px]">Tech Stacks and Skills I Use to Bring my Ideas to Life.</p>
                </div>
                <div className="homeskillbox overflow-hidden shadow-glass-shadow dark:shadow-dark-glass-shadow flex flex-wrap items-center justify-between rounded-md dark:border dark:border-dark-accent border border-accent dark:bg-dark-glass bg-glass p-4 backdrop-blur-[6px] mx-6 mb-8 lg:my-15 lg:mr-15 lg:ml-auto lg:mx-0 lg:mb-0">
                    {Skills.map(({ title, desc }, i) => (
                        <div key={title} className={`overflow-hidden flex flex-col items-center gap-2 px-2 sm:px-4 py-2 ${i !== 0 ? "border-l border-text-secondary dark:border-l dark:border-dark-text-secondary" : ""}`}>
                            <div className="overflow-hidden flex h-10 w-10 items-center justify-center font-serif text-[22px] sm:text-[30px] text-text-primary dark:text-dark-text-primary">
                                <h1>{title}</h1>
                            </div>
                            <div>
                                <p className="font-serif text-[14px] sm:text-[20px] font-[300] dark:text-dark-text-primary text-text-primary w-24 sm:w-32 text-center">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col mt-5 mb-15">
                <div className="homeskillbox flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-10 mx-6 lg:mx-15 pt-6 pb-5 px-4 sm:px-10 shadow-glass-shadow dark:shadow-dark-glass-shadow border border-accent dark:border-dark-accent rounded-md mb-5">
                    {tabs.map((tab, i) => {
                        const Icon = tab.icon
                        const isActive = active === tab.name
                            return (
                                <div key={tab.name} className="flex">
                                    <button
                                        onClick={() => setActive(tab.name)}
                                        className={`font-serif text-[12px] sm:text-[15px] cursor-pointer flex gap-1 items-center py-2 px-2 sm:pt-3 sm:pb-3 sm:px-3 rounded-sm transition-all duration-200
                                        ${isActive
                                            ? "bg-glass dark:bg-dark-glass border border-accent dark:border-dark-accent dark:text-dark-text-primary text-text-primary scale-105 shadow-md"
                                            : "text-text-secondary dark:text-dark-text-secondary dark:hover:bg-dark-glass hover:bg-glass hover:text-text-primary dark:hover:text-dark-text-primary"
                                        }`}
                                    >
                                        {Icon && <Icon size={18} className={`${isActive ? "text-text-primary dark:text-dark-text-primary" : "text-accent dark:text-dark-accent"}`} />}
                                        {tab.name}
                                    </button>
                                </div>
                            )
                    })}
                </div>
                <div className="mx-6 lg:mx-16 flex gap-1">
                    <Brain size={22} className="text-accent dark:text-dark-accent" />
                    <h1 className="font-serif text-[16px] sm:text-[19px] font-[500]">Technical <span className="text-accent dark:text-dark-accent">Skills</span></h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mx-6 lg:mx-15">
                    {filtered.map(skill => (
                        <Card key={skill.title} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    )
}