import React from "react"
import "./navbar.css"
import logo_dark from "../../assets/images/logo_dark.svg"
import logo_light from "../../assets/images/logo_light.svg"
import { BsSun } from "react-icons/bs"
import { GrMoon } from "react-icons/gr"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom"
const Navbar = ({ theme, setTheme, lang, setLang }) => {
    const handleChangeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }
    return (
        <nav className={`nav ${theme}`}>
            <div className={`navbar ${theme}`}>
                <Link to="/">
                    {theme === "light" ? (
                        <img src={logo_light} alt="brandit logo" />
                    ) : (
                        <img src={logo_dark} alt="brandit logo" />
                    )}
                </Link>
                <ul className={`navbar__list ${theme}`}>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <div className="navbar__settings">
                    {theme === "dark" ? (
                        <BsSun
                            onClick={handleChangeTheme}
                            className="theme-icon"
                        />
                    ) : (
                        <GrMoon
                            onClick={handleChangeTheme}
                            className="theme-icon"
                        />
                    )}
                    <svg
                        width="2"
                        height="34"
                        viewBox="0 0 2 34"
                        fill="none"
                        className="vertical-line"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 0V34"
                            stroke={theme === "light" ? "black" : "white"}
                            strokeWidth="2"
                        />
                    </svg>
                    <span>{lang}</span>
                    <IoIosArrowDown />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
