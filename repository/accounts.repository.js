const { v4 } = require('uuid');

let lstAccounts = []


async function save(obj){
    obj.uuid = v4()
    console.log(lstAccounts)
    lstAccounts.push(obj)
    return obj.uuid
}


module.exports = {
    save
}