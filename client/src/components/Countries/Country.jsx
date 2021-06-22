import React from "react"
import style from "./country.module.css"
import {Link} from "react-router-dom"
const Country = ({image, name, continent, id}) =>{
    return (
            <Link className={style.link} to={`/countries/${id}`}>
        <div className={style.countryContainer}>
            <h3>{name}</h3>   
            <div className={style.imgContainer}>
                <img src={image} alt="no image" style={{height: 100}}/>
            </div>
            <h3>{continent}</h3>
        </div></Link>
        
    )
}

export default Country