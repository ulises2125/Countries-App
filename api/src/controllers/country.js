const { Countries } = requiere('../db')

async function getAllCountries(req, res, next){
    try {
        const countries = await Countries.findAll()
        return res.send(countries);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllCountries
}