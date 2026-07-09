"use client"
import { FolderOpenDot, CodeXml, Box, UsersRound, Calendar } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/app/data/projects';
import { useState } from 'react';
import ProjectCard from '@/app/components/ProjectCard';

const tabs = ["All Projects", "Featured", "Full Stack", "Open Source", "Others"];

export default function Project(){
    const [active, setActive] = useState("All Projects")
        const filtered = active === "All Projects"
        ? projects
        : projects.filter(p => p.cat.includes(active))
        const isActive = active === "All Projects"
        let emptystate = false;
        if(filtered.length === 0) {
            emptystate = true;
        } else {
            emptystate = false
        }
    return(
        
        <div className="flex flex-col mx-15 my-15">
            <div className="flex">
                <div className="flex-col flex">
                    <div className="flex gap-2">
                        <FolderOpenDot size={24} className="text-accent dark:text-dark-accent" />
                        <h1 className="font-serif font-[500] text-accent dark:text-dark-accent font-[20px]">PROJECTS</h1>
                    </div>
                    <div>
                        <h1 className="text-[64px] font-serif text-text-primary dark:text-dark-text-primary font-[600]">Things I&apos;ve Built<br />With <span className="text-accent dark:text-dark-accent">Passion.</span></h1>
                        <p className="text-[20px] font-serif text-text-secondary dark:text-dark-text-secondary font-[400]">A Collection of Projects That Showcase my Skills.</p>
                    </div>
                    <div className="flex font-serif mt-5">
                        <a href="https://github.com/ishitsengupta" target="_blank" className="shadow-glass-shadow dark:shadow-dark-glass-shadow flex gap-3 border border-accent dark:border-dark-accent bg-glass dark:bg-dark-glass rounded-md px-4 py-2 hover:scale-[1.05] cursor-pointer transition-all hover:bg-white/20 duration-200 ease-in">
                            <h1>View Github</h1>
                            <FaGithub size={23} />
                        </a>
                    </div>
                </div>
                {/* box here bruh i keep getting confused */}
                <div className="homeskillbox shadow-glass-shadow dark:shadow-dark-glass-shadow bg-glass dark:bg-dark-glass grid grid-cols-1 ml-auto mr-0 mt-0 mb-auto border border-accent dark:border-dark-accent px-6 py-6 rounded-md justify-between items-center gap-6">
                    <div className="flex">
                        <div className="flex border-r border-accent dark:border-dark-accent pr-8 gap-2">
                            <Box size={50} className="bg-glass-border dark:bg-dark-glass-border mx-[0px] my-[10px] text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md" />
                            <div className="flex flex-col font-serif ml-1">
                                <h1 className="text-[35px] text-text-primary dark:text-dark-text-primary">4</h1>
                                <p className="text-[13px] text-secondary dark:text-dark-text-secondary">Projects Completed</p>
                            </div>
                        </div>
                    
                        <div className="flex px-10">
                            <CodeXml size={50} className="bg-glass-border dark:bg-dark-glass-border mx-[10px] my-[10px] text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md" />
                            <div className="flex flex-col font-serif">
                                <h1 className="text-[35px] text-text-primary dark:text-dark-text-primary">1</h1>
                                <p className="text-[13px] text-secondary dark:text-dark-text-secondary">Personal Project Done</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-t border-accent dark:border-dark-accent pt-6">
                        <div className="flex border-r border-accent dark:border-dark-accent pr-5 gap-2">
                            <UsersRound size={50} className="bg-glass-border dark:bg-dark-glass-border mx-[0px] my-[10px] text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md" />
                            <div className="flex flex-col font-serif ml-1">
                                <h1 className="text-[35px] text-text-primary dark:text-dark-text-primary">3</h1>
                                <p className="text-[13px] text-secondary dark:text-dark-text-secondary">Open Source Projects</p>
                            </div>
                        </div>
                    
                        <div className="flex px-10">
                            <Calendar size={50} className="bg-glass-border dark:bg-dark-glass-border mx-[10px] my-[10px] text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md" />
                            <div className="flex flex-col font-serif">
                                <h1 className="text-[35px] text-text-primary dark:text-dark-text-primary">2+</h1>
                                <p className="text-[13px] text-secondary dark:text-dark-text-secondary">Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex mx-0 mt-10 shadow-glass-shadow dark:shadow-dark-glass-shadow border border-accent dark:border-dark-accent rounded-md justify-between py-5 px-15">
                <button onClick={() => setActive("All Projects")} className={`font-serif text-[15px] cursor-pointer flex gap-1 items-center mr-7 ml-8 pt-3 pb-3 px-3 rounded-md transition-all duration-200 ${active === "All Projects"? "bg-glass shadow-glass-shadow dark:shadow-dark-glass-shadow dark:bg-dark-glass border border-accent dark:border-dark-accent dark:text-dark-text-primary text-text-primary scale-105 shadow-md" : "text-text-secondary dark:text-dark-text-secondary dark:hover:bg-dark-glass hover:bg-glass hover:text-text-primary dark:hover:text-dark-text-primary"}`}> All Projects </button>
                <div className="border-l-[0.5px] border:text-secondary dark:border-dark-text-secondary" />
                <button onClick={() => setActive("Featured")} className={`font-serif text-[15px] cursor-pointer flex gap-1 items-center mr-7 ml-8 pt-3 pb-3 px-3 rounded-md transition-all duration-200 ${active === "Featured"? "bg-glass shadow-glass-shadow dark:shadow-dark-glass-shadow dark:bg-dark-glass border border-accent dark:border-dark-accent dark:text-dark-text-primary text-text-primary scale-105 shadow-md" : "text-text-secondary dark:text-dark-text-secondary dark:hover:bg-dark-glass hover:bg-glass hover:text-text-primary dark:hover:text-dark-text-primary"}`}> Featured </button>
                <div className="border-l-[0.5px] border:text-secondary dark:border-dark-text-secondary" />
                <button onClick={() => setActive("Full Stack")} className={`font-serif text-[15px] cursor-pointer flex gap-1 items-center mr-7 ml-8 pt-3 pb-3 px-3 rounded-md transition-all duration-200 ${active === "Full Stack"? "bg-glass shadow-glass-shadow dark:shadow-dark-glass-shadow dark:bg-dark-glass border border-accent dark:border-dark-accent dark:text-dark-text-primary text-text-primary scale-105 shadow-md" : "text-text-secondary dark:text-dark-text-secondary dark:hover:bg-dark-glass hover:bg-glass hover:text-text-primary dark:hover:text-dark-text-primary"}`}> Full Stack </button>
                <div className="border-l-[0.5px] border:text-secondary dark:border-dark-text-secondary" />
                <button onClick={() => setActive("Open Source")} className={`font-serif text-[15px] cursor-pointer flex gap-1 items-center mr-7 ml-8 pt-3 pb-3 px-3 rounded-md transition-all duration-200 ${active === "Open Source"? "bg-glass shadow-glass-shadow dark:shadow-dark-glass-shadow dark:bg-dark-glass border border-accent dark:border-dark-accent dark:text-dark-text-primary text-text-primary scale-105 shadow-md" : "text-text-secondary dark:text-dark-text-secondary dark:hover:bg-dark-glass hover:bg-glass hover:text-text-primary dark:hover:text-dark-text-primary"}`}> Open Source </button>
                <div className="border-l-[0.5px] border:text-secondary dark:border-dark-text-secondary" />
                <button onClick={() => setActive("Others")} className={`font-serif text-[15px] cursor-pointer flex gap-1 items-center mr-7 ml-8 pt-3 pb-3 px-3 rounded-md transition-all duration-200 ${active === "Others"? "bg-glass shadow-glass-shadow dark:shadow-dark-glass-shadow dark:bg-dark-glass border border-accent dark:border-dark-accent dark:text-dark-text-primary text-text-primary scale-105 shadow-md" : "text-text-secondary dark:text-dark-text-secondary dark:hover:bg-dark-glass hover:bg-glass hover:text-text-primary dark:hover:text-dark-text-primary"}`}> Others </button>
            </div>
            {emptystate && (
                    <div className="flex flex-col justify-center items-center mx-0 my-15 mr-[0]">
                        <h1 className="font-serif text-[64px] text-primary dark:text-dark-text-primary"> <span className="text-accent dark:text-dark-accent">OOPS!</span> Nothing to Show Here</h1>
                        <p className="font-serif text-[25px] text-text-secondary dark:text-dark-text-secondary">do not worry it will be filled by next month for sure!</p>
                    </div>
                )}
            <div className="grid grid-cols-2 gap-5 mt-8">
                
                {filtered.map(projects => (
                    <ProjectCard key={projects.title} {...projects} />
                ))}
            </div>
            
        </div>
    )
}