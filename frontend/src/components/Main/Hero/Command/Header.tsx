import { css } from "@emotion/css";
import Dots from "./Dots"

export default function Header() {
    const size: number = 1.1;

    return (
        <div className={css`
            display: flex;
            gap: .7rem;
            padding: .5rem .7rem;
            border-bottom: 1px solid var(--outline-color);
            background-color: transparent;
        `}>
            <Dots size={size} color={"var(--red-dots-color)"}/>
            <Dots size={size} color={"var(--yellow-dots-color)"}/>
            <Dots size={size} color={"var(--green-dots-color)"}/>
        </div>
    )
}
