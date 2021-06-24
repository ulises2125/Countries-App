import React, { useState,useEffect } from 'react';
import Search from '../Search/Search';
import Countries from '../Countries/Countries';
import { Nav } from '../Nav/nav';
import { getAllCountries } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './home.module.css'

const Home = () => {
    const dispatch = useDispatch()
    const countriesFilter = useSelector(state => state.countriesFilter)
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch]);

    const [vista, setVista] = useState({
        countries: true,
        continent: false
    })

    const resetHandler = () =>{
        dispatch(getAllCountries())
        setVista({
            countries: true,
            continent: false
        })
    }
    
    return (
        <div className={style.fondo}>
            <Link className={style.reset} to='/countries' onClick={() => resetHandler()}>Home
            </Link>
            <Nav setVista = {setVista}/>
            <Search/>
            {vista.countries && <Countries countries = {countries}/>} 
            {vista.continent && <Countries countries = {countriesFilter}/>} 
        </div>
    )
}

export default Home;