import { useContext, useState } from "react"
import { brandName, navLinks } from "../../constants"
import styles from "./navbar.module.css"
import { SectionContext } from "../../utils/sectionContext"
import { debounce } from "utiljs-pro"

export default function Navbar() {
    const ctx = useContext(SectionContext)
    const [showNavlinks, setShowNavlinks] = useState(false)
    // const [showDialog, setShowDialog] = useState(false)

    const toggleShowNavlinks = debounce(() => setShowNavlinks(!showNavlinks), 200)
    // const toggleShowDialog = debounce(() => setShowDialog(!showDialog), 200)

    return (
        <div className={`${styles.navbar} flex items-center justify-between`}>
            <div className={`${styles.left} flex items-center`}>
                <img  className={`${styles.brandImg} ${styles.brand}`}  src="/shubhamBgr.png" alt="" />
                Welcome to<span className={`${styles.brandname} capitalize`}>{brandName}</span>
            </div>
            <button data-is="toggler" data-toggled={showNavlinks}
                    onClick={toggleShowNavlinks}
                >
                    <img src="/menu.svg" alt="menu icon" />
                </button>
            <div className={`${styles.navManuContent} items-center`} data-show={showNavlinks}>
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
