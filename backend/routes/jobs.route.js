const router = require("express").Router();
const {getAllJobs} = require('../controllers/jobs.controller');

router.get('/all', getAllJobs);

module.exports = router;