import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./common/navbar/Navbar"
import Footer from "./common/footer/Footer"
const App = () => {
    const [theme, setTheme] = useState("dark")
    const [lang, setLang] = useState('En')
    return (
        <Router>
            <Navbar theme = {theme} setTheme = {setTheme} lang = {lang} setLang = {setLang} />
            <Routes>
                <Route path="/" element={<Home theme = {theme} lang = {lang} />}></Route>
                <Route path="/portfolio" element={<></>}></Route>
                <Route path="/about" element={<></>}></Route>
                <Route path="/service" element={<></>}></Route>
                <Route path="/contact" element={<></>}></Route>
            </Routes>
            {/* <Footer theme = {theme} lang = {lang}/> */}
        </Router>
    )
}

export default App
