import { css } from "@emotion/css"

export default function Text() {
    return (
        <div className={css`
        `}>
            <h1 className={css`
                font-size: 110px;
                text-decoration: underline;
            `}>
                Docs.
            </h1>
            <p className={css`
                font-size: 30px;
                color: var(--second-text-color);
            `}>
                Simple documentation of the INFORFI project, Less stress, more success.
            </p>
        </div>
    )
}
