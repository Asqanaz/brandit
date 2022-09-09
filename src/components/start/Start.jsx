import React, { useState } from "react"
import "./start.css"
import inpchecked from "../../assets/images/checkbox-checked.svg"
import unchecked from "../../assets/images/checkbox-unchecked.svg"
import light_checked from "../../assets/images/light-checked.svg"
import light_unchecked from "../../assets/images/light-unchecked.svg"
import file_icon from "../../assets/images/file-icon.svg"
import Select from "react-select"
// import TextField from "@mui/material/TextField"
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
// import { DatePicker } from "@mui/x-date-pickers/DatePicker"
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import TimePicker from "rc-time-picker"
import "rc-time-picker/assets/index.css"

const Start = ({theme, lang, screen}) => {
    const [priceCallChecked, setPriceCallChecked] = useState(true)
    const [scheduleCallChecked, setScheduleCallChecked] = useState(false)
    const [value, setValue] = useState()

    const priceCallClick = () => {
        setPriceCallChecked(true)
        setScheduleCallChecked(false)
    }
    const scheduleCallClick = () => {
        setScheduleCallChecked(true)
        setPriceCallChecked(false)
    }

    return (
        <div className="start container">
            <div className={`start-wrapper ${theme}`}>
                <h2 className="title">Start a Project</h2>
                <p className="text">What do you want?</p>
                <form action="" className="start-form">
                    <div className="checkbox-container">
                        <label htmlFor="price-offer" className="checkbox-label">
                            <span>Price Offer</span>
                            <input
                                type="checkbox"
                                id="price-offer"
                                onChange={priceCallClick}
                            />
                            {priceCallChecked ? 

                              theme === 'dark' ? 
                             <img src={inpchecked} alt="" />
                             :
                             <img src = {light_checked} alt = ""/>

                            
                             : 
                                theme === 'dark' ? <img src={unchecked} alt="" />: <img src = {light_unchecked} alt = ""/>
                            }
                        </label>
                        <label
                            htmlFor="schedule-a-call"
                            className="checkbox-label">
                            <span>Schedule a Call</span>
                            <input
                                type="checkbox"
                                id="schedule-a-call"
                                onChange={scheduleCallClick}
                            />
                            {scheduleCallChecked ? 
                                theme === 'dark' ? <img src={inpchecked} alt="" /> :
                                <img src={light_checked} alt="" />
                            : 
                                theme === 'dark' ?     <img src={unchecked} alt="" />:
                                <img src={light_unchecked} alt="" />
                            }
                        </label>
                    </div>
                    {priceCallChecked ? (
                        <>
                            <div className="select-container">
                                <h3 className="subform-title type">
                                    Project type
                                </h3>
                                <Select
                                    className="project-select"
                                    classNamePrefix="select"
                                    isMulti={false}
                                    isSearchable={false}
                                    isClearable={false}
                                    placeholder="Select Project types"
                                />
                            </div>
                            <div className="company-details">
                                <h3 className="subform-title">
                                    Company Details
                                </h3>
                                <input
                                    type="text"
                                    className="com-details-input"
                                    required
                                    placeholder="*Company Name"
                                />
                                <textarea
                                    cols="30"
                                    rows="10"
                                    placeholder="Tell us about your project"></textarea>
                                <label htmlFor="file" className="file-label">
                                    <img src={file_icon} alt="" />
                                    <input
                                        type="file"
                                        id="file"
                                        className="file-input"
                                    />
                                    <span className="file-text">
                                        Attach file
                                    </span>
                                </label>
                            </div>
                            <div className="personal-details">
                                <h3 className="subform-title">
                                    Personal Details
                                </h3>
                                <div className="personal-inputs-container">
                                    <input
                                        type="text"
                                        placeholder="*First Name"
                                    />
                                    <input type="text" placeholder="*Surname" />
                                    <input type="email" placeholder="*Email" />
                                    <input
                                        type="tel"
                                        placeholder="*Phone Number"
                                    />
                                </div>
                            </div>
                            <button className="start-form-button" type="submit">
                                Send
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="select-container ${theme}">
                                <h3 className="subform-title type">
                                    Project types
                                </h3>
                                <Select
                                    className={`project-select ${theme}`}
                                    classNamePrefix="select"
                                    isMulti={false}
                                    isSearchable={false}
                                    isClearable={false}
                                    placeholder="Select Project types"
                                />
                            </div>
                            <div className="personal-details schedule">
                                <h3 className="subform-title">
                                    Personal Details
                                </h3>
                                <div className="personal-inputs-container">
                                    <input
                                        type="text"
                                        placeholder="*First Name"
                                    />
                                    <input type="text" placeholder="*Surname" />
                                    <input type="email" placeholder="*Email" />
                                    <input
                                        type="tel"
                                        placeholder="*Phone Number"
                                    />
                                </div>
                            </div>
                            <div className="date-and-time">
                                <h3 className="subform-title">Date & Time</h3>
                                <div className="date-inputs">
                                    <DatePicker
                                        selected={value}
                                        onChange={(date) => setValue(date)}
                                        placeholderText="Date"
                                    />
                                    <TimePicker placeholder="Time" clearIcon />
                                </div>
                            </div>
                            <button className="start-form-button" type="submit">
                                Send
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Start
