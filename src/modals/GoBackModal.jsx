import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo/logo.svg";
import profPic from "../assets/img/user_prof_pic.png"

function GoBackModal({setCurrentModal}) {

    const [show, setShow] = useState(true)

  return (
     <Modal show={show} id="modal_reset_goBack">
                <div className="modal-register ">
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
                        <div className="modal_reset_goHome">
                            <img className="modal_reset_goHome_logo" src={logo} alt="logo" />
                            <img className="modal_reset_personPic" src={profPic} alt="profile_pic" />
                        </div>
                        <p className="modal_goHome_title">Alex your password has been successfully recovered</p>
                        <Link to = "/" onClick={() => setCurrentModal(1)}>
                            <div className="modal_new-confirm modal-form">
                                <button>Go To Home</button>
                            </div>
                        </Link>
                    </div>
                </div>
                </div>
        </Modal>
  )
}

export default GoBackModal