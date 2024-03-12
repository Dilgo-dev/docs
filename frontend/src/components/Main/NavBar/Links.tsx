import { css } from "@emotion/css"
import Link from "./Link"

export interface LinksProps {
    links: Array<string>
}

export default function Links({ links }: LinksProps) {
    return (
        <div className={css`
            display: flex;
            align-items: center;
            gap: 2rem;
        `}>
            { links.map((link: string, index: number) => 
                <Link key={index} link={link}/>) }
        </div>
    )
}
