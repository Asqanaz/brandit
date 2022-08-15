import React, { useState, useEffect } from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import Home from "./components/home/Home"
import Navbar from "./common/navbar/Navbar"
import Footer from "./common/footer/Footer"
import Portfolio from "./components/portfolio/Portfolio"
const App = () => {

    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.screen.width)
        }
    }, [window.screen.width])
    
    const [theme, setTheme] = useState("dark")
    const [lang, setLang] = useState("En")
    return (
        <Router>
            {/* <Portfolio/> */}
            <Navbar
                theme={theme}
                setTheme={setTheme}
                lang={lang}
                setLang={setLang}
                screen = {windowWidth}
            />
            <Routes>
                <Route
                    path="/"
                    element={<Home theme={theme} lang={lang} width = {windowWidth}/>}>
                </Route>
                <Route path="/portfolio" element={<Portfolio/>}></Route>
                <Route path="/about" element={<></>}></Route>
                <Route path="/service" element={<></>}></Route>
                <Route path="/contact" element={<></>}></Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer theme = {theme} lang = {lang}/>
        </Router>
    )
}

export default App
