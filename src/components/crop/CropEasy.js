import React, { useState, useCallback } from 'react';
import {Modal} from "react-bootstrap";
import Cropper from 'react-easy-crop';
import profPic from "../../assets/img/user_prof_pic.png"


const CropEasy =  ({ setCurrentModal }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])
    const [show, setShow] = useState(true)
  return (
    <Modal show={show} className="crop__picture modal_info">
        <div className="modal_btn">
                        <button
                            type="button"
                            className="close"
                            onClick={() => setCurrentModal(1)}
                        >
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
      <div className="crop-container">
        <Cropper
          image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="controls">
        <input
          type="range"
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(e.target.value)
          }}
          className="zoom-range"
        />
      </div>
    </Modal>
  )
}


export default CropEasy;