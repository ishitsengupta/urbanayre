import NavLink from "./Navlink";

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer mx-2 dark:border-[0.1px] dark:border-[rgba(255,255,255,0.21)] border-[0.1px] border-[rgba(0,0,0,0.21)] rounded-lg">
      <div className="footer-glass">
        <div className="footer-top">
          <p className="footer-eyebrow">Got something in mind?</p>
          <a href="mailto:ishitsengupta@gmail.com" className="footer-headline">
            Let&apos;s build it together
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-copy">© {year} Ishit. All rights reserved.</span>

          <nav className="footer-links">
            <NavLink href="/" children="Home" />
            <NavLink href="/project" children="Work" />
            <NavLink href="/about" children="About" />
            <NavLink href="/contacts" children="Contact" />
          </nav>

          <div className="footer-socials">
            <a href="https://github.com/ishitsengupta" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ishit-sengupta-006505381" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}