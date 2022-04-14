import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import Call from '../components/Call';
import arrowDown from "../assets/img/icon/arrow-down.svg";

function PrivacyPolicy() {
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
                                <li>privacy policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="privacy_policy_main_area">
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
                    <div class="col-lg-8 col-sm-12 privacy_policy_inner_content">
                        <div class="privacy_content section_1">
                            <h2>Who we are</h2>
                            <p>Our website address is: <a href="https://themeforest.net/user/hastech/portfolio">https://themeforest.net/user/hastech/portfolio</a></p>
                        </div>
                        <div class="privacy_content section_2">
                            <div id="comments">
                                <h2>What personal data we collect and why we collect it</h2>
                                <h3 >Comments</h3>
                                <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                                <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                            </div>
                            <div id="media">
                                <h3 >Media</h3>
                                <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                            </div>
                            <div id="cookies">
                                <h3 >Cookies</h3>
                                <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                                <p>If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                                <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                                <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
                            </div>
                            <div id="embedded">
                                <h3 >Embedded content from other websites</h3>
                                <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                                <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                            </div>
                        </div>
                        <div class="privacy_content section_3" id="long">
                            <h2>How long we retain your data</h2>
                            <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
                            <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
                        </div>
                        <div class="privacy_content section_3" id="rights">
                            <h2>What rights you have over your data</h2>
                            <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                        </div>
                        <div class="privacy_content section_3" id="about">
                            <h2>Where we send your data</h2>
                            <p>Visitor comments may be checked through an automated spam detection service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Call />
    </div>
  )
}

export default PrivacyPolicy