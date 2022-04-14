import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import profPic from "../assets/img/user_prof_pic.png"

function MoreInfoModal({ setCurrentModal }) {
    const [show, setShow] = useState(true)
    const months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
    return (
        <Modal show={show} id="modal_info">
                <div className="modal-register">
                    <div className="modal_btn">
                        <button
                            type="button"
                            className="close"
                            onClick={() => setCurrentModal(1)}
                        >
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal_body">
                        <div className="row">
                            <p className="modal_info_name">Dear Alex</p>
                            <p className="modal_info_title">Before you start shopping, please fill in these fields</p>
                            <div className="modal_info_area">
                            <img src={profPic} alt="profilePic" />
                            <input type="file" id="modal_upload" />
                            <label className="modal_upload_text" for="modal_upload">Upload image</label>
                            <form action="" className="modal-form more_info_form">
                                <input type="text" placeholder="First name *" />
                                <input type="email" placeholder="Email address *" />
                                <div className="modal_info_data">
                                <span className="more_info_select">
                                     {/* <label for="day">Day:</label>  */}
                                    <select name="day" id="day">
                                        <option value="">01</option>
                                    </select>
                                </span>
                                <span className="more_info_select">
                                     {/* <label for="month">Month:</label>  */}
                                    <select name="month" id="month">
                                        {
                                            months.map((month, index) => (
                                                <option key={index}>{month}</option>
                                            ))
                                        }
                                    </select>
                                </span>
                                <span className="more_info_select">
                                     {/* <label for="year">Year:</label>  */}
                                    <select name="year" id="year">
                                        <option value="">2022</option>
                                    </select>
                                </span>
                                </div>
                                <div className="more_modal_gender">
                                <span>
                                    <label for="male" className="modal_radio_label">
                                    <input type="radio" name="gender" id="male" className="radio-box"/>
                                    <span className="radio-style"></span>
                                    Male
                                    </label>
                                </span>
                                <span>
                                    <label for="female" className="modal_radio_label">
                                    <input type="radio" name="gender" id="female" className="radio-box"/>
                                    <span className="radio-style"></span>
                                    Feale
                                    </label>
                                </span>
                                </div>
                                <button>Save</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
        </Modal> 
    )
}

export default MoreInfoModal