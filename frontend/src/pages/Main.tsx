import Hero from "../components/Main/Hero/Hero"
import NavBar from "../components/Main/NavBar/NavBar"
import { css } from "@emotion/css"
import background from "../assets/background.svg"

export default function Main() {
    return (
        <div className={css`
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `}>
            <div className={css`
                display: flex;
                flex-direction: column; 
            `}>
                <NavBar />
                <Hero />
            </div>
            <img src={background} />
        </div>
    )
}
