import React, { useEffect, useState } from 'react';
import Country from './Country';
import { getAllCountries } from '../../actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import style from './countries.module.css';

const Countries = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const countries = useSelector(state => state.countries)
    const dispatch = useDispatch();

    let nextPage = () => {
        if(countries.length <= currentPage + 10){
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 10);
    };
    let prevPage = () => {
        if(currentPage < 9) {
            setCurrentPage(0)
        } else setCurrentPage(currentPage - 10);
    };
    const filterC = countries.slice(currentPage, currentPage + 10);

    const pageOne = () => {
        setCurrentPage(0)
    }

    /* useEffect(() => {
        dispatch(getAllCountries())
    },[]); */

    if(currentPage > countries.length){
        pageOne()}
    return (
        <div className={style.fondo}>
            <div className={style.btn}>
                <button onClick={prevPage}>Previous</button>
                {/* <button>{currentPage}</button> */}
                <button onClick={nextPage}>Next</button>
            </div>
            <div className={style.countries}>
                {filterC && filterC.map((e) => (
                    <Country
                        id={e.id}
                        image={e.image}
                        name={e.name}
                        continent={e.continent}
                    />
                ))}
            </div>
        </div>
    )
                
}

export default Countries
