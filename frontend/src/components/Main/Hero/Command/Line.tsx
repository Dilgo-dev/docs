import { useState, useEffect } from "react";
import { css } from "@emotion/css";
import styled from '@emotion/styled'
import Arrow from "./Arrow";

export interface LineProps {
    text: string;
    isVisible: boolean;
}

const Cursor = styled.p`
animation: blink-animation 1s step-end infinite;

@keyframes blink-animation {
    50% {
        opacity: 0;
    }
}
`

export default function Line({ text, isVisible }: LineProps) {
    const [ delayText, setDelayText ] = useState<string>("");
 
    useEffect(() => {
        let index = 0;
        if (isVisible) {
            const interval = setInterval(() => {
                if (index <= text.length) {
                    setDelayText(text.slice(0, index));
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 100);

            return () => clearInterval(interval);
        }
    }, [text, isVisible])

    return (
        <div className={css`
            display: flex;
            align-items: center;
            font-size: 24px;
            font-weight: 500;
            opacity: ${isVisible ? 1 : 0};
            transition: opacity 0.2s ease-in-out;
        `}>
            <div className={css`
                display: flex;
                align-items: center;
                gap: .8rem;
            `}>
                <Arrow />
                <p>{delayText}</p>
            </div>
            {delayText.length !== text.length || text === "" ? <Cursor>|</Cursor> : null}
        </div>
    )
}
