import React from "react"
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTelegram, BsBehance} from 'react-icons/bs'
const Footer = ({theme, lang}) => {
    return (
        <footer>
            <div className={`footer ${theme}`}>
                <div className="icons-container">
                    <FaFacebookF className="footer-icons"/>
                    <AiOutlineInstagram className="footer-icons"/>
                    <BsBehance className="footer-icons"/>
                    <BsTelegram className="footer-icons"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
