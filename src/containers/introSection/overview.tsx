export default function Overview({ }: {}) {
    return (
        <div className="bg-blur text-justify mx-auto  flex flex-col overviewTextSection" style={{ gap: "1rem", borderRadius: "1rem", padding: "2rem", width: "clamp(240px, 800px, calc(100% - 5rem))", rowGap: "1.2rem", lineHeight: "3rem" }}>
            <p>I am Shubham Sahu, a passionate <b className="animated-text"> Software Engineer</b> with over 3 years of experience in <b className="animated-text">full-stack development</b> specializing in front-end</p>
            <p> My expertise lies in crafting engaging and user-friendly web applications using React.js, Next.js, and Material-UI. I thrive on turning ideas into visually stunning and functional interfaces that deliver seamless user experiences.</p>
            <p>I am always on the lookout for <b className="animated-text">new challenges</b> and opportunities to improve my craft, and I am excited to <b className="animated-text">apply my skills and expertise</b> to new projects.</p>
        </div>
    )
}