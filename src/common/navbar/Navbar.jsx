import React, { useRef } from "react"
import "./navbar.css"
import logo_dark from "../../assets/images/logo_dark.svg"
import logo_light from "../../assets/images/logo_light.svg"
import { BsSun } from "react-icons/bs"
import { GrMoon } from "react-icons/gr"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom"
const Navbar = ({ theme, setTheme, lang, setLang, screen }) => {
    const handleChangeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    const navbarRef = useRef()
    const mobile_navbarRef = useRef()

    window.matchMedia("(min-width: 600px").matches
        && (document.onmousemove = (e) => {
              if (e.clientY >= 380) {
                //   navbarRef.current.style.transform = "translateY(-90px)"
                navbarRef.current.style.marginTop = -90 + 'px'
                  navbarRef.current.style.transition = 0.7 + "s"
              } else {
                //   navbarRef.current.style.transform = "translateY(0px)"
                navbarRef.current.style.marginTop = 0

                  navbarRef.current.style.transition = 0.7 + "s"
              }
          })

    return (
        <>
        {screen > 600 ? (
                <div style={{height: navbarRef.current?.clientHeight}}>
                <nav className={`nav ${theme}`} ref={navbarRef} >
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
                                    stroke={
                                        theme === "light" ? "black" : "white"
                                    }
                                    strokeWidth="2"
                                />
                            </svg>
                            <span>{lang}</span>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </nav>
                </div>
            ) : (
                <nav style={{height: mobile_navbarRef.current?.clientHeight}}>
                    <div className={`mobile-navbar ${theme}`} ref = {mobile_navbarRef}>
                        <div className="nav-container">
                            <input
                                className="checkbox"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            <div className="logo">
                                <Link to="/">
                                    {theme === "light" ? (
                                        <img src={logo_light} alt="logo" />
                                    ) : (
                                        <img src={logo_dark} alt="logo" />
                                    )}
                                </Link>
                            </div>
                            <div className="burger-menu">
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
                                )}{" "}
                                <div className={`hamburger-lines ${theme}`}>
                                    <span className="line line1"></span>
                                    <span className="line line2"></span>
                                    <span className="line line3"></span>
                                </div>
                            </div>
                            <div className="menu-items">
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
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </>
    )
}

export default Navbar
