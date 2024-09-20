import { toolsIKnowData } from "../../constants";
import styles from "./toolsIKnow.module.css";

export default function ToolsIKnow({ visible }: { visible: boolean }) {
    return (
        <div className={`${styles.container} flex flex-col`} data-visible={visible}>
            <div className={`${styles.cardGroup} flex flex-wrap justify-center`}>
                {toolsIKnowData.topTools.map(({ name, icon, value, position }) =>
                (<div key={name} className={`${styles.card} flex flex-col items-center`} data-hide={position}>
                    <div className="w-full flex items-center font-25 text-white">
                        <img src={icon} alt="" />
                        {name}
                    </div>
                    <div className="w-full">
                        <div className="range-bg bg-gray w-full">
                            <div className="range bg-primary" style={{ width: value * 10 + "%" }}></div>
                        </div>
                        <div className="w-full flex justify-between text-dim font-thin">
                            <span>1</span>
                            <span>10</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <hr className="w-full text-dim" />
                        <div className="text-center text-dim font-thin">
                            on scale of 1 to 10
                        </div>
                    </div>
                </div>))}
            </div>
            <div className={`${styles.bottomCard} mx-auto flex flex-col text-white text-center font-lg font-bold`} data-hide="down">
                Extras
                <div className="flex justify-evenly">
                    {toolsIKnowData.extraTools.map(({ name, icon }) =>
                    (<div key={name}>
                        <img src={icon} alt="" />
                    </div>)
                    )}
                </div>
            </div>
        </div>
    )
}