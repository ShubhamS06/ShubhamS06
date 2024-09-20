export const user = {
    name: "Jayesh Soni",
    role: "UI/UX Designer"
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
    topTools: [
        { name: "Figma", icon: "/icons/figma.png", value: 9, position: "left" },
        { name: "Adobe XD", icon: "/icons/adobe-xd.png", value: 8, position: "down" },
        { name: "Photoshop", icon: "/icons/photoshop.png", value: 7, position: "right" },
        { name: "Illustrator", icon: "/icons/illustrator.png", value: 5, position: "left" },
        { name: "Sketch", icon: "/icons/sketch.png", value: 3, position: "right" },
    ],
    extraTools: [
        { name: "in", icon: "/icons/image 30.png" },
        { name: "Canva", icon: "/icons/image 31.png" },
        { name: "Present", icon: "/icons/image 26.png" },
        { name: "video", icon: "/icons/image 25.png" },
        { name: "Adobe After Effect", icon: "/icons/image 27.png" },
        { name: "Wordpress", icon: "/icons/image 35.png" },
        { name: "MS PowerPoint", icon: "/icons/image 29.png" },
        { name: "MS Word", icon: "/icons/image 36.png" },
    ],
}

export const whatICanDoItems = [
    "UI Design",
    "UX Design",
    "Wireframes",
    "Development Hand-offs",
    "Prototypes",
    "Micro Interactions",
]

export const designSectionData = {
    sections: ['landing pages', 'web pages', 'mobile apps', 'interactions design'],
    carouselSrcs: [
        [
            "/ss/Landing Page.png",
            "/ss/Water World-1 1.png",
            "/ss/MacBook Pro 14_ - 1.png",
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