const mongoose = require('mongoose')

const allListedJobs = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    country: { type: String, required: true },
    logo: { type: String, required: true },
    companyLocation: { type: String, required: true },
    aboutJob: { type: String, required: true },
    keyResponsibilities: { type: String, required: true },
    jobType: { type: String, required: true },
    jobSalary: { type: String, required: true },
    datePosted: { type: Date, default: Date.now },
    experienceLevel: { type: String, enum: ['Junior', 'Mid', 'Senior'], required: true },
    skillsRequired: { type: [String], required: true }
});

const allListedJobsPage = mongoose.model('jobs', allListedJobs);
module.exports = allListedJobs;


