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
            <div className="flex flex-row">
                <div className="flex flex-col mx-15 my-15">
                    <p className="font-serif text-accent dark:text-dark-accent text-[15px] font-[600] mb-[5px]">My Skills</p>
                    <h1 className="font-serif text-text-primary dark:text-dark-text-primary text-[64px] font-[600] mb-[3px]">Tech Stacks & <span className="text-accent dark:text-dark-accent">Skills</span></h1>
                    <p className="font-serif text-text-secondary dark:text-dark-text-secondary font-[300] text-[20px]">Tech Stacks and Skills I Use to Bring my Ideas to Life.</p>
                </div>
                <div className="overflow-hidden flex flex-wrap items-center justify-between rounded-2xl dark:border dark:border-dark-accent border border-accent dark:bg-dark-glass bg-glass p-4 backdrop-blur-[6px] my-15 mr-15 ml-auto">
                    {Skills.map(({ title, desc }, i) => (
                        <div key={title} className={`overflow-hidden flex flex-col items-center gap-2 px-4 py-2 ${i !== 0 ? "border-l border-text-secondary dark:border-l dark:border-dark-text-secondary" : ""}`}>
                            <div className="overflow-hidden flex h-10 w-10 items-center justify-center font-serif text-[30px] text-text-primary dark:text-dark-text-primary">
                                <h1>{title}</h1>
                            </div>
                            <div>
                                <p className="font-serif text-[20px] font-[300] dark:text-dark-text-primary text-text-primary w-32">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col mt-5 mb-15">
                <div className="flex justify-center gap-10 mx-15 pt-6 pb-5 px-10 border border-accent dark:border-dark-accent rounded-lg mb-5">
                    {tabs.map((tab, i) => {
                        const Icon = tab.icon
                        const isActive = active === tab.name
                            return (
                                <div key={tab.name} className={`${i !== 0 ? "border-l border-text-secondary dark:border-l dark:border-dark-text-secondary h-10" : ""} flex`}>
                                    <button
                                        onClick={() => setActive(tab.name)}
                                        className={`font-serif text-[15px] cursor-pointer flex gap-1 items-center mr-7 ml-8 pt-3 pb-3 px-3 rounded-sm transition-all duration-200
                                        ${isActive
                                            ? "bg-glass dark:bg-dark-glass border border-accent dark:border-dark-accent dark:text-dark-text-primary text-text-primary scale-105 shadow-md"
                                            : "text-text-secondary dark:text-dark-text-secondary dark:hover:bg-dark-glass hover:bg-glass hover:text-text-primary dark:hover:text-dark-text-primary"
                                        }`}
                                    >
                                        {Icon && <Icon size={20} className={`${isActive ? "text-text-primary dark:text-dark-text-primary" : "text-accent dark:text-dark-accent"}`} />}
                                        {tab.name}
                                    </button>
                                </div>
                            )
                    })}
                </div>
                <div className="mx-16 flex gap-1">
                    <Brain size={25} className="text-accent dark:text-dark-accent" />
                    <h1 className="font-serif text-[19px] font-[500]">Technical <span className="text-accent dark:text-dark-accent">Skills</span></h1>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 mx-15">
                    {filtered.map(skill => (
                        <Card key={skill.title} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    )
}