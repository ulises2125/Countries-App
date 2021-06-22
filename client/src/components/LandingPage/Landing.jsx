import React from "react"
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css';

export default function LandingPage() {
    return (
        <div className={style.landing}>
            <h1>App countries</h1>
            <Link to = '/countries'>
                <button className={style.link}>Enter</button>
            </Link>
        </div>
    )
}