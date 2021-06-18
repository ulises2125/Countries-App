import axios from 'axios';
import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRY, GET_ACTIVITY, ASC, DES, PASC, PDES} from '../actionsNames';

export function getAllCountries(){
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/countries')
        dispatch({ type: GET_COUNTRIES, payload: res.data })
    }
}

export function getCountry(name){
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/countries/${name}`)
        dispatch({ type: GET_COUNTRY, payload: res.data })
    }
}

export function getCountriesDetail(id){
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/countries/${id}`)
        dispatch({ type: GET_COUNTRY_DETAIL, payload: res.data })
    }
}

export function getActivity(){
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/countries/activities')
        dispatch({ type: GET_ACTIVITY, payload: res.data })
    }
}

export function sortCountryASC(){
    return {
        type: ASC
    }
}
export function sortCountryDES(){
    return {
        type: DES
    }
}
export function sortCountryCANT_PA(){
    return {
        type: PASC
    }
}
export function sortCountryCANT_PD(){
    return {
        type: PDES
    }
}
