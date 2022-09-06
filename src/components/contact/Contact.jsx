import React from "react"
import contact from "../../assets/images/contact.png"
import "./contact.css"

const Contact = ({ theme, lang, screen }) => {
    return (
        <div className="contact container">
            <h2 className="title">Contact Us</h2>
            <p className="contact text">Start your project with Brandit</p>
            <p className="contact text">Send us a message today to get started.</p>
            <div className={`form-container ${theme}`}>
                <div className="form-box">
                    <form className="form">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Surname" />
                        <input
                            type="text"
                            placeholder="Message"
                            className="message"
                        />
                        <button className="form-button">Send Message</button>
                    </form>
                </div>
                <div className="image-box">
                    <img src={contact} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
