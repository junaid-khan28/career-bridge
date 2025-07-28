const mongoose = require('mongoose');

const allListedJobs = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    }
})

const allListedJobsPage = new mongoose.model('AllListedJobs', allListedJobs);
module.exports = allListedJobs;  