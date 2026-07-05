import NavLink from "./Navlink";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(){
    return(
        <div className="sticky top-0 z-999 flex flex-row gap-[20px] bg-[glass] dark:bg-[rgba(255,255,255,0.06)] rounded-lg justify-between border-[rgba(0,0,0,0.21)] border-[0.1px] dark:border-[0.1px] dark:border-[rgba(255,255,255,0.21)] backdrop-blur-[6px] mt-2 mx-2">
            <div>
                <a href="/" className="Navbar-headline">Portfolio</a>
            </div>
            <div className="mr-[10%] flex flex-row gap-[40px] mb-[10px] mt-auto pb-3 font-serif ">
                <NavLink href="/" children="Home" />
                <NavLink href="/skill" children="Arsenal" />
                <NavLink href="/project" children="Projects" />
                <NavLink href="/contacts" children="Contact" />
            </div>
            <div className="mr-[20px] mb-[14px] mt-auto pb-3">
                <ThemeToggle />
            </div>    
        </div>
    )
}