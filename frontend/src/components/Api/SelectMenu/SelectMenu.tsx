import { css } from "@emotion/css";
import { useLocation } from "react-router-dom";
import Choice from "./Choice";
import convertToLink from "../../../utils/convertToLink";

export interface choice {
    name: string;
    callback: (name: string) => void;
}

export interface selectMenuProps {
    title: string;
    choices: Array<choice>;
}

export default function SelectMenu({ title, choices }: selectMenuProps) {
    const location = useLocation();
    const locationSplit = location.pathname.split("/");
    const activeLocation = locationSplit.length === 3 ? locationSplit[locationSplit.length - 1] : null;

    return (
        <div className={css`
            width: 19%;
            border-right: 1px solid var(--outline-color);
            margin: 2rem;
        `}>
            <p className={css`
                font-weight: 600;
                font-size: 20px;
                margin-bottom: 2rem;
            `}>{title}</p>
            <div className={css`
                display: flex;
                flex-direction: column;
                gap: 1rem;
            `}>
                {choices.map((choice, index) => <Choice key={index} name={choice.name} callback={choice.callback} active={activeLocation === convertToLink(choice.name)} />)}
            </div>
        </div>
    )
}
