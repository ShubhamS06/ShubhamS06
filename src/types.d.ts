import { SectionNames } from "./constants"

type BaseSectionProps = {
    isEntering?:boolean
    id: SectionNames
    /** Move to section previus or next */
    goto: (to: "prev" | "next") => void
}