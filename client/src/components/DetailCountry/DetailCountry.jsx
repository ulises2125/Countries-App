import { getCountriesDetail } from '../../actions/actions';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './DetailCountry.modules.css';

function DetailCountry(props){
    const dispatch = useDispatch();
    const id = props.match.params.id.toUpperCase();
    const countryDetail = useSelector(state => state.countryDetail)
    useEffect(()=>{
        dispatch(getCountriesDetail(id))
    })
 

    return (        
        <div className={style.back}>
            <header>
                <div>
                    <Link className={style.hola} to="/countries">Home</Link>
                </div>
            </header>
                <div className={style.detail}>           
                    <div className="">{countryDetail?.name}</div>
                    <div className="">Id: {countryDetail?.id}</div>
                    <img src={countryDetail?.image} alt="No image"/>
                    <div className="">Continent: {countryDetail?.continent}</div>
                    <div className="">Capital: {countryDetail?.capital}</div>
                    <div className="">Subregion: {countryDetail?.subregion}</div>
                    <div className="">Area: {countryDetail?.area}</div>
                    <div className="">Population: {countryDetail?.population}</div> 
                    
                </div>
        </div>
        
    ) 
}

export default DetailCountry;