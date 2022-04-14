import React, {useState, useEffect, useRef} from 'react';
import {Modal} from "react-bootstrap";
import logo from "../assets/img/logo/logo.svg";
import subscribeImg from "../assets/img/bg/modal_subscribe.png";

function SubscribeModal({isOpen, onRequestClose}) {
    let modalClose = useRef()
    useEffect(() => {
        let handler = e => {
            if(!modalClose.current.contains(e.target)){
                onRequestClose()
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);            
        }
    })

  return (
    <div>
        <Modal show={isOpen}  >
                <div ref = {modalClose} className="modal-first">
                    <div className="modal_btn">
                        <button
                        type="button"
                        className="close"
                        onClick={onRequestClose}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                <div className="modal_body">
                    <div className="row modal__inside">
                        <div className="modal__imgZone">
                            <img src={subscribeImg} alt="subscribeImg" />
                        </div>
                        <div className="modal__subscribe">
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
                                    <button data-bs-target="#modal_reset_success">Submit</button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                </div>
        </Modal>
    </div>
  )
}

export default SubscribeModal