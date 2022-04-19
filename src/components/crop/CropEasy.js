import React, { useState, useCallback } from 'react';
import {Modal} from "react-bootstrap";
import Cropper from 'react-easy-crop';
import profPic from "../../assets/img/icon/cropperImg.png";
import zoomImg from "../../assets/img/icon/Img_box_fill.svg";
import rotateImg1 from "../../assets/img/icon/refresh.svg";
import rotateImg2 from "../../assets/img/icon/rotate.svg";

const CropEasy =  ({ setCurrentModal }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [rotation, setRotation] = useState(0)
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
            rotation={rotation}
            aspect={4 / 3}
            cropShape="round"
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            showGrid={false}
            restrictPosition={true}
          />


        <div className='crop-rotate'>
          <img src={rotateImg2} alt="rotateImg" />
          <img src={rotateImg1} alt="rotateImg" className='rotateImg' />
        </div>
        <div className="controls">
        <img src={zoomImg} alt="zoomIcon" className="zoom-img-small" />
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
          <img src={zoomImg} alt="zoomIcon" className="zoom-img-big"/>
        </div>
        <button className="crop__btn">Save</button>
        </div>

    </Modal>
  )
}


export default CropEasy;