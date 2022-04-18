import React, { useState, useCallback } from 'react';
import {Modal} from "react-bootstrap";
import Cropper from 'react-easy-crop';
// import profPic from "../../assets/img/user_prof_pic.png"
import profPic from "../../assets/img/icon/cropperImg.png";
import zoomImg from "../../assets/img/icon/Img_box_fill.svg";

const CropEasy =  ({ setCurrentModal }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])
    const [show] = useState(true)
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
          image={profPic}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      <div className="controls">
      <img src={zoomImg} alt="zoomIcon"/>
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
        <img src={zoomImg} alt="zoomIcon"/>
      </div>
      <button className="crop__btn">Save</button>
      </div>
    </Modal>
  )
}


export default CropEasy;