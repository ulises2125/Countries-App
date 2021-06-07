const { Countries } = require('../db')
const axios = require('axios');
const { Country } = require('../models/Country')

async function getAllCountries(req, res){
    try {
        const countriesApi = await axios.get("https://restcountries.eu/rest/v2/all")
        const filterApi = countriesApi.data.map(el => {
            return {
               name: el.name,
               id: el.alpha3Code,
               image: el.flag,
               region: el.region,
               capital: el.capital,
               subregion: el.subregion,
               area: el.area,
               population: el.population
            }
        });
        const createDB = await Country.create(filterApi);
        return res.send(filterApi);
    } catch (error) {
        res.send(error)
    }
};

async function getCountryById(req, res){
    try {

    } catch (error) {
        res.send(error)
    }
};

module.exports = {
    getAllCountries,
    getCountryById
}