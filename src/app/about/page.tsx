"use client";
import { UserRound, UsersRound, Calendar, Lightbulb, CodeXml, Palette, ChartSpline, Target, Cpu, MoveRight, Ellipsis } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function About(){
    const router = useRouter();
    return(
        <div className='flex flex-col mx-15 my-15'>
            <div className='flex gap-1 font-serif'>
                <UserRound size={20} className='font-[500] text-accent dark:text-dark-accent' />
                <h1 className='text-[15px] text-accent dark:text-dark-accent font-[500]'>About Me</h1>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[64px] font-serif font-[600]'>Turning Ideas Into<br />Real <span className='text-accent dark:text-dark-accent'>Digital Experiences</span></h1>
                <p className='font-serif text-text-secondary dark:text-dark-text-secondary text-[18px]'>I&apos;m Ishit, a Full Stack Developer who loves building scalable web applications and beautiful user experience.</p>
            </div>
            {/*some box for like experience in it*/}
            <div className='flex justify-between bg-glass dark:bg-dark-glass border border-accent dark:border-dark-accent rounded-md pt-10 pb-8 max-w-[640px] mt-10'>
                <div className='flex gap-4 ml-10'>
                    <Calendar size={50} className='text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[35px] font-serif text-text-primary dark:text-dark-text-primary'>2+</h1>
                        <p className='text-[13px] font-serif text-text-secondary dark:text-dark-text-secondary'>Years of Experience</p>
                    </div>
                </div>
                <div className='flex gap-4 border-l border-l-accent dark:border-l-dark-accent pl-25 mr-10'>
                    <UsersRound size={50} className='text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[35px] font-serif text-text-primary dark:text-dark-text-primary'>4</h1>
                        <p className='text-[13px] font-serif text-text-secondary dark:text-dark-text-secondary'>Projects Completed</p>
                    </div>
                </div>
            </div>
            {/*For Skills and all*/}
            <div className='flex gap-10 px-10 py-10 bg-glass dark:bg-dark-glass border border-accent dark:border-dark-accent rounded-md mt-10'>
                <div className='flex flex-wrap gap-5 flex-col font-serif'>
                    <p className='text-[15px] font-[500] text-accent dark:text-dark-accent'>What Drives Me</p>
                    <h1 className='text-[30px] font-[500] text-text-primary dark:text-dark-text-primary'>Curiosity. Consistency. <br />Impact.</h1>
                    <p className='text-[15px] font-[300] text-text-secondary dark:text-dark-text-secondary'>I&apos;m constantly learning and exploring new tech domains to build better, faster and more meaningful products.</p>
                    <button onClick={() => router.push('/contacts')} className="group gap-[20px] max-w-[50%] mt-10 flex items-center gap-2 rounded-md bg-accent dark:bg-dark-accent px-6 py-3 text-sm font-medium text-text-primary dark:text-dark-text-primary transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-dark dark:hover:bg-dark-accent-dark active:scale-95 cursor-pointer">
                        Let's Connect
                        <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                </div>
                <div className='grid grid-cols-3 gap-5 font-serif'>
                    <div className='flex flex-col gap-2 border border-accent dark:border-dark-accent rounded-md px-5 py-5'>
                        <Lightbulb size={50} className='text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                        <h1 className='text-[20px] font-[500] text-text-primary dark:text-dark-text-primary'>Problem Solver</h1>
                        <p className='text-[15px] font-[200] text-text-secondary dark:text-dark-text-secondary'>I love solving real world problems with efficient and scalable solutions.</p>
                    </div>
                    <div className='flex flex-col gap-2 border border-accent dark:border-dark-accent rounded-md px-5 py-5'>
                        <CodeXml size={50} className='text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                        <h1 className='text-[20px] font-[500] text-text-primary dark:text-dark-text-primary'>Clean Code</h1>
                        <p className='text-[15px] font-[200] text-text-secondary dark:text-dark-text-secondary'>I write clean, maintainable and well documented code.</p>
                    </div>
                    <div className='flex flex-col gap-2 border border-accent dark:border-dark-accent rounded-md px-5 py-5'>
                        <Palette size={50} className='text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                        <h1 className='text-[20px] font-[500] text-text-primary dark:text-dark-text-primary'>Design Focused</h1>
                        <p className='text-[15px] font-[200] text-text-secondary dark:text-dark-text-secondary'>I care about creating intuitive and beautiful user experience.</p>
                    </div>
                    <div className='flex flex-col gap-2 border border-accent dark:border-dark-accent rounded-md px-5 py-5'>
                        <ChartSpline size={50} className='text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                        <h1 className='text-[20px] font-[500] text-text-primary dark:text-dark-text-primary'>Always Learning</h1>
                        <p className='text-[15px] font-[200] text-text-secondary dark:text-dark-text-secondary'>I&apos;m always exploring new tools, frameworks and tech domains.</p>
                    </div>
                    <div className='flex flex-col gap-2 border border-accent dark:border-dark-accent rounded-md px-5 py-5'>
                        <UsersRound size={50} className='text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                        <h1 className='text-[20px] font-[500] text-text-primary dark:text-dark-text-primary'>Team Player</h1>
                        <p className='text-[15px] font-[200] text-text-secondary dark:text-dark-text-secondary'>I enjoy collaborating and building great things together.</p>
                    </div>
                    <div className='flex flex-col gap-2 border border-accent dark:border-dark-accent rounded-md px-5 py-5'>
                        <Target size={50} className='text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                        <h1 className='text-[20px] font-[500] text-text-primary dark:text-dark-text-primary'>Goal Oriented</h1>
                        <p className='text-[15px] font-[200] text-text-secondary dark:text-dark-text-secondary'>I set clear goals and consistently work towards achieving them.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-10 gap-6 bg-glass dark:bg-dark-glass border border-accent dark:border-dark-accent rounded-md px-10 py-10'>
                <div className='flex gap-3'>
                    <Cpu size={20} className='font-[500] text-accent dark:text-dark-accent' />
                    <h1 className='text-[15px] font-[500] text-accent dark:text-dark-accent font-serif'>Tools and Tech Stack I Love</h1>
                </div>  
                <div className='grid grid-cols-5 gap-10'>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Image src="/react.svg" alt='react' height={50} width={50} />
                        <h1 className='font-serif font-[500] text-[20px]'>React</h1>
                    </div>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Image src="/nextjs.svg" alt='next.js' height={50} width={50} />
                        <h1 className='font-serif font-[500] text-[20px]'>Next.JS</h1>
                    </div>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Image src="/typescript.svg" alt='typescript' height={50} width={50} />
                        <h1 className='font-serif font-[500] text-[20px]'>TypeScript</h1>
                    </div>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Image src="/node.svg" alt='node.js' height={50} width={50} />
                        <h1 className='font-serif font-[500] text-[20px]'>Node.JS</h1>
                    </div>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Image src="/tailwind.svg" alt='tailwind' height={50} width={50} />
                        <h1 className='font-serif font-[500] text-[20px]'>Tailwind</h1>
                    </div>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Image src="/mongodb.svg" alt='MongoDB' height={50} width={50} />
                        <h1 className='font-serif font-[500] text-[20px]'>MongoDB</h1>
                    </div>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Image src="/git.svg" alt='react' height={50} width={50} />
                        <h1 className='font-serif font-[500] text-[20px]'>Git</h1>
                    </div>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Image src="/figma.svg" alt='figma' height={50} width={50} />
                        <h1 className='font-serif font-[500] text-[20px]'>Figma</h1>
                    </div>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Image src="/docker.svg" alt='docker' height={50} width={50} />
                        <h1 className='font-serif font-[500] text-[20px]'>Docker</h1>
                    </div>
                    <div className='flex flex-col gap-4 px-4 py-4 justify-center items-center border border-accent dark:border-dark-accent rounded-md'>
                        <Ellipsis size={50} className='text-accent dark:text-dark-accent' />
                        <h1 className='font-serif font-[500] text-[20px]'>& More</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}