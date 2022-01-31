const Workable = require("../lib/workable/api")
const MockWorkable = require("../lib/workable/mockApi")
const moment = require("moment")

function JobService(subDomain) {
    let workableAPI = new Workable(subDomain)

    return {
        async getJobs(withDetails) {
            return workableAPI.getJobs(withDetailss)
                .then(res => {
                    return res.data.jobs.map(job => {
                        job.published_on_pretty = moment(job.published_on, 'YYYY-MM-DD').format('MMMM Do YYYY')
                        return job
                    })
                })
        }
    }
}

module.exports = JobService;