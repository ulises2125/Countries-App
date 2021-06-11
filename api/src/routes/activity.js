const { Router } = require('express');
const { getActivity } = require('../controllers/activity');
const router = Router();

router.post('/', getActivity);

module.exports = router;
