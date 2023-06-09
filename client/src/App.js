import appstyle from "./App.module.css"
import Login from "./components/Login/Login"
import { BrowserRouter, useNavigate, Routes, Route } from "react-router-dom"
import Signup from "./components/Signup/Signup"
import Profile from "./components/Profile/Profile"
import CheckFlights from "./components/CheckFlights/CheckFlights"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header/Header"
import { reducer, initialState } from "./reducers/userReducer"
import React, { useEffect, createContext, useReducer, useContext } from "react"
import ViewFlights from "./components/ViewFlights/ViewFlights"

export const UserContext = createContext()

const Routing = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      dispatch({ type: "USER", payload: user })
      navigate("/")
    } else {
      navigate("/login")
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/checkFlights" element={<CheckFlights />}></Route>
        <Route path="/viewFlights" element={<ViewFlights />}></Route>
        <Route path="/" element={<Profile />}></Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className={appstyle.App}>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  )
}

export default App
