const express = require("express")
var bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const accounts = require("./controller/accounts.controller")
const { validateRate } = require("./middlewares/validateDeposit")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/v1/accounts", accounts)
app.use("/v1/transactions", validateRate, accounts)



app.listen(process.env.PORT, () => {
    console.log(`server its running un the port ${process.env.PORT}`)
})