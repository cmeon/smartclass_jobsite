const axios = require('axios');

class Workable {
    constructor(account) {
        this.account = account
    }

    async getJobs(withDetails) {
        return axios.get(`https://www.workable.com/api/accounts/${this.account}?details=${withDetails}`)
    }
}

module.exports = Workable