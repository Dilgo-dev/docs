import { css } from "@emotion/css"

export default function Arrow() {
    return (
        <div className={css`
            display: flex;
            font-size: 25px;
        `}>
            <p><span className={css`
                color: var(--green-dots-color);
            `}>~</span></p>
            <p>{'>'}</p>
        </div>
    )
}
