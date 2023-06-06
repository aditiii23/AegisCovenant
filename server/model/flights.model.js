const mongoose = require("mongoose")

const flightSchema = mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    airline: {
      type: String,
      required: true,
    },
    departDate: {
      type: Date,
      required: true,
    },
    departTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Flight = mongoose.model("Flight", flightSchema)
module.exports = Flight
