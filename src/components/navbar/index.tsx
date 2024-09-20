import { useContext } from "react"
import { brandName, navLinks } from "../../constants"
import styles from "./navbar.module.css"
import { SectionContext } from "../../utils/sectionContext"

export default function Navbar() {
    const ctx = useContext(SectionContext)

    return (
        <div className={`${styles.navbar} flex items-center justify-between`}>
            <div className={`${styles.left} flex items-center`}>
                <img className={styles.brand} src="/brand-pic.png" alt="" />
                Welcome to<span className={`${styles.brandname} capitalize`}>{brandName}</span>
            </div>
            <div className={`${styles.right} flex items-center`}>
                {navLinks.map(({ text, path, icon }) =>
                    <a
                        className={`${styles.navLink} flex flex-col items-center cursor-pointer`}
                        onClick={() => {
                            ctx.setActiveSection(path)
                        }}
                        data-active={path === ctx.activeSection} key={text}>
                        <img src={icon} alt="" />
                        <span className="capitalize">{text}</span>
                    </a>)}
            </div>
        </div>
    )
};
