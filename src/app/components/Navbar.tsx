"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./Navlink";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(){
    const [open, setOpen] = useState(false);

    return(
        <div className="sticky top-0 z-999 shadow-glass-shadow dark:shadow-dark-glass-shadow max-w-screen bg-[glass] dark:bg-[rgba(255,255,255,0.06)] rounded-lg border-[rgba(0,0,0,0.21)] border-[0.1px] dark:border-[0.1px] dark:border-[rgba(255,255,255,0.21)] backdrop-blur-[6px] mt-2 mx-2">
            <div className="flex flex-wrap items-center justify-between px-4 py-3 md:px-0 md:py-0">
                <a href="/" className="Navbar-headline">Portfolio</a>

                {/* desktop nav */}
                <div className="hidden md:flex mr-[10%] flex-row gap-[40px] mb-[10px] mt-auto pb-3 font-serif">
                    <NavLink href="/" children="Home" />
                    <NavLink href="/skill" children="Arsenal" />
                    <NavLink href="/project" children="Projects" />
                    <NavLink href="/about" children="About" />
                    <NavLink href="/contacts" children="Contact" />
                </div>
                <div className="hidden md:block mr-[20px] mb-[14px] mt-auto pb-3">
                    <ThemeToggle />
                </div>

                {/* mobile controls */}
                <div className="flex md:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        className="p-1.5 rounded-md border border-accent dark:border-dark-accent cursor-pointer"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* mobile dropdown */}
            {open && (
                <div className="md:hidden flex flex-col gap-1 px-4 pb-4 font-serif border-t border-accent dark:border-dark-accent" onClick={() => setOpen(false)}>
                    <NavLink href="/" children="Home" />
                    <NavLink href="/skill" children="Arsenal" />
                    <NavLink href="/project" children="Projects" />
                    <NavLink href="/about" children="About" />
                    <NavLink href="/contacts" children="Contact" />
                </div>
            )}
        </div>
    )
}