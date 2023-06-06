const Flight = require("../model/flights.model")
const { ErrorHandler } = require("../middleware/errorMiddleware")

//@desc View Flights for given source, destination and date
//@route POST /flights/viewFlights

const viewFlights = async (req, res, next) => {
  try {
    const { departDate } = req.body
    let source = req.body.source?.toUpperCase()
    let destination = req.body.destination?.toUpperCase()
    const flights = await Flight.find({
      source: source,
      destination: destination,
      departDate: departDate,
    })
    if (flights.length == 0) throw new ErrorHandler(404, "Flights not found")

    res.status(201).json({
      success: true,
      data: flights,
      message: "Flights fetched successfully",
    })
  } catch (err) {
    console.log(err)
    next(err)
  }
}

module.exports = { viewFlights }
