import { css } from '@emotion/css'
import Title from './Title'
import Links from './Links'
import Login from './Login';

export default function NavBar() {
    const links: Array<string> = new Array(
        "Get started",
        "Api",
        "Ressources",
        "Code"
    );

    return (
        <div className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 2rem 3rem;
            border-bottom: 2px var(--outline-color) solid;
        `}>
            <div className={css`
                display: flex;
                align-items: center;
                gap: 7rem;
            `}>
                <Title />
                <Links links={links}/>
            </div>
            <Login />

        </div>
    )
}
