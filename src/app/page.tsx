"use client";
import { ArrowRight, MessageCircle, Code2, Box, Database, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import SkillCard from './components/SkillCard';
import { projects } from '@/app/data/projects';
import ProjectCard from '@/app/components/ProjectCard';

export default function Home(){
    const skills = [
      { icon: Code2, title: "Frontend", desc: "React, Next.js, Tailwind CSS" },
      { icon: Box, title: "Backend", desc: "Node.js, Express, MongoDB" },
      { icon: Database, title: "Database", desc: "MongoDB, PostgreSQL" },
      { icon: Wrench, title: "Tools", desc: "Git, VS Code, Figma" },
    ];
    const router = useRouter();
    const beginner = "#05ec37d0";
    const mediocre = "#eeff00d0";
    const expert = "#ff0000";
    const active = "Featured";
    const filtered = active === "Featured"? projects.filter(p => p.cat.includes("Featured")) : projects.filter(p => p.cat.includes("Featured"))
    const isActive = active === "Featured"
    let emptystate = false;
    if(filtered.length === 0) {
        emptystate = true;
    } else {
        emptystate = false
    }
    return(
        <div className='flex flex-col'>
            <div className="flex flex-row">
            <div className="flex flex-col px-15 py-5 gap-[15px]">
                <div className="homeskillbox w-max flex items-center gap-2 rounded-full dark:border dark:border-dark-accent border border-accent shadow-glass-shadow dark:shadow-dark-glass-shadow dark:bg-dark-glass bg-glass px-4 py-1.5">
                  <span className="h-2 w-2 rounded-full" style={{background: beginner}} />
                  <span className="text-sm font-serif font-medium dark:text-dark-text-primary text-text-primary">Under Construction</span>
                </div>
                <h1 className="introtext">Hi, I&apos;m <span className="text-[#c19a5b] dark:text-[#5b7ec1]">Ishit</span> <p>Full Stack Developer</p></h1>
                <p className="introtext1">On a mission to learn many different frameworks and build projects on it</p>
                <div className='flex flex-row gap-[20px] mt-[10px]'>
                    <button onClick={() => router.push('/project')} className="shadow-glass-shadow dark:shadow-dark-glass-shadow group flex items-center gap-2 rounded-lg bg-[#c19a5b] dark:bg-[#5b7ec1] px-6 py-3 text-sm font-medium text-text-primary dark:text-[#f2f0eb] transition-transform duration-200 hover:scale-[1.03] hover:bg-[#c19a5b] dark:hover:bg-[#3e6ba4] active:scale-95 cursor-pointer">
                        View My Work
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                    <button onClick={() => router.push('/contacts')} className="shadow-glass-shadow dark:shadow-dark-glass-shadow flex items-center gap-2 rounded-lg dark:border dark:border-dark-text-primary border border-text-primary dark:bg-slate/5 bg-white/5  px-6 py-3 text-sm font-medium dark:text-dark-text-primary text-text-primary transition-all duration-200 dark:hover:bg-slate/10 hover:bg-white/10 hover:scale-[1.03] cursor-pointer active:scale-95">
                        Contact Me
                        <MessageCircle className="h-4 w-4" />
                    </button>
                </div>
            </div>
            <div>
                
            </div>
            </div>
            <div className="overflow-hidden items-center rounded-md shadow-glass-shadow dark:shadow-dark-glass-shadow justify-center dark:bg-dark-glass bg-glass mx-15 mt-[50px] mb-[20px] max-w-full max-h-full">
      

      <div className="homeskillbox overflow-hidden flex flex-wrap items-center justify-between rounded-md border dark:border-dark-accent  border-accent dark:bg-dark-glass bg-glass p-4 backdrop-blur-[6px]">
        {skills.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className={`overflow-hidden flex items-center gap-3 px-4 py-2 ${
              i !== 0 ? "border-l border-accent-dark dark:border-l dark:border-dark-accent-dark" : ""
            }`}
          >
            <div className="overflow-hidden flex h-10 w-10 items-center justify-center rounded-md dark:bg-dark-glass bg-glass dark:border dark:border-dark-accent border border-accent">
              <Icon className="h-4 w-4 dark:text-dark-accent text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium dark:text-dark-text-primary text-text-primary">{title}</p>
              <p className="text-xs dark:text-dark-text-primary text-text-primary">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-col shadow-glass-shadow dark:shadow-dark-glass-shadow dark:bg-dark-glass bg-glass rounded-md dark:border-[1px] border-[1px] dark:border-dark-accent border-accent mb-[50px] mt-[50px] mx-15 overflow-hidden max-w-full max-h-full'>
        <div className='flex flex-col mx-8 my-8 overflow-hidden'>
            <p className='text-[15px] font-[500] dark:text-dark-accent-dark text-accent-dark tracking-[1px] font-serif italic mb-2'>Skills</p>
            <h1 className='text-[35px] font-[700] font-serif tracking-[1px] mb-1'><span className='dark:text-dark-accent text-accent'>Tech</span> Stack I Work With</h1>
            <p className='text-[12px] font-[500] dark:text-dark-secondary text-text-secondary tracking-[1px] font-serif italic mb-2'>My Goto stack for full stack web development</p>
        </div>
        <div className='grid grid-cols-3 mx-8 my-8 gap-[15px]'>
            <SkillCard title='React' imageAlt='react-logo' icon='/react.svg' desc='Javascript Framework' level='Intermediate' about='Using Reusable UI Components and Making Interactive Frontend Designs.' prof="60%" num={3} exp={1} color={mediocre} note='Getting Better Steadily' />
            <SkillCard title='Next.Js' imageAlt='nextjs-logo' icon='/nextjs.svg' desc='React Framework' level='Intermediate' about='Better Way to Use React With SSR to Make Webpages Load Faster and SEO Better.' prof="50%" num={2} exp={1} color={mediocre} note='Getting Better Steadily' />
            <SkillCard title='TypeScript' imageAlt='typescript logo' icon='/typescript.svg' desc='Typed Javascript' level='Intermediate' about='JavaScript with Type Checks to Avoid Errors at Runtime.' prof="50%" num={2} exp={1} color={mediocre} note='Getting Better Steadily' />
            <SkillCard title='Node.Js' imageAlt='node-logo' icon='/node.svg' desc='Javascript Runtime' level='Intermediate' about='Runtime Used For Javascript' prof="60%" num={3} exp={2} color={mediocre} note='Getting Better Steadily' />
            <SkillCard title='Python' imageAlt='python-logo' icon='/python.svg' desc='Programming Language' level='Expert' about='General-purpose language with clean syntax, heavy use in AI/ML and backend scripting.' prof="90%" num={1} exp={5} color={expert} note='Highly Proficient' />
            <SkillCard title='Tailwind' imageAlt='tailwind-logo' icon='/tailwind.svg' desc='CSS Framework' level='Intermediate' about='Utility First CSS Framework For Rapid UI Building' prof="75%" num={3} exp={1} color={mediocre} note='Getting Better Steadily' />
            <SkillCard title='JavaScript' imageAlt='javascript-logo' icon='/javascript.svg' desc='Programming Language' level='Intermediate' about='Vanilla JS Used in Web Development Along With HTML and CSS' prof="60%" num={3} exp={2} color={mediocre} note='Getting Better Steadily' />
            <SkillCard title='MongoDB' imageAlt='mongo-logo' icon='/mongodb.svg' desc='NoSQL Database' level='Beginner' about='NoSQL DataBase Used to Store Data in a JSON Like Format.' prof="30%" num={0} exp={1} color={beginner} note='Getting Better Steadily' />
            <SkillCard title='Git' imageAlt='git-logo' icon='/git.svg' desc='Version Control' level='Expert' about='Github Framework, Tracks Changes on Your Repositories.' prof="95%" num={3} exp={2} color={expert} note='Highly Proficient' />
        </div>
        <div className='justify-center items-center my-10 mx-auto h-auto w-auto'>
            <button onClick={() => router.push('/skill')} className="shadow-glass-shadow dark:shadow-dark-glass-shadow group flex items-center gap-2 rounded-lg dark:bg-dark-accent bg-[#c19a5b] px-6 py-3 text-sm font-medium dark:text-dark-text-primary text-text-primary transition-transform duration-200 hover:scale-[1.03] hover:bg-[#c19a5b] dark:hover:bg-dark-accent-dark active:scale-95 cursor-pointer">
                        View All Skills
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
        </div>
    </div>
    <div className="flex flex-col mb-[50px] mx-15 shadow-glass-shadow dark:shadow-dark-glass-shadow border border-accent dark:border-dark-accent rounded-md px-8 py-8">
      <p className='text-[15px] font-[500] dark:text-dark-accent-dark text-accent-dark tracking-[1px] font-serif italic mb-2'>Featured Projects</p>
      <h1 className='text-[35px] font-[700] font-serif tracking-[1px]'><span className='dark:text-dark-accent text-accent'>Latest</span> Projects Built by Me</h1>
      <div className="grid grid-cols-2 gap-5 mt-10 mb-10">
        {filtered.map(projects => (
           <ProjectCard key={projects.title} {...projects} />
        ))}
      </div>
      <div className='justify-center items-center my-10 mx-auto h-auto w-auto'>
            <button onClick={() => router.push('/project')} className="shadow-glass-shadow dark:shadow-dark-glass-shadow group flex items-center gap-2 rounded-lg dark:bg-dark-accent bg-[#c19a5b] px-6 py-3 text-sm font-medium dark:text-dark-text-primary text-text-primary transition-transform duration-200 hover:scale-[1.03] hover:bg-[#c19a5b] dark:hover:bg-dark-accent-dark active:scale-95 cursor-pointer">
                        View All Projects
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
        </div>
    </div>
    </div>
        
        
    )
}