const { Country, Activity } = require('../db')

async function getActivity(req, res){
    const { name, difficulty, duration, season, country } = req.body
    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    });
    createActivity.addCountries(country) 
    res.send(createActivity)
    
}

module.exports = {
    getActivity
}