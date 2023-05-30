const {save} = require("../repository/accounts.repository")

async function createAccount(body) {  
    return await save(body)
}



module.exports = {
    createAccount
}