const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const cors = require("cors")
const colors = require("colors")
const { ErrorHandler, handleError } = require("./middleware/errorMiddleware.js")
const { connectDB } = require("./config/db.js")

const userRoutes = require("./routes/userRoutes.js")
const flightRoutes = require("./routes/flightRoutes.js")

dotenv.config()

connectDB()

const app = express()
app.use(cors())

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())
app.get("/", (_req, res) => {
  res.send("Hello World!")
})

app.use("/users", userRoutes)
app.use("/flights", flightRoutes)

if (process.env.NODE_ENV === "development") {
  app.get("/", (req, res) => {
    res.send("API is running...")
  })
}

app.get("/error", (req, res) => {
  throw new ErrorHandler(500, "Internal server error")
})

app.use((err, req, res, next) => {
  handleError(err, res)
})

const PORT = process.env.PORT || 5001

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
