const express = require("express")
const routes = express.Router()
const {createAccount} = require("../services/accounts.services")


routes.post("/", async (req, res)=>{
    try {
        let {body} = req
        let data = await createAccount(body)
        res.status(200).send({msg: "New record avaliabled", data})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "There is a problem"})
    }
})


module.exports = routes