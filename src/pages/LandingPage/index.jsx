import { Description } from "../../components/Description";
import { Header } from "../../components/Header";

import style from './style.module.scss';

export const LandingPage = () => {


    return (
        <>
            <Header />
            <main className={style.container}>
                <Description />
            </main>
        </>
    )
}