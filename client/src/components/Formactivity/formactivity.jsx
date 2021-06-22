import React, { useState, useEffect } from 'react';
import { connectAdvanced, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getActivity, getAllCountries, postActivity } from '../../actions/actions';
import style from './formactivity.module.css';

const FromActivity = () => {
    const countries = useSelector(state => state.countries)
    const dispatch = useDispatch()

    const [formvalidate, setFormValidate] = useState(false)

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: []
    })  

    const handleActivity = (e) => {
        setFormValidate(false)
        e.preventDefault()
        if (e.target.name !== "country" && e.target.name !== "difficulty") {
            setActivity({
                ...activity,
                [e.target.name]: e.target.value
            }
            )
        }
        else if (e.target.name === "difficulty") {
            setActivity({
                ...activity,
                [e.target.name]: e.target.value
            })
        }
        else {
            setActivity({
                ...activity,
                [e.target.name]: activity[e.target.name].concat(e.target.value)
            })

        }

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setFormValidate(true)
        console.log(activity, "Estado")
        dispatch(postActivity(activity))
    }
    return (
        <div className={style.totalform}>
            <div className={style.similNavbar}>
                <div >
                    <Link className={style.volver} to='/countries'> GO HOME </Link>
                </div>
                <div className={style.titulo}>Create a new activity</div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={style.aMano}>
                    <div className={style.inputName}>
                        <input className={style.dur} placeholder="Name" name="name" onChange={handleActivity} value={activity.name}></input>
                    </div>
                    <div className={style.inputDuration}>
                        <input className={style.dur} placeholder="Duration(in minutes)" name="duration" onChange={handleActivity} value={activity.duration}></input>
                    </div>
                    <div className={style.selectDifficulty}>
                        <select className={style.difficulty}name="difficulty" onChange={handleActivity}>
                            <option>Difficulty level</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className={style.selectSeasson}>
                        <select className={style.season} onChange={handleActivity} name="season">
                            <option>Seasson...</option>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                </div>

                <div>
                    <select required className={style.multiSelect} onChange={handleActivity} name="country" id="countries" multiple>
                        {
                            countries?.map(country => {
                                return (
                                    <option key={country.id} value={(country.id)}>{country.name}</option>
                                )
                            })
                        }

                    </select>
                </div>
                <div >
                    {<input className={style.butonAct} type="submit" />}
                </div>
                {
                    formvalidate ? <div className={style.confirmacion}>The activity was created successfully</div> : null
                }
            </form>
        </div>
    )
}

export default FromActivity;