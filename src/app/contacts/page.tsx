"use client";
import { useState, useRef } from 'react'
import { MessageSquare, Mail, MapPin, Send, SendHorizontal, ExternalLink, MoveRight, Loader, ChevronDown, Coffee } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Contacts(){

    const [status, setStatus] = useState('');
    const router = useRouter();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const faqs = [
  { q: 'What type of projects are you available for?', a: 'Web dev, full stack stuff, mostly Next.js/React based projects.', b: 'Minor projects include tauri-dev and electron frameworks for next.js based desktop apps' },
  { q: 'What is your typical response time?', a: 'Usually within 24 hours.', b: 'Wait time can be longer during month ends.' },
  { q: 'Do you work on long term projects?', a: 'Yeah, happy to discuss.', b: 'Although depends on scope' },
];

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
        })

        if (res.ok) {
            setStatus('sent');
            formRef.current?.reset();
        } else {
            setStatus('error');
        }
    }

    return(
        <div className="flex flex-col mx-15 my-15 gap-2">
            <div className="flex gap-2">
                <MessageSquare size={24} className='text-accent dark:text-dark-accent' />
                <p className='font-serif text-[20px] font-[600] text-accent dark:text-dark-accent'>Get In Touch</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-serif font-[600] text-text-primary dark:text-dark-text-primary text-[64px]'>Let&apos;s Create<br />Something <span className='text-accent dark:text-dark-accent'>Amazing</span></h3>
                <p className='font-serif font-[300] text-text-secondary dark:text-dark-text-secondary text-[20px]'>I&apos;m always opens to discussing new oppurtunities, <br />collaborating on exciting projects, or just have a chat.</p>
            </div>
            <div className='flex gap-4 mt-5'>
                <div className='flex gap-3 border border-accent dark:border-dark-accent px-4 py-4 rounded-md shadow-glass-shadow dark:shadow-dark-glass-shadow'>
                    <Mail size={50} className='px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                    <div className='flex flex-col'>
                        <h1 className='font-serif font-[500] text-text-primary dark:text-dark-text-secondary'>Email</h1>
                        <p className='font-serif font-[300] text-text-secondary dark:text-dark-text-secondary'>ishitsengupta@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-3 border border-accent dark:border-dark-accent pl-4 pr-20 py-4 rounded-md shadow-glass-shadow dark:shadow-dark-glass-shadow'>
                    <MapPin size={50} className='px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                    <div className='flex flex-col'>
                        <h1 className='font-serif font-[500] text-text-primary dark:text-dark-text-secondary'>Location</h1>
                        <p className='font-serif font-[300] text-text-secondary dark:text-dark-text-secondary'>Jaipur, India</p>
                    </div>
                </div>
            </div>
            <div className='flex mt-10 max-w-screen gap-5 justify-center '>
                <div className='flex flex-col border border-accent dark:border-dark-accent rounded-md px-8 py-8 shadow-glass-shadow dark:shadow-dark-glass-shadow w-full ml-0 mr-auto '>
                    <div className='flex gap-2'>
                        <Send size={25} className='text-accent dark:text-dark-accent mt-1' />
                        <div className='flex flex-col gap-2 mr-1'>
                            <h1 className='font-serif font-[500] text-[20px] text-text-primary dark:text-dark-text-primary'>Send a message</h1>
                            <p className='font-serif font-[200] text-[12px] text-text-secondary dark:text-dark-text-secondary'>Fill out the form below and i'll get back to you as soon as possible.</p>
                        </div>
                    </div>
                        {status === 'sent' && <div className='flex flex-col gap-5 justify-center items-center my-10'>
                                                  <p className='font-serif text-[25px] font-[500]'>Your message was <span className='text-accent dark:text-dark-accent'>sent</span>,<br />I'll reply as soon as possible.</p>
                                                  <button onClick={() => {setStatus('')}} className="shadow-glass-shadow dark:shadow-dark-glass-shadow group gap-[20px] w-full mt-10 flex justify-center items-center gap-2 rounded-md bg-accent dark:bg-dark-accent px-6 py-3 text-sm font-medium text-text-primary dark:text-dark-text-primary transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-dark dark:hover:bg-dark-accent-dark active:scale-95 cursor-pointer">
                                                        Send New Message
                                                        <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                                  </button>
                                             </div>}
                        
                        {status === 'sending' && <div className='flex flex-col gap-5 justify-center items-center my-10'>
                                                      <Loader size={50} className='text-accent dark:text-dark-accent animate-spin' />
                                                      <h1 className='font-serif text-[30px] text-accent dark:text-dark-accent'>Sending...</h1>
                                             </div> }

                        {status === '' && <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-5'>
                            <div className='flex gap-4 w-full'>
                                <input className='font-serif w-[50%] font-[200] text-[15px] text-text-secondary dark:text-white px-4 py-4 border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' name="firstName" placeholder="First Name" required />
                                <input className='font-serif w-[50%] font-[200] text-[15px] text-text-secondary dark:text-white px-4 py-4 border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' name="lastName" placeholder="Last Name" required />
                            </div>
                            
                            <input className='font-serif font-[200] text-[15px] text-text-secondary dark:text-white px-4 py-4 border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' name="email" type="email" placeholder="Your Email" required />
                            <input className='font-serif font-[200] text-[15px] text-text-secondary dark:text-white px-4 py-4 border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' name="subject" placeholder="Subject" required />
                            <textarea rows={8} className='font-serif font-[200] text-[15px] text-text-secondary dark:text-white px-4 py-4 border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' name="body" placeholder="Message" required />
                            <button type='submit' className="shadow-glass-shadow dark:shadow-dark-glass-shadow group gap-[20px] w-full mt-10 flex justify-center items-center gap-2 rounded-md bg-accent dark:bg-dark-accent px-6 py-3 text-sm font-medium text-text-primary dark:text-dark-text-primary transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-dark dark:hover:bg-dark-accent-dark active:scale-95 cursor-pointer">
                                Send Message
                                <SendHorizontal className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                        </form>}  
                        {status === 'error' && <div className='flex flex-col justify-center items-center my-10'>
                                                  <p className='font-serif text-[20px] font-[500] w-[50%]'>Your message was <span className='text-red-500'>NOT </span>sent</p>
                                                  <p className='font-serif text-[15px] font-[300] w-[50%] text-accent dark:text-dark-accent'>A message related to the issue has been published and the underlying problem would be fixed soon.</p>
                                                  <button onClick={() => {setStatus('')}} className="shadow-glass-shadow dark:shadow-dark-glass-shadow group gap-[20px] w-full mt-10 flex justify-center items-center gap-2 rounded-md bg-accent dark:bg-dark-accent px-6 py-3 text-sm font-medium text-text-primary dark:text-dark-text-primary transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-dark dark:hover:bg-dark-accent-dark active:scale-95 cursor-pointer">
                                                        Try Again
                                                        <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                                  </button>
                                             </div> }
                </div>
                <div className='flex flex-col gap-2 px-8 py-8 border border-accent dark:border-dark-accent rounded-md shadow-glass-shadow dark:shadow-dark-glass-shadow w-[35%] mr-0 ml-auto'>
                    <h1 className='font-serif font-[500] text-[20px] text-text-primary dark:text-dark-text-primary'>Connect with Me</h1>
                    <p className='font-serif font-[200] text-[12px] text-text-secondary dark:text-dark-text-secondary'>Feel free to reach out through any of these platforms</p>
                    <div className='flex mt-5 gap-3 border-b border-b:glass-border dark:border-b-dark-glass-border pb-3'>
                        <FaGithub size={45} className='px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                        <div className='flex flex-col'>
                            <h1 className='font-serif font-[400] text-[20px] text-text-primary dark:text-dark-text-primary'>Github</h1>
                            <p className='font-serif font-[200] text-[15px] text-text-secondary dark:text-dark-text-secondary'>github.com/ishitsengupta</p>
                        </div>
                        <a href="https://github.com/ishitsengupta" target='_blank' className='mr-0 mt-1 ml-auto'><ExternalLink size={18} /></a>
                    </div>
                    <div className='flex mt-5 gap-3 border-b border-b:glass-border dark:border-b-dark-glass-border pb-3'>
                        <FaLinkedin size={45} className='px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                        <div className='flex flex-col'>
                            <h1 className='font-serif font-[400] text-[20px] text-text-primary dark:text-dark-text-primary'>LinkedIn</h1>
                            <p className='font-serif font-[200] text-[15px] text-text-secondary dark:text-dark-text-secondary'>linkedin/in/ishit-sengupta</p>
                        </div>
                        <a href="https://www.linkedin.com/in/ishit-sengupta-006505381/" target='_blank' className='mr-0 mt-1 ml-auto'><ExternalLink size={18} /></a>
                    </div>
                    <div className='flex mt-5 gap-3 border-b border-b:glass-border dark:border-b-dark-glass-border pb-3'>
                        <Mail size={45} className='px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                        <div className='flex flex-col'>
                            <h1 className='font-serif font-[400] text-[20px] text-text-primary dark:text-dark-text-primary'>Gmail</h1>
                            <p className='font-serif font-[200] text-[15px] text-text-secondary dark:text-dark-text-secondary'>ishit.sengupta2007@gmail.com</p>
                        </div>
                        <a href="mailto:ishitsengupta@gmail.com" className='mr-0 mt-1 ml-auto'><ExternalLink size={18} /></a>
                    </div>
                </div>
            </div>
            <div className="relative w-full mx-auto rounded-md mt-10 overflow-hidden border border-accent dark:border-dark-accent bg-glass dark:bg-dark-glass transition-colors duration-300 shadow-glass-shadow dark:shadow-dark-glass-shadow">

                <Image
                    src="/cropped-map-light.svg"
                    alt="map-light"
                    fill
                    className="object-cover dark:opacity-80 opacity-80"
                    priority
                />
 
                <div className="absolute inset-0 bg-gradient-to-r from-accent/50 dark:from-dark-accent/30 via-accent-dark/30 dark:via-dark-accent-dark/20 to-transparent" />
 
                <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 min-h-[220px] max-w-md">
                    <h3 className="text-text-primary dark:text-dark-text-primary text-2xl font-semibold mb-3">
                        Where I'm Based
                    </h3>
                    <p className="text-dark-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed mb-6">
                        I'm currently based in Jaipur, India. But I'm open to work remotely
                        with amazing people anywhere. ✨
                    </p>
                    <a href="https://maps.google.com/?q=Jaipur,Rajasthan,India" target="_blank" rel="noopener noreferrer" className="shadow-glass-shadow dark:shadow-dark-glass-shadow group gap-[15px] w-fit flex justify-center items-center gap-2 rounded-md bg-accent dark:bg-dark-accent px-4 py-2.5 text-sm font-medium text-text-primary dark:text-dark-text-primary transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-dark dark:hover:bg-dark-accent-dark active:scale-95 cursor-pointer">
                        View on Google Maps
                        <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                </div>
 
                <div className="absolute z-10" style={{ left: "75%", top: "58%", transform: "translate(-50%, -50%)" }}>
                    <MapPin size={30} className="rounded-full text-accent-dark dark:text-dark-accent shadow-glass-shadow dark:shadow-dark-glass-shadow" />
                </div>
            </div>
            <div className='flex my-10 gap-5'>
                <div className="flex flex-col gap-5 w-[70%] border border-accent dark:border-dark-accent rounded-md px-8 py-8 bg-glass dark:bg-dark-glass shadow-glass-shadow dark:shadow-dark-glass-shadow">
                    <h1 className="text-xl font-serif text-text-primary dark:text-dark-text-primary">Frequently Asked Questions</h1>
                    {faqs.map((item, i) => (
                        <div key={i} className="border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border shadow-glass-shadow dark:shadow-dark-glass-shadow">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center px-4 py-3 text-left text-text-primary dark:text-dark-text-primary"
                            >
                                <span>{item.q}</span>
                                <ChevronDown 
                                    size={18} 
                                    className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} 
                                />
                            </button>
                            {openIndex === i && (
                                <ul className="px-4 pb-3 text-text-secondary dark:text-dark-text-secondary list-disc list-inside space-y-2">
                                    <li>{item.a}</li>
                                    <li>{item.b}</li>
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex flex-col justify-start px-8 py-8 border border-accent dark:border-dark-accent rounded-md gap-5 bg-glass dark:bg-dark-glass shadow-glass-shadow dark:shadow-dark-glass-shadow'>
                    <Coffee size={50} className='text-accent dark:text-dark-accent px-[10px] py-[10px] border border-accent dark:border-dark-accent rounded-md bg-glass-border dark:bg-dark-glass-border' />
                    <h1 className='font-serif text-[25px] font-[500]'>Let&apos;s build something great.</h1>
                    <p className='font-serif text-[15px] font-[300]'>wheather you have a project in mind or just want to chat, i&apos;d love to hear from you.</p>
                    <a href='mailto:ishitsengupta@gmail.com' className="shadow-glass-shadow dark:shadow-dark-glass-shadow group gap-[20px] w-full mt-10 flex justify-center items-center gap-2 rounded-md bg-accent dark:bg-dark-accent px-6 py-3 text-sm font-medium text-text-primary dark:text-dark-text-primary transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-dark dark:hover:bg-dark-accent-dark active:scale-95 cursor-pointer">
                        Let&apos;s Connect
                        <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    )
}