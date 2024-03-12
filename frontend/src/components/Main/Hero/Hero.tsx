import { css } from "@emotion/css"
import Text from "./Text"
import Command from "./Command/Command"

export default function Hero() {
    return (
        <div className={css`
            display: flex;
            gap: 25rem;
            padding: 10rem 10rem;
        `}>
            <Text />
            <Command />
        </div>
    )
}
