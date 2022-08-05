import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./common/navbar/Navbar"

const App = () => {
    const [theme, setTheme] = useState("light")
    return (
        <Router>
            <Navbar theme = {theme} setTheme = {setTheme} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/" element={<></>}></Route>
                <Route path="/" element={<></>}></Route>
                <Route path="/" element={<></>}></Route>
                <Route path="/" element={<></>}></Route>
            </Routes>
        </Router>
    )
}

export default App
