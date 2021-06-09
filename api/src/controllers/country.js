const axios = require('axios');
const { Country, Activity } = require('../db')

 async function getAllCountries(req, res){
    try {
        const countriesApi = await axios.get("https://restcountries.eu/rest/v2/all")
        const filterApi = countriesApi.data.map(el => {
            return {
               name: el.name,
               id: el.alpha3Code,
               image: el.flag,
               continent: el.region,
               capital: el.capital,
               subregion: el.subregion,
               area: el.area,
               population: el.population
            }
        });
        filterApi.forEach(async (element) => {
            await Country.findOrCreate({ where:  {
               name: element.name,
               id: element.id,
               image: element.image,
               continent: element.continent,
               capital: element.capital,
               subregion: element.subregion,
               area: element.area,
               population: element.population  
            }})
        });
        return res.send(filterApi);
    } catch (error) {
        res.send(error)
    }
};



async function getCountryById(req, res){
    try {
        const  idPais  = req.params.idPais
        console.log(idPais)
        const country = await Country.findByPk(
            { include: Activity  }
        )
        country ? res.json(country) : res.sendStatus(404)
        
    } catch (error) {
        res.send(error);
    }
} 

module.exports = {
    getAllCountries,
    getCountryById,
}