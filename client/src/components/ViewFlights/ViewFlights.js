import React, { useState, useEffect } from "react"
import viewFlightsStyle from "./ViewFlights.module.css"
import Flight from "./Flight"
import { useLocation } from "react-router-dom"

const ViewFlights = () => {
  const location = useLocation()
  const [data, setData] = useState([])
  useEffect(() => {
    setData(location?.state)
  }, [location])

  return (
    <>
      <div className={viewFlightsStyle.container}>
        {data?.data?.map((item) => (
          <Flight item={item} key={item?.id} />
        ))}
      </div>
    </>
  )
}
export default ViewFlights
