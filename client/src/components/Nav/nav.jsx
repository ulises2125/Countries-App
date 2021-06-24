import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { filterByActivity, filterByContinent, getAllCountries, sortCountryASC, sortCountryCANT_PA, sortCountryCANT_PD, sortCountryDES } from '../../actions/actions';
import { ASC, DES, PASC, PDES } from '../../actionsNames';
import { useSelector, useDispatch } from 'react-redux';
import style from './nav.module.css';

export function Nav(){
    const countries = useSelector(state => state.countries)
    const [activity, setActivity] = useState("")
    const dispatch = useDispatch()

    const handleChange = (event) =>{
        dispatch(filterByContinent(event.target.value))
        
    }

    const handleChangeOrder = (event) =>{
        if(event.target.value === ASC ){
            dispatch(sortCountryASC(countries))
        }
        if(event.target.value === DES){
            dispatch(sortCountryDES(countries))
        }
    }
    
    const handleChangePopulation = (event) =>{
        if(event.target.value === PASC){
            dispatch(sortCountryCANT_PA())
        }
        if(event.target.value === PDES){
            dispatch(sortCountryCANT_PD())
        }
    }

    const inputActivityHandler = (e) =>{
        setActivity(e.target.value)
    }

    const setInputHandler = (e)=>{
        e.preventDefault()
        dispatch(filterByActivity(activity))

    }
    return (
        <div className={style.total}>
            <Link to="/"className={style.link}><p>App Countries</p></Link>
            <div className = {style.filter}>
                <select onChange={handleChange}>
                    <optgroup label="Select a continent">
                        <option >Select one Continent</option>
                        <option value="Americas">Américas</option>
                        <option value="Asia">Asia</option>   
                        <option value="Europe">Europe</option>   
                        <option value="Oceania">Oceanía</option>   
                        <option value="Africa">África</option>
                        <option value="Polar">Polar</option>
                        <option value="none">Borrar</option> 
                    </optgroup>
                </select>
            </div>
            <div className={style.filtersContainer}>
                <select onChange={handleChangeOrder}>
                    <optgroup label="Select an a Order">
                        <option value="none">Alphabetical Order</option>
                        <option value={ASC}>Ascendente</option>
                        <option value={DES}>Descendente</option>
                    </optgroup>
                </select>
                <select onChange={handleChangePopulation}>
                    <optgroup label="Select an a Order">
                        <option>Order by Habitantes</option>
                        <option value={PASC}>Ascendente</option>
                        <option value={PDES}>Descendente</option>
                    </optgroup>
                </select>
                <div className={style.inputActivityContainer}>
                    <label>Activity</label>
                    <form onSubmit={setInputHandler}>
                        <input className={style.inputText} placeholder="find by activity and enter..." type="text" value={activity} onChange={inputActivityHandler}/>
                    </form>
                </div>
                <div className={style.button}>
                    <Link className={style.btna} to="/activities"> Add Activity </Link>
                </div>
            </div>
        </div>
    )
}