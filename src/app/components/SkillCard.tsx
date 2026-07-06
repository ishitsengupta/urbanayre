"use client";
import Image from 'next/image';
import { Star, Layers, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes'

interface cardprops{
    icon: string,
    imageAlt: string,
    title: string,
    desc: string,
    about: string,
    level: string,
    color: string,
    num: number,
    prof: string,
    exp: number,
    note: string,
}

export default function SkillCard({icon, imageAlt, title, desc, level, num, prof, exp, about, color, note}:cardprops){
    const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
  const saved = localStorage.getItem('theme')
  if (saved) setTheme(saved)
}, [])

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'
    return(
        <div className="relative w-full max-w-md rounded-2xl dark:border dark:border-dark-accent border border-accent p-8 dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] shadow-[0_8px_32px_rgba(26,26,24,0.05)]" style={{
  background: isDark
    ? 'radial-gradient(circle at 90% -10%, rgba(91,126,193,0.18), transparent 55%), radial-gradient(circle at -10% 110%, rgba(91,126,193,0.13), transparent 55%), #0d1017'
    : 'radial-gradient(circle at 90% -10%, rgba(212,175,55,0.22), transparent 55%), radial-gradient(circle at -10% 110%, rgba(212,175,55,0.16), transparent 55%), #faf7f2'
}}>
      
      {/* icon box */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl dark:bg-dark-glass bg-glass dark:border dark:border-dark-accent border border-accent">
        <Image src={icon} alt={imageAlt} height={60} width={60}></Image>
      </div>

      {/* expert badge */}
      <div className="absolute right-8 top-8 flex items-center gap-2 rounded-full dark:border dark:border-dark-accent border border-accent dark:bg-dark-glass bg-glass px-4 py-1.5">
        <span className="h-2 w-2 rounded-full" style={{background: color}} />
        <span className="text-sm font-serif font-medium dark:text-dark-text-primary text-text-primary">{level}</span>
      </div>

      <h2 className="text-3xl font-bold font-serif dark:text-dark-text-primary text-text-primary">{title}</h2>
      <p className="mt-1 dark:text-dark-accent text-accent font-serif font-medium">{desc}</p>

      <p className="mt-4 text-sm leading-relaxed font-serif dark:text-dark-text-primary text-text-primary">
        {about}
      </p>

      <div className="my-6 h-px w-full dark:bg-dark-text-secondary bg-text-secondary" />

      {/* proficiency bar */}
      <div className="flex items-center justify-between text-sm">
        <span className="dark:text-dark-accent-dark text-accent-dark">Proficiency</span>
        <span className="font-bold dark:text-dark-accent-dark text-accent-dark">{prof}</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full dark:bg-slate bg-white dark:border-[0.5px] border-[0.5px] border-text-secondary">
        <div
          className="h-full rounded-full dark:bg-dark-accent bg-accent"
          style={{ width: prof }}
        />
      </div>

      {/* footer tags */}
      <div className="mt-6 flex items-center gap-3 text-xs dark:text-dark-text-primary text-text-primary">
        <div className="flex items-center gap-1.5">
          <Code2 className="h-10 w-10 dark:text-dark-accent text-accent" />
          Used in {num}+ Projects
        </div>
        <div className="h-4 w-px dark:bg-dark-glass bg-glass" />
        <div className="flex items-center gap-1.5">
          <Layers className="h-10 w-10 dark:text-dark-accent text-accent" />
          {exp}+ Years Experience
        </div>
        <div className="h-4 w-px dark:bg-dark-glass bg-glass" />
        <div className="flex items-center gap-1.5">
          <Star className="h-10 w-10 dark:text-dark-accent text-accent" />
          {note}
        </div>
      </div>
    </div>
        
        
    )
}