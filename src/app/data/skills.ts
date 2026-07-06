export type Skill = {
    title: string
    category: "Frontend"|"Backend"|"Database"|"Tools"
    icon: string
    level: string
    imageAlt: string
    desc: string
    prof: string
    about: string
    num: number
    exp: number
    color: "#05ec37d0"|"#eeff00d0"|"#ff0000"
    note: string
}

export const skills: Skill[] = [
    {title: 'React', category: "Frontend", imageAlt: 'react-logo', icon: '/react.svg', desc: 'Javascript Framework', level: 'Intermediate', about: 'Using Reusable UI Components and Making Interactive Frontend Designs.', prof: "60%", num: 3, exp: 1, color: "#eeff00d0", note: 'Getting Better Steadily'},
    {title:'Next.Js', category: "Frontend", imageAlt: 'nextjs-logo', icon: '/nextjs.svg', desc: 'React Framework', level: 'Intermediate', about: 'Better Way to Use React With SSR to Make Webpages Load Faster and SEO Better.', prof: "50%", num: 2, exp: 1, color: "#eeff00d0", note: 'Getting Better Steadily'},
    {title: 'TypeScript',category: "Frontend", imageAlt: 'typescript logo', icon: '/typescript.svg', desc: 'Typed Javascript', level: 'Intermediate', about: 'JavaScript with Type Checks to Avoid Errors at Runtime.', prof: "50%", num: 2, exp: 1, color: "#eeff00d0", note: 'Getting Better Steadily'},
    
    {title: 'Tailwind', category: "Frontend" ,imageAlt: 'tailwind-logo', icon: '/tailwind.svg', desc: 'CSS Framework', level: 'Intermediate', about: 'Utility First CSS Framework For Rapid UI Building', prof: "75%", num: 3, exp: 1, color: "#eeff00d0", note: 'Getting Better Steadily'},
    {title: 'JavaScript', category: "Frontend", imageAlt: 'javascript-logo', icon: '/javascript.svg', desc: 'Programming Language', level: 'Intermediate', about: 'Vanilla JS Used in Web Development Along With HTML and CSS', prof: "60%", num: 3, exp: 2, color: "#eeff00d0", note: 'Getting Better Steadily'},
    {title: 'HTML5', category: "Frontend", imageAlt: 'HTML-logo', icon: '/html.svg', desc: 'Markup Language', level: 'Expert', about: "Markup Language Used to Make Webpages(Like This One) But Does not Includes Styling", prof: "90%", num: 3, exp: 1, color: "#ff0000", note: 'Highly Proficient'},
    
    {title: 'Node.Js', category: "Backend", imageAlt: 'node-logo', icon: '/node.svg', desc: 'Javascript Runtime', level: 'Intermediate', about: 'Runtime Used For Javascript', prof: "60%", num: 3, exp: 2, color: "#eeff00d0", note: 'Getting Better Steadily'},
    {title: 'Python', category: "Backend" ,imageAlt: 'python-logo', icon: '/python.svg', desc: 'Programming Language', level: 'Expert', about: 'General-purpose language with clean syntax, heavy use in AI/ML and backend scripting.', prof: "90%", num: 1, exp: 5, color: "#ff0000", note: 'Highly Proficient'},
    {title: 'Express.Js', category: "Backend", imageAlt: 'Express-logo', icon: '/expressjs.svg', desc: 'Node.Js Framework', level: 'Intermediate', about: 'A Lightweight Node.Js Framework Used to Build Scalable REST APIs and Backend Applications Efficiently.', prof: "60%", num: 0, exp: 1, color: "#eeff00d0", note: 'Getting Better Steadily'},
    
    {title: 'MongoDB', category: "Database", imageAlt: 'mongo-logo', icon: '/mongodb.svg', desc: 'NoSQL Database', level: 'Beginner', about: 'NoSQL DataBase Used to Store Data in a JSON Like Format.', prof: "30%", num: 0, exp: 1, color: "#05ec37d0", note: 'Getting Better Steadily'},
    {title: 'MySQL', category: "Database", imageAlt: 'SQL-logo', icon: '/mysql.svg', desc: 'Structured Database', level: 'Beginner', about: 'Open-Source Relational Database for Scalable Web Applications.', prof: "30%", num: 0, exp: 1, color: "#05ec37d0", note: 'Getting Better Steadily'},
    {title: 'Git', category: "Tools" ,imageAlt: 'git-logo', icon: '/git.svg', desc: 'Version Control', level: 'Expert', about: 'Github Framework, Tracks Changes on Your Repositories.', prof: "95%", num: 3, exp: 2, color: "#ff0000", note: 'Highly Proficient'},

    
    {title: 'Github', category: "Tools" ,imageAlt: 'github-logo', icon: '/github.svg', desc: 'Repo Management', level: 'Expert', about: 'Code Hosting Platform For Version Control and Collaboration.', prof: "95%", num: 3, exp: 2, color: "#ff0000", note: 'Highly Proficient'},
    {title: 'VS-Code', category: "Tools" ,imageAlt: 'vscode-logo', icon: '/vs-code.svg', desc: 'Programming Tool', level: 'Expert', about: 'Lightweight Code Editor For Modern Software Development.', prof: "95%", num: 3, exp: 2, color: "#ff0000", note: 'Highly Proficient'},
    {title: 'Figma', category: "Tools" ,imageAlt: 'figma-logo', icon: '/figma.svg', desc: 'UI Prototyping', level: 'Expert', about: 'Design Tool For Creating User Interfaces and Prototypes.', prof: "95%", num: 3, exp: 2, color: "#ff0000", note: 'Highly Proficient'},
];