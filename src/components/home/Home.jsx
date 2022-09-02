import React, { useRef } from "react"
import { useHover } from "../../hooks/useHover"
import { Link } from "react-router-dom"
import "./home.css"
import bg1 from "../../assets/images/bg_div1.png"
import bg2 from "../../assets/images/bg_div2.png"
import bg3 from "../../assets/images/bg_div3.png"
import bg4 from "../../assets/images/bg_div4.png"
import bg5 from "../../assets/images/bg_div5.png"
import bg6 from "../../assets/images/bg_div6.png"
import grid1 from "../../assets/images/grid1.png"
import grid2 from "../../assets/images/grid2.png"
import grid3 from "../../assets/images/grid3.png"
import grid4 from "../../assets/images/grid4.png"
import grid5 from "../../assets/images/grid5.png"
import grid6 from "../../assets/images/grid6.png"
import grid7 from "../../assets/images/grid7.png"
import mobile_grid1 from "../../assets/images/mobile_grid1.png"
import mobile_grid2 from "../../assets/images/mobile_grid2.png"
import mobile_grid3 from "../../assets/images/mobile_grid3.png"
import mobile_grid4 from "../../assets/images/mobile_grid4.png"
import mobile_grid5 from "../../assets/images/mobile_grid5.png"
import mobile_grid6 from "../../assets/images/mobile_grid6.png"
import mobile_grid7 from "../../assets/images/mobile_grid7.png"
import apostrof from "../../assets/images/apostrof.svg"
import apostrof2 from "../../assets/images/apostrof2.svg"
import values_icon1 from "../../assets/images/icon1.png"
import values_icon2 from "../../assets/images/icon2.png"
import values_icon3 from "../../assets/images/icon3.png"
import values_icon4 from "../../assets/images/icon4.png"
import values_icon5 from "../../assets/images/icon5.png"
import values_icon6 from "../../assets/images/icon6.png"
import form_image from "../../assets/images/form-image.png"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Home = ({ theme, lang, screen }) => {
    const ref = useRef()
    const [hoveredRef, isHovered] = useHover()

    const widthCondition = screen >= 600

    return (
        <>
            <section>
                <div className="header container">
                    <div className="content-box">
                        <h2 className="content-box__title">
                            We make things look better.
                        </h2>
                        <p className="content-box__text">
                            We do unconventional brandings, websites and digital
                            marketing.
                        </p>
                        <span className="content-box__text">
                            Let's Get Started
                        </span>
                        <Link to="/start-a-project">
                            <button className="button">start a project</button>
                        </Link>
                    </div>
                    <div className="image-container">
                        <div className="right-column">
                            <img src={bg1} alt="" />
                            <img src={bg2} alt="" />
                            <img src={bg3} alt="" />
                        </div>
                        <div className="left-column">
                            <img src={bg4} alt="" />
                            <img src={bg5} alt="" />
                            <img src={bg6} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="section container">
                    <h2 className="title">Services</h2>
                    <p className="text">Transforming your ideas into reality</p>
                    <div className="items-container">
                        <div className="item first">
                            <span className="service-title">Design</span>
                        </div>
                        <div className="item second">
                            <span className="service-title">
                                Digital <br />
                                Marketing
                            </span>
                        </div>
                        <div className="item third">
                            <span className="service-title">Web</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="section container">
                    <h2 className="title">Our Works</h2>
                    <p className="text">
                        Some of the projects we have worked on
                    </p>
                    <div className="grid-container">
                        <div className="grid-items1" ref={ref}>
                            {widthCondition ? (
                                <img
                                    src={grid1}
                                    alt=""
                                    className="grid-items-images"
                                />
                            ) : (
                                <img
                                    src={mobile_grid1}
                                    alt=""
                                    className="grid-items-images"
                                />
                            )}
                        </div>
                        <div className="grid-items2">
                            {widthCondition ? (
                                <img
                                    src={grid2}
                                    alt=""
                                    className="grid-items-images"
                                />
                            ) : (
                                <img
                                    src={mobile_grid2}
                                    alt=""
                                    className="grid-items-images"
                                />
                            )}
                        </div>
                        <div className="grid-items3">
                            {widthCondition ? (
                                <img
                                    src={grid3}
                                    alt=""
                                    className="grid-items-images"
                                />
                            ) : (
                                <img
                                    src={mobile_grid3}
                                    alt=""
                                    className="grid-items-images"
                                />
                            )}
                        </div>
                        <div className="grid-items4">
                            {widthCondition ? (
                                <img
                                    src={grid4}
                                    alt=""
                                    className="grid-items-images"
                                />
                            ) : (
                                <img
                                    src={mobile_grid4}
                                    alt=""
                                    className="grid-items-images"
                                />
                            )}
                        </div>
                        <div className="grid-items5">
                            {widthCondition ? (
                                <img
                                    src={grid5}
                                    alt=""
                                    className="grid-items-images"
                                />
                            ) : (
                                <img
                                    src={mobile_grid5}
                                    alt=""
                                    className="grid-items-images"
                                />
                            )}
                        </div>
                        <div className="grid-items6">
                            {widthCondition ? (
                                <img
                                    src={grid6}
                                    alt=""
                                    className="grid-items-images"
                                />
                            ) : (
                                <img
                                    src={mobile_grid6}
                                    alt=""
                                    className="grid-items-images"
                                />
                            )}
                        </div>
                        <div className="grid-items7">
                            {widthCondition ? (
                                <img
                                    src={grid7}
                                    alt=""
                                    className="grid-items-images"
                                />
                            ) : (
                                <img
                                    src={mobile_grid7}
                                    alt=""
                                    className="grid-items-images"
                                />
                            )}
                        </div>
                    </div>
                    <button className="button view">view more</button>
                </div>
                <section>
                    <div className="section container">
                        <h2 className="title">What our clients say</h2>
                        <p className="text">
                            This is what our customers say about us. It really
                            <br />
                            matters for us.
                        </p>
                        <div className="items-container">
                            {widthCondition ? (
                                <>
                                    <div className="item-client">
                                        <img
                                            src={apostrof}
                                            alt=""
                                            className="apostrof left"
                                        />
                                        <img
                                            src={apostrof2}
                                            alt=""
                                            className="apostrof right"
                                        />
                                        <p className="comment">
                                            “I don’t know in real-time where the
                                            money is spent, and I don’t have to
                                            lend out the company’s credit card
                                            anymore. What a releif!”
                                        </p>

                                        <div className="user-part">
                                            <div className="for-avatar"></div>
                                            <div className="user-info">
                                                <span className="user-name">
                                                    Denny Hilguston
                                                </span>
                                                <span className="user-login">
                                                    @denny_hill
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-client">
                                        <img
                                            src={apostrof}
                                            alt=""
                                            className="apostrof left"
                                        />
                                        <img
                                            src={apostrof2}
                                            alt=""
                                            className="apostrof right"
                                        />
                                        <p className="comment">
                                            “I don’t know in real-time where the
                                            money is spent, and I don’t have to
                                            lend out the company’s credit card
                                            anymore. What a releif!”
                                        </p>

                                        <div className="user-part">
                                            <div className="for-avatar"></div>
                                            <div className="user-info">
                                                <span className="user-name">
                                                    Denny Hilguston
                                                </span>
                                                <span className="user-login">
                                                    @denny_hill
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-client">
                                        <img
                                            src={apostrof}
                                            alt=""
                                            className="apostrof left"
                                        />
                                        <img
                                            src={apostrof2}
                                            alt=""
                                            className="apostrof right"
                                        />
                                        <p className="comment">
                                            “I don’t know in real-time where the
                                            money is spent, and I don’t have to
                                            lend out the company’s credit card
                                            anymore. What a releif!”
                                        </p>

                                        <div className="user-part">
                                            <div className="for-avatar"></div>
                                            <div className="user-info">
                                                <span className="user-name">
                                                    Denny Hilguston
                                                </span>
                                                <span className="user-login">
                                                    @denny_hill
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Carousel
                                    showThumbs={false}
                                    showStatus={false}
                                    width="350">
                                    <div className="item-client">
                                        <img
                                            src={apostrof}
                                            alt=""
                                            className="apostrof left"
                                        />
                                        <img
                                            src={apostrof2}
                                            alt=""
                                            className="apostrof right"
                                        />
                                        <p className="comment">
                                            “I don’t know in real-time where the
                                            money is spent, and I don’t have to
                                            lend out the company’s credit card
                                            anymore. What a releif!”
                                        </p>

                                        <div className="user-part">
                                            <div className="for-avatar"></div>
                                            <div className="user-info">
                                                <span className="user-name">
                                                    Denny Hilguston
                                                </span>
                                                <span className="user-login">
                                                    @denny_hill
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-client">
                                        <img
                                            src={apostrof}
                                            alt=""
                                            className="apostrof left"
                                        />
                                        <img
                                            src={apostrof2}
                                            alt=""
                                            className="apostrof right"
                                        />
                                        <p className="comment">
                                            “I don’t know in real-time where the
                                            money is spent, and I don’t have to
                                            lend out the company’s credit card
                                            anymore. What a releif!”
                                        </p>

                                        <div className="user-part">
                                            <div className="for-avatar"></div>
                                            <div className="user-info">
                                                <span className="user-name">
                                                    Denny Hilguston
                                                </span>
                                                <span className="user-login">
                                                    @denny_hill
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-client">
                                        <img
                                            src={apostrof}
                                            alt=""
                                            className="apostrof left"
                                        />
                                        <img
                                            src={apostrof2}
                                            alt=""
                                            className="apostrof right"
                                        />
                                        <p className="comment">
                                            “I don’t know in real-time where the
                                            money is spent, and I don’t have to
                                            lend out the company’s credit card
                                            anymore. What a releif!”
                                        </p>

                                        <div className="user-part">
                                            <div className="for-avatar"></div>
                                            <div className="user-info">
                                                <span className="user-name">
                                                    Denny Hilguston
                                                </span>
                                                <span className="user-login">
                                                    @denny_hill
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            )}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="section container">
                        <h2 className="title">Our Values</h2>
                        {widthCondition ? (
                            <div className="values-container">
                                <div className="values-items-container">
                                    <img
                                        src={values_icon1}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">GROWTH</h3>
                                    <p className="values-text">
                                        This is what we will bring to your
                                        business. More fame between your
                                        individual type of businesses. More
                                        clients and which by itself means more
                                        sales. Our clients have experienced it
                                        just after months. Making your business
                                        grow also.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon2}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">STRATEGY</h3>
                                    <p className="values-text">
                                        With plenty of experience from our work
                                        and in-depth analysis of more advanced
                                        agencies, we process the most effective
                                        method to grow your business in a short
                                        time. Many companies collapse with no
                                        strategy.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon3}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">
                                        TRANSPARENCY
                                    </h3>
                                    <p className="values-text">
                                        We are open, honest, and straight
                                        forward to our clients. This is how we
                                        gain trust, and this is how we keep our
                                        agency's name clear. In return, we get
                                        the same clear and friendly
                                        relationships. Whatever we do, this is
                                        the most valuable thing for us.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon4}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">TRUST</h3>
                                    <p className="values-text">
                                        Trust is one of the most meaningful
                                        things in our job. By growing up with
                                        our partners we have gained
                                        irreplaceable things such as experience
                                        and trust. And this gives us the most
                                        value.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon5}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">UNIQUENESS</h3>
                                    <p className="values-text">
                                        Most of our clients are not the only
                                        ones in their sphere. So we work on
                                        making them unique and creative,
                                        separating them from the gray crowd.
                                        From the plenty of fish, you will notice
                                        at first the one that shines the best
                                        with its uniqueness.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon6}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">
                                        RESPONSIBILITY
                                    </h3>
                                    <p className="values-text">
                                        Our team consists of professional
                                        specialists who's duty is just to make
                                        our clients pleased. Discipline,
                                        communication and active rest, this is
                                        how our team works on projects. So
                                        easily rely on us and don’t care about
                                        deadlines.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                showIndicators={false}
                                w>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon1}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">GROWTH</h3>
                                    <p className="values-text">
                                        This is what we will bring to your
                                        business. More fame between your
                                        individual type of businesses. More
                                        clients and which by itself means more
                                        sales. Our clients have experienced it
                                        just after months. Making your business
                                        grow also.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon2}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">STRATEGY</h3>
                                    <p className="values-text">
                                        With plenty of experience from our work
                                        and in-depth analysis of more advanced
                                        agencies, we process the most effective
                                        method to grow your business in a short
                                        time. Many companies collapse with no
                                        strategy.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon3}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">
                                        TRANSPARENCY
                                    </h3>
                                    <p className="values-text">
                                        We are open, honest, and straight
                                        forward to our clients. This is how we
                                        gain trust, and this is how we keep our
                                        agency's name clear. In return, we get
                                        the same clear and friendly
                                        relationships. Whatever we do, this is
                                        the most valuable thing for us.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon4}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">TRUST</h3>
                                    <p className="values-text">
                                        Trust is one of the most meaningful
                                        things in our job. By growing up with
                                        our partners we have gained
                                        irreplaceable things such as experience
                                        and trust. And this gives us the most
                                        value.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon5}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">UNIQUENESS</h3>
                                    <p className="values-text">
                                        Most of our clients are not the only
                                        ones in their sphere. So we work on
                                        making them unique and creative,
                                        separating them from the gray crowd.
                                        From the plenty of fish, you will notice
                                        at first the one that shines the best
                                        with its uniqueness.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon6}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">
                                        RESPONSIBILITY
                                    </h3>
                                    <p className="values-text">
                                        Our team consists of professional
                                        specialists who's duty is just to make
                                        our clients pleased. Discipline,
                                        communication and active rest, this is
                                        how our team works on projects. So
                                        easily rely on us and don’t care about
                                        deadlines.
                                    </p>
                                </div>
                            </Carousel>
                        )}
                    </div>
                </section>
                <section>
                    <div className={`form-container ${theme}`}>
                        <div className="form-box">
                            <h2 className="title">
                                Start your project with Brandit
                            </h2>
                            <p className="text">
                                Send us a message today to get started.
                            </p>
                            <form className="form">
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Surname" />
                                <input
                                    type="text"
                                    placeholder="Message"
                                    className="message"
                                />
                                <button className="form-button">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="image-box">
                            <img src={form_image} alt="" />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Home
