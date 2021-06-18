import { Link } from 'react-router-dom';
import { Filter } from '../Filter/filter';
import style from './nav.modules.css';
import { Ordenamiento }  from '../Ordenamiento/Ordenamiento';

export function Nav(){
    return (
        <div className={style.total}>
            <ul>
                <Filter/>
                <Ordenamiento/>
            </ul>
        </div>
    )
}