import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import logo from "../assets/img/logo/logo.svg";

function Reset({ setCurrentModal }) {

  const [show, setShow] = useState(true)

  return (
    <div>
        <Modal show={show} id="modal_reset">
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
                        <div className="modal_tab">
                        <div className="modal-top-nav">
                            <img className="modal-reset-logo" src={logo} alt="logo" />
                        </div>
                        </div>
                        <div className="modal-reset">
                            <p className="modal-reset-title">Reset Password</p>
                            <p className="modal-reset-text">Enter your email address</p>
                            <div className="modal-form">
                                <input type="email" placeholder="Email adress" />
                                <button data-bs-target="#modal_reset_success" onClick={() => setCurrentModal(4)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </Modal>
    </div>
  )
}

export default Reset