import { css } from "@emotion/css";

export interface DotsProps {
    size: number;
    color: string;
}

export default function Dots({ size, color }: DotsProps) {
    return <div className={css`
        height: ${size}rem;
        width: ${size}rem;
        background-color: ${color};
        border-radius: 50%;
    `}></div>
}
