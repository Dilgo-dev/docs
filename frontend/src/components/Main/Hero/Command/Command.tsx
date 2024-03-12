import { css } from "@emotion/css"
import Header from "./Header"
import Body from "./Body"

export default function Command() {
    return (
        <div className={css`
            z-index: 10;
            width: 65rem;
            background-color: var(--second-background-color);
            border: 1px solid var(--outline-color);
            border-radius: 1rem;
        `}>
            <Header />
            <Body />
        </div>
    )
}
