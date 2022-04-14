import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import success from "../assets/img/icon/success.png";

function SuccessModal({ setCurrentModal }) {
    const [show, setShow] = useState(true)

  return (
    <Modal show={show} id="modal_reset_success">
        <div className="modal-register modal-reset-cont">
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
                <div className="container">
                <div className="row">
                    <div className="modal-reset-col">
                        <div className="modal-top-nav">
                            <img className="modal-reset-success" src={success} alt="success" />
                        </div>
                        <div className="modal-reset-check">
                            <p className="modal-reset-title" onClick={() => setCurrentModal(5)}>Сheck your email</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default SuccessModal