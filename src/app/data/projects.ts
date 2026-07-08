export type Projects = {
    title: string
    category: "Featured" | "Full Stack" | "Open Source" | "Others"
    cat: string[]
    desc: string
    stack: string[]
    features: string[]
    image: string
    imageAlt: string
    Featured: boolean
    demoUrl: string
    githubUrl: string
    stackpic: string[]
}

export const projects: Projects[] = [
    {title: "Devrix",githubUrl: "https://github.com/ishitsengupta/devrix", cat: ["Full Stack", "Open Source", "Featured"], demoUrl: "https://devrizz.netlify.app/", Featured: true ,imageAlt: "Devrix" , category: "Full Stack", desc: "Built With Next.JS and Typescript For a Game Dev Community.", stack: ["Next.JS", "TypeScript", "Tailwind", "HTML"], stackpic: ["/nextjs.svg", "/typescript.svg", "/tailwind.svg", "/html.svg"],features: ["developer portfolio grid showcasing team members and their work.", "built with Next.js and TypeScript for a fast, type-safe frontend.","fully static, no auth, focused purely on showcasing the dev team."], image: "/devrix.png"},
    {title: "Urbanayre",githubUrl: "https://github.com/ishitsengupta/urbanayre", cat: ["Full Stack", "Featured"], demoUrl: "https://urbanayre.xyz/", Featured: true ,imageAlt: "Urbanayre" , category: "Full Stack", desc: "Built With Next.JS and Typescript, It Serves as My Portfolio to Store all of My Projects and Skills.", stack: ["Next.JS", "TypeScript", "Tailwind", "HTML"], stackpic: ["/nextjs.svg", "/typescript.svg", "/tailwind.svg", "/html.svg"],features: ["dark/light mode that actually feels premium", "filterable project showcase", "glassmorphism + Fraunces typography combo"], image: "/portfolio.png"},
    {title: "Technova", githubUrl: "https://github.com/ishitsengupta/Technova",cat: ["Full Stack", "Open Source"], demoUrl: "https://technova-swart.vercel.app/" ,Featured: false ,imageAlt: "Technova" , category: "Full Stack", desc: "Built The Whole Thing in Vanilla HTML/CSS/JS, Zero Frameworks. Fully Responsive.",features: ["clean responsive landing page built with vanilla HTML, CSS, and JavaScript.", "smooth scroll animations and interactive UI sections.", "mobile-first design optimized across screen sizes."], stack: ["HTML", "CSS", "JavaScript"],stackpic: ["/html.svg", "/tailwind.svg", "/javascript.svg"] ,image: "/technova.png"},
    {title: "AeroStore",githubUrl: "https://github.com/ishitsengupta/Aerostore",cat: ["Full Stack", "Open Source"], demoUrl: "https://aerostore-beta.vercel.app/", Featured: false ,imageAlt: "AeroStore" , category: "Full Stack", desc: "E-Commerce Style App Built With React + Vite, Focused on Speed and Smooth UX, Shipped and Live on Vercel.",features: ["product catalog UI built with React and Vite.","clean ecommerce-style browsing experience, deployed on Vercel." ,"fast client-side rendering with Vite's build optimizations." ], stackpic: ["/tailwind.svg", "/react.svg", "/html.svg", "/javascript.svg"], stack: ["Tailwind", "React", "HTML", "JS"], image: "/aerostore.png"},
    
]