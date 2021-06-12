const { Country, Activity } = require('../db')
const { Op } = require('sequelize');

async function getActivity(req, res){
    const { name, difficulty, duration, season, country } = req.body
    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    });
    const dbCountry= await Country.findAll({
        where: {
            id: {
                [Op.in]: Array.isArray(country) ? country : [country]
            }
        } 
    });
    await createActivity.setCountries(dbCountry);
    res.send(createActivity)
    
}

module.exports = {
    getActivity
}