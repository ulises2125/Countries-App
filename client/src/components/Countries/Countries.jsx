import React, { useState } from 'react';
import Country from './Country';
import style from './countries.module.css';

const Countries = ({countries}) => {
    const [currentPage, setCurrentPage] = useState(0);

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

    if(currentPage > countries.length){
        pageOne()}
        
    return (
        <div className={style.fondo}>
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
            <div className={style.btn}>
                {currentPage !== 0 ? <button className={style.btn1} onClick={prevPage}>&#11164;</button> : <div></div> }
                {currentPage !== 240 ? <button className={style.btn2} onClick={nextPage}>&#11166;</button> : <div></div> }
            </div>
        </div>
    )
                
}

export default Countries
