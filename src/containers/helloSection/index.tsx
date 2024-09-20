import { useEffect, useRef, useState } from "react";
import { BaseSectionProps } from "../../types";
import styles from "./helloSection.module.css";
import ProfileCard from "./profileCard";

type Props = BaseSectionProps & {
    show: boolean
};

const steps = ["card-pic", "card-pic-2", "card-pic-text", "card-border-anim", "hello-enter", "hello-down", "hello-center", "goto-button"] as const

export default function HelloSection({ id, show, goto }: Props) {
    const [activeStep, setActiveStep] = useState(0)
    const timeoutId = useRef<number>()

    useEffect(() => {
        timeoutId.current = setTimeout(() => {
            if (activeStep >= steps.length - 1) {
                clearTimeout(timeoutId.current)
                return;
            }

            const idx = activeStep + 1
            console.log(idx);
            if (idx >= 0 && idx < steps.length)
                setActiveStep(idx)
        }, activeStep == 3 ? 2000 : 1000);
        return () => clearTimeout(timeoutId.current)
    }, [activeStep])

    return (
        <section
            className={`${styles.container} transition stack w-full h-full`}
            id={id} data-show={show} data-step={steps[activeStep]}
        >
            <div className={`${styles.bg} stack-bg w-full h-full`}>
                <div></div>
                <div></div>
            </div>
            <div className={`${styles.content} transition-lg w-full h-full`}>
                <ProfileCard step={!steps[activeStep] || steps[activeStep].startsWith("card-") ? steps[activeStep] : "card"} />

                <div className={`${styles.greet} font-bolder text-center`}>Hello!</div>

                <div className="mx-auto grid-center-child">
                    <button onClick={() => goto("next")} className={`${styles.buttonGoto} flex flex-col bg-blur w-fit mx-auto`}>
                        <img src="/icons/arrow-3-down.svg" alt="" />
                        <img src="/icons/arrow-3-down.svg" alt="" />
                        <img src="/icons/arrow-3-down.svg" alt="" />
                    </button>
                </div>
            </div>
        </section>
    )
}