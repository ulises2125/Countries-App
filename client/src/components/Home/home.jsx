import React, { useEffect } from 'react';
import Search from '../Search/Search';
import Countries from '../Countries/Countries';
import { Nav } from '../Nav/nav';
import { getAllCountries } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './home.module.css'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCountries())
    },[dispatch]);

    const resetHandler = () =>{
        dispatch(getAllCountries())
    }
    return (
        <div className={style.fondo}>
            <Link to='/countries' onClick={() => resetHandler()}>home
            </Link>
            <Nav/>
            <Search/>
            <Countries/> 
        </div>
    )
}

export default Home;