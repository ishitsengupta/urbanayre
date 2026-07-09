"use client"
import { Star, CodeXml, ExternalLink, ArrowRight, Layers, Check } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface ProjectCardProps {
  title: string;
  category: "Featured" | "Full Stack" | "Open Source" | "Others";
  desc: string;
  stack: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  Featured: boolean;
  image: string;
  stackpic: string[];
}

export default function ProjectCard({
  image,  
  title,
  category,
  desc,
  stack,
  features,
  demoUrl,
  githubUrl,
  Featured,
  stackpic,
}: ProjectCardProps) {
    const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
  const saved = localStorage.getItem('theme')
  if (saved) setTheme(saved)
}, [])

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'
  return (
    <div className="max-w-[680px] shadow-glass-shadow dark:shadow-dark-glass-shadow border border-accent dark:border-dark-accent rounded-md px-8 py-7 font-serif" style={{
  background: isDark
    ? 'radial-gradient(circle at 90% -10%, rgba(91,126,193,0.18), transparent 55%), radial-gradient(circle at -10% 110%, rgba(91,126,193,0.13), transparent 55%), #0d1017'
    : 'radial-gradient(circle at 90% -10%, rgba(212,175,55,0.22), transparent 55%), radial-gradient(circle at -10% 110%, rgba(212,175,55,0.16), transparent 55%), #faf7f2'
}}>
      <div className="flex justify-between items-center mb-5">
  {Featured && (
    <div className="flex items-center justify-between w-full">
      <div className="inline-flex items-center gap-1.5 bg-accent/10 dark:bg-dark-accent/10 text-text-primary dark:text-dark-text-primary text-[12px] px-3 py-1 rounded-full border border-accent/30 dark:border-dark-accent/30">
        <Star size={13} className="text-accent dark:text-dark-accent" />
        Featured project
      </div>
      <div className="w-[34px] h-[34px] rounded-lg border border-accent dark:border-dark-accent flex items-center justify-center text-accent dark:text-dark-accent">
        <CodeXml size={16} />
      </div>
    </div>
  )}
</div>
      <div className="relative aspect-video rounded-md overflow-hidden border border-accent dark:border-dark-accent mb-5">
            <Image src={image} alt={title} sizes="auto" fill className="object-cover" />
      </div>
      <h1 className="text-[26px] font-[500] text-text-primary dark:text-dark-text-primary mb-1">{title}</h1>
      <p className="text-[14px] text-accent dark:text-dark-accent mb-3">{category}</p>
      <p className="text-[14px] text-text-secondary dark:text-dark-text-secondary leading-[1.7] mb-5">{desc}</p>
      

      <div className="border-t border-accent dark:border-dark-accent pt-4 mb-4">
        <p className="text-[13px] font-[500] text-text-primary dark:text-dark-text-primary flex items-center gap-1.5 mb-2.5">
          <Layers size={14} className="text-accent dark:text-dark-accent" />
          Tech stack
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, i) => (
            <span
              key={tech}
              className="text-[12px] flex flex-row gap-1 text-text-secondary dark:text-dark-text-secondary bg-white/5 border border-accent dark:border-dark-accent px-2.5 py-1 rounded-md"
            > 
              <Image src={stackpic[i]} height={14} width={14} alt="." />
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-accent dark:border-dark-accent pt-4 mb-5">
        <p className="text-[13px] font-[500] text-text-primary dark:text-dark-text-primary flex items-center gap-1.5 mb-2.5">
          <Check size={14} className="text-accent dark:text-dark-accent" />
          Key features
        </p>
        <ul className="space-y-1.5">
          {features.map((feature) => (
            <li key={feature} className="text-[13px] text-text-secondary dark:text-dark-text-secondary flex gap-2">
              <span className="text-accent dark:text-dark-accent">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center border-t border-accent dark:border-dark-accent pt-4">
        <div className="flex gap-4">
          {demoUrl && (
            <a href={demoUrl} target="_blank" className="text-[13px] text-text-secondary dark:text-dark-text-secondary flex items-center gap-1.5 hover:text-accent dark:hover:text-dark-accent transition-colors">
              <ExternalLink size={14} />
              Live demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" className="text-[13px] text-text-secondary dark:text-dark-text-secondary flex items-center gap-1.5 hover:text-accent dark:hover:text-dark-accent transition-colors">
              <FaGithub size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}