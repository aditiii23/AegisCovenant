import React, { useState } from "react"
import { toast } from "react-toastify"
import basestyle from "../Base.module.css"
import checkFlightsStyle from "./CheckFlights.module.css"
import { apiUrl } from "../../services/config"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CheckFlights = () => {
  const navigate = useNavigate()
  const [formErrors, setFormErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [checkFlights, setCheckFlights] = useState({
    source: "",
    destination: "",
    departDate: "",
  })

  const changeHandler = (e) => {
    const { name, value } = e.target
    setCheckFlights({
      ...checkFlights,
      [name]: value,
    })
  }

  const validateForm = (values) => {
    const error = {}
    if (!values.source) {
      error.source = "Source city is required"
    }
    if (!values.destination) {
      error.destination = "Destination city is required"
    }
    if (!values.departDate) {
      error.departDate = "Depart Date is required"
    }
    if (new Date(values.departDate).getTime() + 60000 < new Date()) {
      error.departDate = "Depart date to be greater than current"
    }
    return error
  }
  const checkFlightHandler = async (e) => {
    e.preventDefault()
    const err = validateForm(checkFlights)
    setFormErrors(err)
    try {
      setIsLoading(true)
      if (Object.keys(err).length < 1) {
        let res = await axios.post(
          `${apiUrl}/flights/viewFlights/`,
          checkFlights,
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        navigate("/viewFlights", { state: res.data })
      }
    } catch (err) {
      toast.error(err?.response?.data?.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className={checkFlightsStyle.checkFlights}>
        <form>
          <h1>Check Flight Prices</h1>
          <input
            type="text"
            name="source"
            id="source"
            placeholder="Source"
            onChange={changeHandler}
            value={checkFlights.source}
            disabled={isLoading}
          />
          <p className={basestyle.error}>{formErrors.source}</p>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Destination"
            onChange={changeHandler}
            value={checkFlights.destination}
            disabled={isLoading}
          />
          <p className={basestyle.error}>{formErrors.destination}</p>

          <input
            type="date"
            name="departDate"
            id="departDate"
            min={new Date()}
            placeholder="Depart Date"
            onChange={changeHandler}
            value={checkFlights.departDate}
            disabled={isLoading}
          />
          <p className={basestyle.error}>{formErrors.departDate}</p>
          <button
            className={checkFlightsStyle.button}
            onClick={checkFlightHandler}
            disabled={isLoading}
          >
            Check Flight Prices
          </button>
        </form>
      </div>
    </>
  )
}
export default CheckFlights
