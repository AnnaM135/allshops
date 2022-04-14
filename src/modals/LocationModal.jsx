import React, {useState, useEffect, useRef} from 'react';
import arrowDown from "../assets/img/icon/arrow-down.svg";

function LocationModal() {

  const [show, setShow] = useState(false)

  const hanlder = () => {
    setShow(!show)
  }

  let modalClose = useRef()
  useEffect(() => {
    let handlerModal = e => {
        if(!modalClose.current.contains(e.target)){
            setShow(false)
        }
    }
    document.addEventListener("mousedown", handlerModal);
    return () => {
        document.removeEventListener("mousedown", handlerModal);            
    }
  })
console.log(show);
  return (
    <div>
      <a className="header_top_links_hover" href="#" onClick={hanlder}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
        Location <img src={arrowDown} alt="arrow-down" className='arrowDownIcon' />
      </a>
        <div ref = {modalClose} className='locationState' style={{display: show ? "block" : "none"}}>
                <div  className="modal-location">
                    <div className="modal_btn">
                        <button
                        type="button"
                        className="close"
                        onClick={() => setShow(false)}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                <div className="modal_body">
                    <div className="row">
                      <div className="location_modal_body">
                        <h1>Select Location</h1>
                        <h2>ACCESSORIES allows you to shop from anywhere in the world</h2>
                        <div className='location_search_inp'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                          </svg>
                          <input type="text" />
                        </div>
                      </div>
                        <div className="location_search">
                          <ul>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                New York bybybyby New York bybybyby
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                New York bybybyby New York bybybyby
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                New York bybybyby New York bybybyby
                              </a>
                            </li>
                            <li>
                              <a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#999999" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                New York bybybyby New York bybybyby
                              </a>
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default LocationModal