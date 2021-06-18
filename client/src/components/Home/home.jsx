import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCountries, getCountriesDetail} from '../../actions/actions';
import { Nav } from '../Nav/nav';

function Home() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    /* const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);  */

    useEffect(()=> {
        dispatch(getAllCountries())
    }, [dispatch]);
    console.log(countries)

    /* const indexlastpost = currentPage * countriesPerPage;
    const indexfirstpost = indexlastpost - countriesPerPage
    const currentCountries = countries.slice(indexfirstpost, indexlastpost);  */

    return (
        <div>
            <header>
                <Nav/>
            </header>
            <ul>
                {
                    countries && countries.map(country => ( 
                    <li key={country.id}>
                        <Link onClick={() => dispatch(getCountriesDetail(country.id))}to={`/countries/${country.id}`}>{country.name}</Link>
                        <img src={country.image} alt='No image' style={{height: 100}}/>
                        <h2>{country.continent}</h2>
                    </li>        
                ))}
            </ul>
        </div>
    )
}

export default Home
