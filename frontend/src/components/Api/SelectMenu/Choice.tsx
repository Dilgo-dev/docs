import { css } from "@emotion/css";
import { choice } from "./SelectMenu"

export interface choiceProps extends choice {
    active: boolean;
}

export default function Choice({ name, callback, active }: choiceProps) {
    const handleClick = () => {
        callback(name);
    };

    return (
        <div onClick={handleClick} className={css`
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 1rem;
            margin-right: 2rem;
            gap: .6rem;
            font-weight: 600;
            font-size: 20px;
            border-radius: .5rem;
            background-color: ${active ? "var(--second-background-color)" : "transparent"}
        `}>
            {active ? <p>{'>'}</p> : null}
            <p className={css`
                color: ${active ? "var(--text-color)" : "var(--second-text-color)"}
            `}>{name}</p>
        </div>
    )
}
