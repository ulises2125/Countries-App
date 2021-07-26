import React from "react"
import style from "./country.module.css"
import {Link} from "react-router-dom"
const Country = ({image, name, continent, id}) =>{
    return (
            <Link className={style.link} to={`/countries/${id}`}>
        <div className={style.countryContainer}>
            <h3 className={style.name}>{name}</h3>   
            <div className={style.imgContainer}>
                <img className={style.img} src={image} alt="no image" style={{width:180}}/>
            </div>
            <h3 className={style.continent}>{continent}</h3>
        </div></Link>
        
    )
}

export default Country