import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./portfolio.css"
import portfolio1 from "../../assets/images/portfolio1.png"
import portfolio2 from "../../assets/images/portfolio2.png"
import portfolio3 from "../../assets/images/portfolio3.png"
import portfolio4 from "../../assets/images/portfolio4.png"
import portfolio5 from "../../assets/images/portfolio5.png"
import portfolio6 from "../../assets/images/portfolio6.png"
const Portfolio = ({ theme, lang, screen }) => {
    return (
        <>
            <div className="portfolio container">
                <h2 className="title">Portfolio</h2>
                <p className="text">Some of the projects we have worked on</p>
                <div className="images-wrapper">
                    <div className="upper-col">
                        <div className="portfolio-item">
                            <Link to="/portfolio-info">
                                <img
                                    src={portfolio1}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        Dolice & Garbana
                                    </h2>
                                </div>
                            </Link>
                        </div>

                        <div className="portfolio-item">
                            <Link to="/portfolio-info">
                                <img
                                    src={portfolio2}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        Dolice & Garbana
                                    </h2>
                                </div>
                            </Link>
                        </div>

                        <div className="portfolio-item">
                            <Link to="/portfolio-info">
                                <img
                                    src={portfolio3}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        Dolice & Garbana
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-item middle">
                        <Link to="/portfolio-info">
                            <img
                                src={portfolio4}
                                alt="portfolio_image"
                                className="portfolio-images"
                            />
                            <div className="title-box">
                                <h2 className="image title">
                                    Dolice & Garbana
                                </h2>
                            </div>
                        </Link>
                    </div>

                    <div className="lower-col">
                        <div className="portfolio-item">
                            <Link to="/portfolio-info">
                                <img
                                    src={portfolio5}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        Dolice & Garbana
                                    </h2>
                                </div>
                            </Link>
                        </div>

                        <div className="portfolio-item">
                            <Link to="/portfolio-info">
                                <img
                                    src={portfolio6}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        Dolice & Garbana
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
