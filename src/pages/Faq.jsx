import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import { Accordion } from "react-bootstrap";
import Call from '../components/Call';
import arrowDown from "../assets/img/icon/arrow-down.svg";

function Faq() {
  const [isOpenSelect, setOpenSelect] = useState(false)
  const [selectTxtContext, setSelectTxtContext] = useState("Privacy Policy")
  const [isSelected, setSelected] = useState(false)
  const [isScrolling, setScrolling] = useState(false)
  // const [rotate, setRotate] = useState(false)
  const [categoryOption] = useState(["Comments", "Media", "Cookies", "Embedded cont..", "How long we..", "What rights..", "Where we..", "Comments", "Media", "Cookies", "Embedded cont..", ])
  const openSelectCategories = () => {
    setOpenSelect(!isOpenSelect)
  }
  let categoryRef = useRef()
  useEffect(() => {
    let handler = e => {
        if(!categoryRef.current.contains(e.target)){
            setOpenSelect(false)
        }
    }
    document.addEventListener("mousedown", handler);
    return () => {
        document.removeEventListener("mousedown", handler);            
    }
})
const selectedItem = (item) => {
  setSelected(true)
  if(isSelected === true){
      setSelectTxtContext(item)
  }
}
let searchBlock = useRef()
    let rotateElem = useRef()
    const elems = Array.from(document.querySelectorAll('.search_custom-option_2'))
    const realHeaight = elems.length * 38 - 158
    let countToScroll = 38
    let down = []
    let scrollArr = []

    const searchBlockHandler = () => {
        countToScroll = searchBlock.current.scrollTop
        if (searchBlock.current.scrollTop === 0 || down[down.length - 1] === false) {
            setScrolling(true)
            rotateElem.current.style.transform = 'rotate(0deg)'
        } else {
            setScrolling(true)
        }
        if (searchBlock.current.scrollTop === realHeaight || down[down.length - 1] === true) {
            rotateElem.current.style.transform = 'rotate(180deg)'
        }
        scrollArr.push(searchBlock.current.scrollTop)
        if (scrollArr.length >= 3) {
            scrollArr.shift()
        }
    }
    const scrollDown = (e) => {
        e.stopPropagation()
        if (countToScroll >= realHeaight) {
            down.push(true)
        } else if (searchBlock.current.scrollTop === 0) {
            down.push(false)
        }
        if (down.length >= 2) {
            down.shift()
        }
        if (down[down.length - 1] === false || down.length === 0) {
            countToScroll += 38
            searchBlock.current.scrollTop = countToScroll
            rotateElem.current.style.transform = 'rotate(0deg)'
            setScrolling(true)
        } else if (searchBlock.scrollTop < 38) {
            rotateElem.current.style.transform = 'rotate(180deg)'
            searchBlock.current.scrollTop = 0
            down.push(false)
        } else {
            countToScroll -= 38
            searchBlock.current.scrollTop = countToScroll
            rotateElem.current.style.transform = 'rotate(180deg)'
            setScrolling(true)
        }
    }

  return (
    <div>
        <div class="breadcrumbs_area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb_content">
                            <ul>
                                <li><Link to = "/">home</Link></li>
                                <li>Frequently Questions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-12">
                    <div ref={categoryRef} class="search_select-wrapper_2" onClick={openSelectCategories}>
                        <div className={isOpenSelect ? "search_select_2 open_2" : "search_select_2"}>
                            <div class="search_select__trigger_2"><span>{selectTxtContext}</span>
                                <div class="search_arrow_2"></div>
                            </div>
                            <div ref = {searchBlock} class="search_custom-options_2" onClick={searchBlockHandler} style={{overflowY: isScrolling ? "scroll" : "hidden"}}>
                              {
                                categoryOption.map((item, index) => (
                                  <span key={index} className={isSelected ? "search_custom-option_2 selected_2" : "search_custom-option_2"} data-value={item} onClick={() => selectedItem(item)}>{item}</span>
                                ))
                              }
                                <div class="select_arrow_scroll" onClick={scrollDown}>
                                  <img ref = {rotateElem} src={arrowDown} alt="arrowDown" />
                                </div>
                            </div>
                        </div>
                      </div>
                      
                </div>
            <div class="col-lg-8 col-sm-12"> 
              <div class="faq_content_area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="faq_content_wrapper">
                                <h4>Below are frequently asked questions, you may find the answer for yourself</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Mauris congue euismod purus at semper. Morbi et vulputate massa?
                </Accordion.Header>
                <Accordion.Body>
                 <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Donec mattis finibus elit ut tristique?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Aenean elit orci, efficitur quis nisl at, accumsan?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Pellentesque habitant morbi tristique senectus et netus?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Nam pellentesque aliquam metus?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Aenean elit orci, efficitur quis nisl at?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Aenean elit orci, efficitur quis nisl at?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Aenean elit orci, efficitur quis nisl at?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  Aenean elit orci, efficitur quis nisl at?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
        </div>
        </div>
    </div>
    <Call />
    </div>
  )
}

export default Faq