import React from "react"
import viewFlightsStyle from "./ViewFlights.module.css"

export default function Flight(item) {

  return (
    <div className={viewFlightsStyle.card}>
      <div>
        <p>Source: </p>
        <p>Destination:</p>
        <p>Price:</p>
        <p>Airline:</p>
        <p>Depart Date:</p>
        <p>Depart Time: </p>
      </div>
      <div className={viewFlightsStyle.item}>
        <p>{item.item.generateId}</p>
        <p>{item.item.source}</p>
        <p>{item.item.destination}</p>
        <p>{item.item.price}</p>
        <p>{item.item.airline}</p>
        <p>{item.item.departDate?.substring(0, 10)}</p>
        <p>{item.item.departTime}</p>
      </div>
    </div>
  )
}
