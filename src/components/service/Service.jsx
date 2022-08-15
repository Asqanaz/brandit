import React from "react"
import "./service.css"
const Service = () => {
    return (
        <>
            <div className="service container">
                <h2 className="title">Services</h2>
                <p className="text">
                    We specialize in transforming your business ideas into
                    reality
                </p>
                <div className="service-items-container">
                    <div className="service-upper-col">
                        <div className="service-item">
                            <h3 className="service-title">Design</h3>
                            <p className="service-text">
                                We offer for you buisness
                            </p>
                            <ul className="service-list">
                                <li>Branding & Packaging design</li>
                                <li>Naming & Logo design</li>
                                <li>Media and Advertising design</li>
                            </ul>
                        </div>
                        <div className="service-item">
                            <h3 className="service-title">Web</h3>
                            <p className="service-text">
                                Create your own website to promote
                            </p>
                            <ul className="service-list">
                                <li>UI/UX design</li>
                                <li>Website creating</li>
                                <li>Web development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service-item lower">
                        <h3 className="service-title">Digital Marketing</h3>
                        <p className="service-text">
                            Need to get known? We offer
                        </p>
                        <ul className="service-list">
                            <li>Marketing strategy & Analytics</li>
                            <li>Social Media Marketing & Content marketing</li>
                            <li>Search engine optimization & Pay-Per click</li>
                            <li>Mobile Marketing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
