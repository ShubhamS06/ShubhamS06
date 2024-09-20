import { whatICanDoItems } from "../../constants";
import { getCircleTransformDegree } from "../../utils/utils";
import styles from "./whatCanIDo.module.css";

export default function WhatCanIDo({ visible }: { visible: boolean }) {

    return (
        <div className={`${styles.container} stack items-center relative`} data-visible={visible}>
            <div className={`${styles.bgWrapper} stack items-center`}>
                <img className={`${styles.hexBg} transition duration-2`} src="/hexagon-bg.svg" alt="" />
                <img className={`${styles.hexBorder} absolute-center transition duration-2`} src="/hexagon-border.svg" alt="" />
            </div>
            {whatICanDoItems.map((item, index) => <div
                data-degree={getCircleTransformDegree(whatICanDoItems.length, index)}
                style={{ '--degree': `${getCircleTransformDegree(whatICanDoItems.length, index)}deg` } as React.CSSProperties}
                className={styles.item}
                key={index}
            ><div className="text-center font-bold">{item}</div></div>)}
        </div>
    )
}