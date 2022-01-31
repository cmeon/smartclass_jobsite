var express = require('express');
var router = express.Router();

const workableID = process.env.WORKABLE_ID
const clarityID = process.env.CLARITY_ID

const JobService = require('../services/jobs')
const jobService = JobService(workableID)

/* GET home page. */
router.get('/', async function (_req, res, _next) {
  let jobs = await jobService.getJobs(false);
  res.render('index', { title: 'Express', jobs, clarityID });
});

module.exports = router;
