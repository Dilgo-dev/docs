import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css"

export default function Login() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login");
    }

    return (
        <button className={css`
            font-size: 1.3rem;
            padding: 1rem 1.8rem;
            border-radius: 3rem;
            border: none;
            background-color: var(--second-text-color);
            color: var(--background-color);
            cursor: pointer;
        `} onClick={handleClick}>
            Login
        </button>
    )
}
