import { whatICanDoItems } from "../../constants";
import { getCircleTransformDegree } from "../../utils/utils";
import styles from "./whatCanIDo.module.css";
import Tooltip from "../../components/Tooltip.tsx";

export default function WhatCanIDo({ visible }: { visible: boolean }) {

    return (
        <div className={`${styles.container} stack items-center relative`} data-visible={visible}>
            <div className={`${styles.bgWrapper} stack items-center`}>
                <img className={`${styles.hexBg} transition duration-2`} src="/hexagon-bg.svg" alt="" />
                <img className={`${styles.hexBorder} absolute-center transition duration-2`} src="/hexagon-border.svg" alt="" />
            </div>
            {whatICanDoItems.map(({title, discription}, index) => <div
                data-degree={getCircleTransformDegree(whatICanDoItems.length, index)}
                style={{ '--degree': `${getCircleTransformDegree(whatICanDoItems.length, index)}deg`, zIndex:'1' } as React.CSSProperties}
                className={styles.item}
                key={index}
            >
                <Tooltip tooltipText={discription}>
                    <div className="text-center font-bold">{title}</div>
                </Tooltip>
            </div>)}
        </div>
    )
}