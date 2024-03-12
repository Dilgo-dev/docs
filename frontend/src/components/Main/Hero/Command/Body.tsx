import { useState, useEffect } from "react";
import { css } from "@emotion/css";
import Line from "./Line";

export default function Body() {
    const commands: Array<string> = new Array(
        "A cool way to write documention. ✨",
        "Fast and easy 🚀",
        "Api testing made simple 🧪",
        ""
    );
    const [currentCommandIndex, setCurrentCommandIndex] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentCommandIndex((prevIndex) => (prevIndex + 1));
            if (currentCommandIndex === commands.length) return () => clearTimeout(timer);
        }, 4000);

        return () => clearTimeout(timer);
    }, [currentCommandIndex, commands.length]);

    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            height: 90%;
        `}>
            {commands.map(((command, index) => <Line key={index} text={command} isVisible={index <= currentCommandIndex} />))}
        </div>
    )
}
