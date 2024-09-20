import { user } from "../../constants";
import styles from "./profileCard.module.css";

export default function ProfileCard({ step }: { step: string }) {
    return (
        <div className={`${styles.card} overflow-hidden mx-auto w-full1 h-full1`} data-step={step}>
            <div className={`${styles.bg} transition-md w-full h-full absolute-center`}></div>
            <div className={`${styles.bg2} absolute-center`}></div>
            <img src="/brand-pic.png" alt="" />
            <div className={`${styles.content} overflow-hidden flex flex-col`}>
                <div className={`${styles.name} max-w-full overflow-hidden text-trunc font-base font-bold`}>{user.name}</div>
                <div className={`${styles.role} max-w-full overflow-hidden text-trunc font-half`}>{user.role}</div>
            </div>
        </div>
    )
}