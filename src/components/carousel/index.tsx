import { useEffect, useRef, useState } from "react";
import styles from "./carousel.module.css"
import { scrollToElement } from "../../utils/utils";

type Props = {
    srcs: string[];
    id: string;
    laptopFrame?: boolean
}

export default function Carousel({ id, srcs, laptopFrame }: Props) {
    const [activeViewIndex, setActiveViewIndex] = useState(0)
    const [fullscreen, setFullscreen] = useState(false)
    const viewRef = useRef<HTMLDivElement>(null)
    const isFirstRender = useRef(true)

    useEffect(() => {
        // console.error(new Error().stack);
        // console.log(isFirstRender.current);

        if (isFirstRender.current) {
            // isFirstRender.current = false
            return;
        }

        if (viewRef.current?.children?.[activeViewIndex] instanceof HTMLElement) {
            scrollToElement(viewRef.current.children[activeViewIndex])
            console.log("carousel activeViewIndex:", activeViewIndex);
        }
    }, [activeViewIndex])

    const goto = (back = false) => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        }

        let idx = activeViewIndex
        if (back) idx--
        else idx++

        if (idx >= 0 && idx < srcs.length) {

            setActiveViewIndex(idx)
        } else {
            console.error("unable to change section!");
        }
    }

    return (
        <div id={"carousel-" + id} className={`${styles.carousel}`} data-noframe={!laptopFrame} data-fullscreen={fullscreen}>
            <button className={`${styles.buttonPrev} bg-blur`} onClick={() => goto(true)} disabled={activeViewIndex === 0}>
                <img src="/icons/triangle-left.svg" alt="" />
            </button>

            <div className={`${styles.content} mx-auto`}>
                <button data-fullscreen="show" className={`${styles.buttonBack} flex items-center active-press mx-auto font-lg text-white`}
                    onClick={() => {
                        setFullscreen(false)
                    }}
                >
                    <img src="/icons/triangle-left.svg" alt="" />
                    Go back
                </button>
                <div className={`${styles.frame} mx-auto`}>
                    <img className={`${styles.frameImg}`} src={laptopFrame ? "/Apple Macbook Pro 13_ Space Grey.png" : "/carousel-frame.svg"} alt="" />
                    <div className={`${styles.buttonFSBackdrop} overflow-hidden1`}>
                        <button className={`${styles.buttonFS} flex items-center active-press`}
                            onClick={() => {
                                setFullscreen(true)
                            }}
                        >
                            <img src="/icons/fullscreen.svg" alt="" />
                            View Fullscreen
                        </button>
                    </div>
                    <div ref={viewRef} className={`${styles.view} hide-scrollbar overflow-hidden`}>
                        {srcs.map((src, index) =>
                            <iframe key={src + index} src={src} frameBorder={0}></iframe>
                            // DEV:
                            // <div id={id + "-view--element" + index} className={laptopFrame ? "" : " bg-gray"} key={id + src + index}><img src={src} alt="" /></div>
                        )}
                    </div>
                </div>

                {laptopFrame && <div data-fullscreen="show" className="text-center font-base text-dim">Scroll to view full page</div>}

            </div>

            <button className={`${styles.buttonNext} bg-blur`} onClick={() => goto()} disabled={activeViewIndex === srcs.length - 1}>
                <img src="/icons/triangle-right.svg" alt="triangle" />
            </button>
        </div>
    )
};
