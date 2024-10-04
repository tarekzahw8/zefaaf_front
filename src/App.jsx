import { useContext } from "react"
import { AppContext } from "./Store/StateData"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import './App.css'
import Navbar from "./Component/Navbar/Navbar"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
const App = () => {
  const {data} =useContext(AppContext

  )
  return (

<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/Register" element={<Register/>}/>
<Route path="/Login" element={<Login/>}/>
</Routes>
</BrowserRouter>

  )
}

export default App