import React, {useState, useEffect, useRef} from 'react';
import {Modal} from "react-bootstrap";
import facebookImg from "../assets/img/icon/facebook.svg";
import googleImg from "../assets/img/icon/google.svg";
import vkImg from "../assets/img/icon/vk.svg";
import EyeHide from "../assets/img/icon/EyeHide.svg";
import EyeOpen from "../assets/img/icon/EyeOpen.svg";

function Login({ currentModal, setCurrentModal }) {

  const [show, setShow] = useState(true)
  const [isOpenEye, setOpenEye] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false);
  const [password, setPassword] = useState("")
  const handleModal = () => {
      setShow(!show)
  }

  const showEye = () => {
    if(password != ""){
        setOpenEye(true)
    }else{
        setOpenEye(false)
    }
  }

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
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
      <div>
        <Modal show = {show} id="modal_login">
            <div ref={modalClose} className="modal-register"> 
                <div className="modal_btn">
                    <button
                    className="close"
                    onClick={() => setCurrentModal(1)}
                >
                    <span ariaHidden="true">&times;</span>
                </button>
                </div>
            <div className="modal_body">
                <div className="row">
                    <div className="modal_tab">
                    <div className="modal-top-nav">
                        <a href=""><span className="modal-top-register">Login </span></a>
                        <a ><span className="modal-top-login" onClick={() => setCurrentModal(2)}>| Register </span></a>
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
                        <p>Or login with email</p>
                        <form action="" className="modal-form">
                            <input type="email" placeholder="Email adress" />
                            <div className="modal_pass_eye">
                                <input type={passwordShow ? "text" : "password"}  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={showEye}/>
                                <img src={passwordShow ? EyeOpen : EyeHide} style={{display: isOpenEye ? "inline-block" : "none"}}  alt="eye" onClick={togglePassword} />                    
                            </div>
                            <span className="modal-forgot"><a onClick = {() => setCurrentModal(3)}>Forgot Password ?</a></span>
                            <button>Login</button>
                            <a className="modal-form-login" onClick={() => setCurrentModal(2)}>Don’t have an account? <span >Register</span> </a>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </Modal>

      </div>
  )
}

export default Login




 