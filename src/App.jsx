import { useContext } from "react"
import { AppContext } from "./Store/StateData"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import './App.css'
import Navbar from "./Component/Navbar/Navbar"
const App = () => {
  const {data} =useContext(AppContext

  )
  return (

<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<HomePage/>}/>
</Routes>
</BrowserRouter>

  )
}

export default App