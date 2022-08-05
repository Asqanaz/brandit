import React from "react"
import './navbar.css'
import logo from '../../assets/images/logo.svg'

const Navbar = ({ theme, setTheme }) => {
    return (
        <nav>
            <div className={"navbar" + ` ${theme}`}>
                <img src = {logo} alt = "brandit logo"/>
                
            </div>
        
        </nav>
    )
}

export default Navbar
