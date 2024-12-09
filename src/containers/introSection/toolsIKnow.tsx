import { useEffect, useRef } from "react";
import { toolsIKnowData } from "../../constants";
import styles from "./toolsIKnow.module.css";

export default function ToolsIKnow({ visible }: { visible: boolean }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLElement;
                    if (entry.isIntersecting) {
                        // Trigger animation by changing `data-hide`
                        target.dataset.hide = "visible";
                    } else {
                        // Reset animation
                        target.dataset.hide = "hidden";
                    }
                });
            },
            {
                root: null, // Observe within the viewport
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        const elements = containerRef.current?.querySelectorAll("[data-hide]");
        elements?.forEach((el) => observer.observe(el));

        return () => {
            // Cleanup observer
            elements?.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div
            className={`${styles.container} flex flex-col`}
            ref={containerRef}
            style={{ overflow: "auto", maxHeight: "80vh" }}
            data-visible={visible}
        >
            <div
                className={`${styles.bottomCard} mx-auto flex flex-col text-white text-center overviewTextSection font-bold`}
                data-hide="down"
            >
                <span className="text-primary">Technologies I Know</span>
                <div className="flex justify-evenly">
                    {toolsIKnowData.extraTools.map(({ name, icon, value, spin = false }) => (
                        <div
                            className="flex justify-evenly flex-col"
                            style={{ gap: "20px" }}
                            key={name}
                        >
                            <div className="tech_logos">
                                <img src={icon} className={spin ? "spin_logo" : ""} alt={name} />
                            </div>
                            <div className="w-full">
                                <div className="range-bg bg-gray w-full">
                                    <div
                                        className="range bg-primary"
                                        style={{ width: value * 10 + "%" }}
                                    ></div>
                                </div>
                                <div className="w-full flex justify-between">{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {toolsIKnowData.toolCatagories.map(({ title, topTools }, index) => (
                <div
                    key={index}
                    className={`${styles.cardGroup} flex flex-wrap justify-center`}
                >
                    <div
                        className={`${styles.bottomCard} titleBoxGhost text-white overviewTextSection font-bold`}
                        data-hide="left"
                    >
                        {index + 1}. {") "}{" "}
                        <span className="text-primary">{title}</span>
                        <div className="containerGhost">
                            <div className="ghost">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    {topTools.map(({ name, icon, value, position, isSpin = false }) => (
                        <div
                            key={name}
                            className={`${styles.card} flex flex-col items-center`}
                            data-hide={position}
                        >
                            <div
                                className="w-full flex items-center font-25 text-white"
                                style={{ minHeight: "15vh" }}
                            >
                                <div className={styles.toolsImg}>
                                    <img
                                        src={icon}
                                        alt={name}
                                        className={isSpin ? "spin_logo" : ""}
                                    />
                                </div>
                                {name}
                            </div>
                            <div className="w-full">
                                <div className="range-bg bg-gray w-full">
                                    <div
                                        className="range bg-primary"
                                        style={{ width: value * 10 + "%" }}
                                    ></div>
                                </div>
                                <div className="w-full flex justify-between text-dim font-thin">
                                    <span>1</span>
                                    <span>10</span>
                                </div>
                            </div>
                            <div className="w-full">
                                <hr className="w-full text-dim" />
                                <div className="text-center text-dim font-thin">
                                    On scale of 1 to 10
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
