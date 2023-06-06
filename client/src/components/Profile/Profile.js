import React from "react"
import profilestyle from "./Profile.module.css"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()
  return (
    <div className={profilestyle.profile}>
      <button
        className={profilestyle.button}
        onClick={() => {
          navigate("/checkFlights")
        }}
      >
        Check Flight Prices
      </button>
    </div>
  )
}
export default Profile
