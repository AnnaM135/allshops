import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import EyeHide from "../assets/img/icon/EyeHide.svg";
import EyeOpen from "../assets/img/icon/EyeOpen.svg";

function ChangePassModal({ setCurrentModal }) {

    const [show, setShow] = useState(true)
    const [inputState, setInputState] = useState({password: "", confirmPassword: ""})
    const [isOpenEye, setOpenEye] = useState(false)
    const [isOpenEye2, setOpenEye2] = useState(false)
    const [passwordShow, setPasswordShow] = useState(false);
    const [passwordShow2, setPasswordShow2] = useState(false);
  
    const handleModal = () => {
      if(show === false){
        setCurrentModal(1)
      }
      setShow(!show)
    }
    const change = (e) => {
      const name = e.target.getAttribute("id")
      const value = e.target.value
      setInputState({
        ...inputState,
        [name]:e.target.value
      })
    }
    const showEye = () => {
      if(inputState.password != ""){
        setOpenEye(true)
      }
      else{
        setOpenEye(false)
      }
    }
    const showEye_2 = () => {
      if(inputState.confirmPassword != ""){
        setOpenEye2(true)
      }else{
        setOpenEye2(false)
      }
    } 

   
  
  return (
            <Modal show={show} id="modal_reset_success">
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
                        <div className="modal_new_pas">
                            <p className="modal_newPas-title">New password</p>
                            <p className="modal_newPas-text">Choose a new password</p>
                        </div>
                        <div className="modal_new-confirm">
                            <p>Minimum number of characters 6</p>
                            <div className="modal-form modal-reset-newPas">
                                <div className="modal_pass_eye">
                                    <input  type={passwordShow ? "text" : "password"} placeholder="New password" onChange={change} value={inputState.password} id="password" onKeyUp={showEye} />
                                    <img src={passwordShow ? EyeOpen : EyeHide} style={{display: isOpenEye ? "inline-block" : "none"}}  alt="eye" onClick={() => setPasswordShow(!passwordShow)} />                                                    </div>
                                <div className="modal_pass_eye">
                                    <input type={passwordShow2 ? "text" : "password"} placeholder="Repeat Password " onChange={change} value={inputState.confirmPassword} id="confirmPassword" onKeyUp={showEye_2} />
                                    <img style={{display: isOpenEye2 ? "inline-block" : "none"}} src={passwordShow2 ? EyeOpen : EyeHide} alt="eye" onClick={() => setPasswordShow2(!passwordShow2)} />                    
                                </div>
                                <button data-bs-target="#modal_reset_goBack" onClick={() => setCurrentModal(5)}>Change password</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </Modal>
  )
}

export default ChangePassModal;