import { css } from "@emotion/css"
import { useNavigate } from "react-router-dom"

export default function Title() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    return (
        <h1 className={css`
            font-size: 40px;
            font-weight: 500;
            cursor: pointer;
        `} onClick={handleClick}>
            <span className={css`
                margin-right: .7rem;
            `}>📖</span>Docs
        </h1>
    )
}
