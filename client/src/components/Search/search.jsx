import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getCountry } from '../../actions/actions';
import style from './search.module.css'


const Search = () => {
    const [state, setState] = useState("");
    const dispatch = useDispatch()
    const inputHandler = (event) =>{
        setState(event.target.value)
    }

    const onClickHandler = () => {
        dispatch(getCountry(state))
    }


    return (
        <div>
            <div className={style.search}>
                <input className={style.inputText} required autoComplete="off" type="text" placeholder="Search by name" name="input" onChange={(e)=>inputHandler(e)}/>
                <button className={style.inputBtn} onClick={onClickHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Search