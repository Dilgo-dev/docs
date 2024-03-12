import { css } from "@emotion/css";
import { useLocation } from "react-router-dom";
import convertToLink from "../../../utils/convertToLink";

export interface LinkProps {
    link: string;
}

export default function Link({ link }: LinkProps) {
    const convertLink = convertToLink(link);
    const location = useLocation();
    const active = location.pathname.slice(1).split("/")[0] === convertLink;

    console.log(location.pathname.slice(1));
    return (
        <a 
            href={`/${convertLink}`}
            className={css`
                color: var(${active ? "--text-color": "--second-text-color"});
                text-decoration: ${active ? "underline": "none"};
                font-size: 1.6rem;
            `}>
            {link}
        </a>
    );
}
