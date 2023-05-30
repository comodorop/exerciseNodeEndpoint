
module.exports = {
    validateRate(req, res, next) {
        let { amount } = req.body
        if (amount > 10000) {
            console.log("A transaction mayor of 10,000.00")
        }
        next()
    }
}