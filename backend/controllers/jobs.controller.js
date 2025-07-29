const Job = require('../models/jobs.model');

exports.getAllJobs = async (req, res) => {
    try {
        const allJobs = await Job.find();
        res.status(200).json(allJobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

