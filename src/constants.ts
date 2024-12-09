export const user = {
    name: "Shubham Sahu",
    role: "Software Engineer"
}

export const brandName = "my portfolio"

export const navLinks = [
    { text: "about me", path: "about-me", icon: "/icons/about-me.svg" },
    { text: "designs", path: "designs", icon: "/icons/designs.svg" },
    { text: "case study", path: "case-study", icon: "/icons/experience.svg" },
    { text: "project", path: "project", icon: "/icons/projects.svg" },
    { text: "contact", path: "contact", icon: "/icons/contact.svg" },
] as { text: string; path: SectionNames; icon: string; }[]

export const sectionNames = ["greet", "about-me", "designs", "case-study", "project", "contact"] as const

export type SectionNames = typeof sectionNames[number]

export const toolsIKnowData = {
    toolCatagories: [
        {
            title: "Code Editors and IDEs:",
            topTools: [
                { name: "VS Code", icon: "/toosIcons/vs_code.jpg", value: 9, position: "left", },
                { name: "PyCharm", icon: "/toosIcons/PyCharm_Icon.png", value: 5, position: "right", },
            ]
        },
        {
            title: "Version Control:",
            topTools: [
                { name: "GitLab", icon: "/toosIcons/gitlab_icon.png", value: 8, position: "left" },
                { name: "GitHub", icon: "/toosIcons/gitHub.webp", value: 8, position: "down", isSpin : true },
                { name: "Bitbucket", icon: "/toosIcons/bitbucketIcon.jpg", value: 3, position: "right" },
                { name: "Git", icon: "/toosIcons/iconGit.png", value: 8, position: "down" },
            ]
        },
        {
            title: "Build Tools:",
            topTools: [
                { name: "Webpack", icon: "/toosIcons/webpack_icon.png", value: 3, position: "left" },
               
            ]
        },
        {
            title: "Package Managers:",
            topTools: [
                { name: "Npm", icon: "/toosIcons/npm_logo.png", value: 9, position: "left" },
                { name: "Yarn", icon: "/toosIcons/yarn.webp", value: 8, position: "down" },
                { name: "Pip", icon: "/toosIcons/pipPython.png", value: 5, position: "right" },
                
            ]
        },
        {
            title: "Testing Tools:",
            topTools: [
                { name: "Cypress", icon: "/toosIcons/cypress.jpg", value: 5, position: "left" },
               
            ]
        },
        {
            title: "Debugging Tools:",
            topTools: [
                { name: "Chrome DevTools", icon: "/toosIcons/chromDev.webp", value: 8, position: "left", isSpin : true },
                { name: "Firefox DevTools", icon: "/toosIcons/fireFox.jpg", value: 6, position: "right" },
        
            ]
        },
        {
            title: "Cloud Platforms:",
            topTools: [
                { name: "AWS", icon: "/toosIcons/aws_icon.png", value: 6, position: "left" },
                { name: "Azure", icon: "/toosIcons/azure.jpg", value: 3, position: "right" },
        
            ]
        },
        {
            title: "Containerization and Orchestration:",
            topTools: [
                { name: "Docker", icon: "/toosIcons/docker_icon.webp", value: 6, position: "right" },
                { name: "Kubernetes", icon: "/toosIcons/kubernetes_logo.png", value: 4, position: "left", isSpin : true },
               
            ]
        },
        {
            title: "Database Tools:",
            topTools: [
                { name: "MongoDB Compass", icon: "/toosIcons/mongodb_logo.svg", value: 9, position: "left" },
               
            ]
        },
        {
            title: "Design Tools:",
            topTools: [
                { name: "Figma", icon: "/toosIcons/figma.png", value: 8, position: "right" },
                { name: "Adobe XD", icon: "/toosIcons/adobe_xd.png", value: 5, position: "down" },
                
            ]
        },
        {
            title: "Project Management Tools:",
            topTools: [
                { name: "Jira", icon: "/toosIcons/jira.webp", value: 9, position: "right" },
                { name: "Trello", icon: "/toosIcons/trello.webp", value: 5, position: "left" },
                
            ]
        },
        {
            title: "Communication Tools:",
            topTools: [
                { name: "Google Meet", icon: "/toosIcons/logo_meet.png", value: 9, position: "right" },
                { name: "Microsoft Teams", icon: "/toosIcons/teams.jpg", value: 6, position: "left" },
                
            ]
        },
        {
            title: "Collaboration Tools:",
            topTools: [
                { name: "Google Docs", icon: "/toosIcons/docs.png", value: 8, position: "left" },
                { name: "Microsoft Office 365", icon: "/toosIcons/ms_365.jpg", value: 5, position: "right" },
       
            ]
        },
        {
            title: "Languages:",
            topTools: [
                { name: "HTML", icon: "/toosIcons/html_logo.png", value: 9, position: "left" },
                { name: "CSS", icon: "/toosIcons/css_logo.jpg", value: 9, position: "down" },
                { name: "Java Script", icon: "/toosIcons/js_logo.png", value: 9, position: "right" },
                { name: "Python", icon: "/toosIcons/Python_logo.png", value: 7, position: "left" },
            ]
        },
        {
            title: "Libraries:",
            topTools: [
                { name: "JQuery", icon: "/toosIcons/jQuery.webp", value: 8, position: "left" },
                { name: "Material UI", icon: "/toosIcons/mui_logo.png", value: 8, position: "down" },
                { name: "Bootstrap", icon: "/toosIcons/bootstrap_logo.webp", value: 8, position: "right" },
                { name: "Lodash", icon: "/toosIcons/lodash_logo.png", value: 7, position: "left" },
                { name: "Tailwind Css", icon: "/toosIcons/tailwind_icon.webp", value: 5, position: "down" },
                { name: "SCSS", icon: "/toosIcons/scss_logo.png", value: 7, position: "right" },
       
            ]
        },

    ],
    // topTools: [
    //     { name: "Jira", icon: "/toosIcons/sketch.png", value: 3, position: "right" },
    //     { name: "Figma", icon: "/icons/figma.png", value: 9, position: "left" },
    //     { name: "Adobe XD", icon: "/icons/adobe-xd.png", value: 8, position: "down" },
    //     { name: "Photoshop", icon: "/icons/photoshop.png", value: 7, position: "right" },
    //     { name: "Illustrator", icon: "/icons/illustrator.png", value: 5, position: "left" },
    //     { name: "Sketch", icon: "/icons/sketch.png", value: 3, position: "right" },
    // ],
    extraTools: [
        { name: "Nextjs", icon: "/toosIcons/nextjs_logo.png", value : 9, },
        { name: "React", icon: "/toosIcons/reactLogo.png", value : 8, spin : true },
        { name: "Redux", icon: "/toosIcons/redux_icon.png", value : 7, spin : true },
        { name: "Nodejs", icon: "/toosIcons/nodejs_logo.png", value : 4, },
    ],
}

export const whatICanDoItems = [
    { title : "ServerSide Rendering (SSR)", discription :" Improving SEO and performance by rendering web pages on the server."},
    { title :  "Deployment and Hosting", discription :"Deploying web applications to various platforms like AWS, Azure, Heroku."},
    { title : "Responsive Web Design", discription :"Building websites that adapt to different screen sizes and devices."},
    { title : "Cross-Browser Compatibility", discription :" Ensuring websites work consistently across various browsers."},
    { title : "Progressive Web Apps (PWAs)", discription :" Building web apps that work offline and provide a native-like experience."},
    { title :  "Web Animations", discription :"Creating engaging animations using CSS, JavaScript, or libraries like GSAP."},

    // "UI Design",
    // "UX Design",
    // "Wireframes",
    // "Development Hand-offs",
    // "Prototypes",
    // "Micro Interactions",
]

export const designSectionData = {
    sections: ['landing pages', 'web pages', 'mobile apps'],
    // sections: ['landing pages', 'web pages', 'mobile apps', 'interactions design'],
    carouselSrcs: [
        [
            "/ss/homebazaarWeb.png",
            "/ss/jarvisinvestWeb.png",
            "/ss/evjointsWeb.png",
        ],
        [
            "/ss/Group 157.png",
            "/ss/Group 934.png",
            "/ss/Group 936.png",
            "/ss/Group 935.png",
        ],
        [
            "/ss/Group 987.png",
            "/ss/Scene_2 1.png",
            "/ss/Mockup2 1.png",
            "/ss/Scene_1 1.png",
            "/ss/Repose-Isometric-iPhone-12-All-Colors-Mockup 1.png",
        ]
    ]
}