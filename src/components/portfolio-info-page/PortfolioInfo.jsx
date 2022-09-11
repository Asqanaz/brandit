import React from "react"
import "./portfolioinfo.css"
import project_image from "../../assets/images/project-image.png"
import design1 from "../../assets/images/design1.png"
import design2 from "../../assets/images/design2.png"
import design3 from "../../assets/images/design3.png"
import design4 from "../../assets/images/design4.png"
import design5 from "../../assets/images/design5.png"
import portfolio1 from "../../assets/images/portfolio1.png"
import portfolio2 from "../../assets/images/portfolio2.png"
import portfolio3 from "../../assets/images/portfolio3.png"
import portfolio4 from "../../assets/images/portfolio6.png"
import similiar1 from "../../assets/images/similiar1.png"
import similiar2 from "../../assets/images/similiar2.png"
import similiar3 from "../../assets/images/similiar3.png"
import similiar4 from "../../assets/images/similiar4.png"

const PortfolioInfo = () => {
    return (
        <div className="portfolioinfo container">
            <h2 className="title">Brandit</h2>
            <img src={project_image} alt="" className="portfolio-main-image"/>
            <div className="portfolio-info-part">
                <div className="info-part-items">
                    <span className="info-title">Client</span>
                    <h4 className="info-text">Brandit</h4>
                </div>
                <div className="info-part-items center">
                    <span className="info-title">Designer</span>
                    <h4 className="info-text">Mark Jude</h4>
                </div>
                <div className="info-part-items center">
                    <span className="info-title">Year</span>
                    <h4 className="info-text">2022</h4>
                </div>
                <div className="info-part-items end">
                    <span className="info-title">Category</span>
                    <h4 className="info-text">Branding</h4>
                </div>
            </div>
            <div className="content-container">
                <h3 className="content-title">Brief</h3>
                <p className="content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Natoque vel pellentesque nulla mauris et vitae ultricies
                    lorem. Dignissim pulvinar auctor vel aenean ornare diam
                    vulputate. Amet purus nulla mi consequat libero augue
                    aliquet id diam. Leo, nisi faucibus maecenas facilisis.
                    Mauris venenatis augue a semper. Dui et massa tellus in
                    viverra in lorem elementum, sed. Suspendisse ut dolor et
                    fermentum consectetur. Lectus eget bibendum viverra arcu,
                    sit duis ultrices. Sit ultricies nulla dictumst vestibulum
                    at id. Tellus ut viverra massa amet habitasse arcu, sapien
                    aliquam.
                </p>
            </div>

            <div className="design-container">
                <h3 className="content-title">Design</h3>
                <div className="design-image-container">
                    <div className="design-item">
                        <img src={design1} alt="" />
                    </div>
                    <div className="design-item">
                        <img src={design2} alt="" />
                    </div>
                    <div className="design-item">
                        <img src={design3} alt="" />
                    </div>
                    <div className="design-item">
                        <img src={design4} alt="" />
                    </div>
                    <div className="design-item last">
                        <img src={design5} alt="" />
                    </div>
                </div>
            </div>
            <div className="similiar-container">
                <h3 className="content-title">Similiar Project</h3>
                <div className="similiar-image-container">
                    <div className="similiar-item">
                        <img src={similiar1} alt="" />
                    </div>
                    <div className="similiar-item">
                        <img src={similiar2} alt="" />
                    </div>
                    <div className="similiar-item">
                        <img src={similiar3} alt="" />
                    </div>
                    <div className="similiar-item">
                        <img src={similiar4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioInfo
