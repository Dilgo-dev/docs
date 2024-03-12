import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";
import SelectMenu from "../components/Api/SelectMenu/SelectMenu";
import NavBar from "../components/Main/NavBar/NavBar";
import { choice } from "../components/Api/SelectMenu/SelectMenu";
import convertToLink from "../utils/convertToLink";

export default function Api() {
    const navigate = useNavigate();
    const callback = (name: string) => {
        navigate(`/api/${convertToLink(name)}`);
        console.log("Active : ", name);
    };
    const choices: Array<choice> = new Array(
        { name: "Discord", callback},
        { name: "Users", callback},
        { name: "Docs", callback},
        { name: "Email", callback},
        { name: "+ Create more...", callback},
    );

    return (
        <div className={css`
            height: 100%;
            display: flex;
            flex-direction: column;
        `}>
            <NavBar />
            <div className={css`
                display: flex;
                width: 100%;
                height: 100%;
            `}>
                <SelectMenu title="API" choices={choices}/>
            </div>
        </div>
    )
}
