import { useEffect, useRef, useState } from 'react'
import './global.css'
import './utility.global.css'
import Navbar from './components/navbar'
import { sectionNames, type SectionNames } from './constants'
import HelloSection from './containers/helloSection'
import IntroSection from './containers/introSection'
import DesignSection from './containers/designSection'
import { SectionContext } from './utils/sectionContext'
import { debounce } from 'utiljs-pro'
import { isElementVisible, scrollToElement } from './utils/utils'

const setSection = debounce((set, val) => set(val), 500)

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionNames>("greet")
  const isFirstRender = useRef(true)

  useEffect(() => {
    console.log("rendered");
  })
  useEffect(() => {
    const pageEl = document.getElementById("page")

    if (!pageEl) return;

    const obs = new IntersectionObserver(onIntersection, { threshold: [0, /* 0.2, 0.5, 0.8,  */1], root: pageEl, rootMargin: "75px" })

      ;[...pageEl.children].forEach(section => {
        if (section instanceof HTMLElement) {
          obs.observe(section)
        }
      })

    return () => {
      obs.disconnect()
    }
  }, [])

  useEffect(() => {
    const el = document.getElementById(activeSection)
    if (el && !isElementVisible(el)) scrollToElement(el)
  }, [activeSection])

  const onIntersection: IntersectionObserverCallback = (ens) => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }


    ens.forEach(en => {
      if (en.intersectionRatio === 1 && en.target.id !== activeSection) {
        console.log(en.target.id, activeSection);
        setSection(setActiveSection, en.target.id as SectionNames)
      }
    })
  }

  const onGoto = (to: "prev" | "next") => {
    let idx = sectionNames.findIndex(n => n === activeSection)
    if (to === "prev") idx--
    else idx++

    if (idx >= 0 && idx < sectionNames.length) {
      setActiveSection(sectionNames[idx])
    } else {
      console.error("unable to change section!");
    }
  }

  return (
    <>
      <SectionContext.Provider value={{ activeSection, setActiveSection }}>
        {activeSection !== "greet" && <div data-is="layout">
          <div className={`bg-2circle stack-bg w-full h-full`}>
            <div></div>
            <div></div>
          </div>
          <Navbar />
          <div data-is="page" id="page">
            <IntroSection id={sectionNames[1]} goto={onGoto} />
            <DesignSection id={sectionNames[2]} goto={onGoto} />
          </div>
        </div>}
        <HelloSection show={activeSection == "greet"} id={sectionNames[0]} goto={onGoto} />
      </SectionContext.Provider>
    </>
  )
}
