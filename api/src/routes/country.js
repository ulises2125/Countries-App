const { Router } = require('express');
const { getAllCountries } = require('../controllers/country');
const router = Router();

router.get('/', getAllCountries);


module.exports = router;
