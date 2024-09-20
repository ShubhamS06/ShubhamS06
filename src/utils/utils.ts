import { debounce } from "utiljs-pro";

export function isElementVisible(element: Element) {
    if (!element) {
        return false;
    }

    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export const scrollToElement = debounce((element: Element) => { element.scrollIntoView({ behavior: "smooth" }) }, 50)

export const getCircleTransformDegree = (length: number, index: number) => {
    let part = Math.round(360 / length);
    let degree = part * index;
    // this will start from the top
    degree += part * -2;
    return degree + 35;
};
