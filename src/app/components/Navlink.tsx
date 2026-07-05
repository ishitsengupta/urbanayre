"use client";
import { usePathname } from "next/navigation"
import Link from "next/link"

interface Navlinkprops{
    href: string,
    children: React.ReactNode
}

export default function NavLink({ href, children }:Navlinkprops) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className="nav-link">
      {children}
      <span className={`indicator ${isActive ? "active" : ""}`} />
    </Link>
  )
}