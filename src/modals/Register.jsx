import React, {useState, useEffect, useRef} from 'react';
import {Modal} from "react-bootstrap";
import facebookImg from "../assets/img/icon/facebook.svg";
import googleImg from "../assets/img/icon/google.svg";
import vkImg from "../assets/img/icon/vk.svg";
import EyeHide from "../assets/img/icon/EyeHide.svg";
import EyeOpen from "../assets/img/icon/EyeOpen.svg";

function Register({ setCurrentModal }) {

  const [show, setShow] = useState(true)
  const [inputState, setInputState] = useState({password: "", confirmPassword: ""})
  const [isOpenEye, setOpenEye] = useState(false)
  const [isOpenEye2, setOpenEye2] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordShow2, setPasswordShow2] = useState(false);

  const handleModal = () => {
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
  let modalClose = useRef()

  useEffect(() => {
    let handler = e => {
        if(!modalClose.current.contains(e.target)){
            setShow(false)
            setCurrentModal(1)
        }
    }
    document.addEventListener("mousedown", handler);
    return () => {
        document.removeEventListener("mousedown", handler);            
    }
})

  return (
    <Modal  show={show}
    className="modal fade"
    id="modal_register"
    role="dialog"
    ariaHidden="true"
    tabindex="-1"
  >
      <div ref={modalClose} className="modal-register">
          <div className="modal_btn">
              <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              ariaLabel="Close"
              onClick={() => setCurrentModal(1)}
            >
              <span ariaHidden="true">&times;</span>
            </button>
          </div>
        <div className="modal_body">
            <div className="row">
              <div className="modal_tab">
                <div className="modal-top-nav">
                  <a data-bs-toggle="modal" data-bs-target="#modal_login" data-dismiss="modal"><span className="modal-top-login" onClick={() => setCurrentModal(7)}>Login</span></a>
                  <a href=""><span className="modal-top-register">| Register</span></a>
                </div>
              </div>
              <div className="modal-connect-info">
                  <div className="modal-contact">
                      <img src={facebookImg} alt="meta" />
                      <span className="modal-contact-span">Connect with Facebook</span>
                  </div>
                  <div className="modal-contact">
                      <img src={googleImg} alt="google" />
                      <span className="modal-contact-google">Connect with Google</span>
                  </div>
                  <div className="modal-contact">
                      <img src={vkImg} alt="VKontakte" />
                      <span className="modal-contact-span">Connect with VKontakte</span>
                  </div>
              </div>
              <div className="modal-register-email">
                  <p onClick={() => setCurrentModal(6)}>Or register with email</p>
                  <form action="" className="modal-form">
                      <input type="text" placeholder="First name *" />
                      <input type="email" placeholder="Email address *" />
                      <div className="modal_pass_eye">
                        <input  type={passwordShow ? "text" : "password"} placeholder="Password *" onChange={change} value={inputState.password} id="password" onKeyUp={showEye} />
                        <img src={passwordShow ? EyeOpen : EyeHide} style={{display: isOpenEye ? "inline-block" : "none"}}  alt="eye" onClick={() => setPasswordShow(!passwordShow)} />                    
                      </div>
                      <div className="modal_pass_eye">
                        <input type={passwordShow2 ? "text" : "password"} placeholder="Confirm Password * " onChange={change} value={inputState.confirmPassword} id="confirmPassword" onKeyUp={showEye_2} />
                        <img style={{display: isOpenEye2 ? "inline-block" : "none"}} src={passwordShow2 ? EyeOpen : EyeHide} alt="eye" onClick={() => setPasswordShow2(!passwordShow2)} />                    
                      </div>
                      <div className="modal-form-checkArea">
                          <input type="checkbox" id="agree" className="modal-form-checkbox" />
                          <label for="agree">I have read and agree to the  <a href="">Terms & Conditions</a></label>
                      </div>
                      <button>Register</button>
                      <a  className="modal-form-login">Have an account? <span onClick={() => setCurrentModal(7)}>Login</span> </a>
                  </form>
              </div>
            </div>
        </div>
      </div>
  </Modal>
  )
}

export default Register