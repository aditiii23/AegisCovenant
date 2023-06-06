const express = require("express")
const router = express.Router()
const { authorize } = require("../middleware/authMiddleware")

const { viewFlights } = require("../controllers/flightController")

router.post("/viewFlights", authorize(), viewFlights)

module.exports = router
