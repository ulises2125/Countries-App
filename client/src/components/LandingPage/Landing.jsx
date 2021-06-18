import {Link} from 'react-router-dom';
import style from './LandingPage.modules.css';

export default function LandingPage() {
    return (
        <div>
            <h1>App countries</h1>
            <Link to = '/countries'>
                <button className={style.btn}>Home</button>
            </Link>
        </div>
    )
}