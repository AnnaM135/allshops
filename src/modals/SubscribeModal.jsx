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
      <Modal
        show={isOpen}
        contentLabel="Example Modal"
        className="modal__sub"
      >
        <div className="modal_btn2">
            <button type="button" onClick={onRequestClose} className="close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div ref={modalClose} className='modal__inside'>
            <div className="modal__imgZone">
                <img src={subscribeImg} alt="subscribeImg" />
            </div>
            <div className="modal__subscribe">
                <div className="modal-top-nav">
                    <img className="modal-sub-logo" src={logo} alt="logo" />
                </div>
                        <div className="modal-sub">
                            <p className="modal-sub-title">JOIN US NOW</p>
                            <p className="modal-sub-text">And get hot news about the theme</p>
                            <div className="modal-form">
                                 <input type="email" placeholder="Enter Your Email" />
                                <button data-bs-target="#modal_reset_success">Subscribe</button>
                                <label htmlFor="" className='modal-sub-label'>
                                    <input type="checkbox" className='modal-sub-checkbox'/>
                                    Don’t show this popup again
                                </label>
                            </div>
                        </div>
            </div>
        </div>
      </Modal>
    </div>
  )
}

export default SubscribeModal