import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './filter.modules.css';

export function Filter(){
    const dispatch = useDispatch();
    const handleChange = event => {

    }

    return(
        <div className = {style.filter}>
            <select className={style.selectContinent} name="select" onChange={handleChange}>
                <optgroup label="Select an a continent">
                    <option value="none">Select one Continent</option>
                    <option value="Americas">Américas</option>
                    <option value="Asia">Asia</option>   
                    <option value="Europe">Europe</option>   
                    <option value="Oceania">Oceanía</option>   
                    <option value="Africa">África</option>
                    <option value="Polar">Polar</option> 
                    <option value="SinContinente">No Continent</option>
                </optgroup>
            </select>
        </div>
    )
}