const Flight = require("../model/flights.model")

//@desc View Flights for given source, destination and date
//@route POST /flights/viewFlights

const viewFlights = async (req, res, next) => {
  try {
    const { source, destination, departDate } = req.body
    const flights = await Flight.find({
      source: source,
      destination: destination,
      departDate: departDate,
    })
    res.status(201).json({
      success: true,
      data: flights,
      message: "Flights fetched successfully",
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { viewFlights }
