const axios = require('axios');
const { Op } = require('sequelize');
const { Country, Activity } = require('../db')

 async function getAllCountries(req, res){
    const { name } = req.query;
    try {
        if (!name){
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
    }
    else {
        const countryName = await Country.findAll({
            where: { 
                name: {
                    [Op.iLike]: `%${name}%` } 
            }
        })
        return res.send(countryName);
    } 

}catch (error) {
    res.send(error)
}
};


async function getCountryById(req, res){
    try {
        const idPais = req.params.idPais.toUpperCase()
        const country = await Country.findByPk(idPais,
            { include: Activity } 
        )
        country ? res.json(country) : res.sendStatus(404)
        
    } catch (error) {
        res.send(error);
    }
} 


module.exports = {
    getAllCountries,
    getCountryById
}