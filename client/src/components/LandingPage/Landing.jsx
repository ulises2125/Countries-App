import React from "react"
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css';

export default function LandingPage() {
    return (
        <div className={style.landing}>
            <img className={style.img} src="https://cdnmundo1.img.sputniknews.com/img/108319/97/1083199739_0:0:1794:1015_1920x0_80_0_0_6f850c0d454f4cc8ffe5b87488ca6879.jpg" alt="landing"/>
            <h1 className={style.titulo}>Welcome to country app</h1>
            <Link to = '/countries'>
                <button className={style.link}>Enter</button>
            </Link>
        </div>
    )
}