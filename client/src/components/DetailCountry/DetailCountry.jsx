import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getCountriesDetail } from "../../actions/actions"
import Activity from '../Activity/activity';
import { Link } from 'react-router-dom';

import style from './DetailCountry.module.css'

const DetailCountry = () => {
    const countriesDetail = useSelector(state => state.countriesDetail)
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(getCountriesDetail(id))
    },[dispatch])
    return (
        <div className={style.windowContainer}>
            <div className={style.linkcontainer}>
                <Link className={style.link} to='/countries'>Home</Link>
            </div>
            <div className={style.container}>
                <h5>id: {countriesDetail.id}</h5>
                <h1>Name: {countriesDetail.name}</h1>
                <img src = {countriesDetail.image} alt="no image"/>
                <h3>Continent: {countriesDetail.continent}</h3>
                <h3>Subregion: {countriesDetail.subregion}</h3>
                <h3>Capital: {countriesDetail.capital}</h3>
                <h4>Area: {countriesDetail.area} Km2</h4>
                <h4>Population: {countriesDetail.population}</h4>
                <hr/>
                <Activity countryName={countriesDetail.name} activities={countriesDetail.activities}/>
            </div>
        </div>
    )
}
export default DetailCountry;