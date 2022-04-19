import React, {useState, useEffect, useRef} from  'react';
import { Link } from "react-router-dom";
import  "../assets/css/style.css";
import logo from "../assets/img/logo/logo.svg";
import arrowDown from "../assets/img/icon/arrow-down.svg";
import list from "../assets/img/icon/list.svg";
import languageIcon from "../assets/img/logo/language.png";
import language2Icon from "../assets/img/logo/language2.png";
import Login from '../modals/Login';
import LoginTrue from '../modals/LoginTrue';
import Register from '../modals/Register';
import Reset from '../modals/Reset';
import ChangePassModal from '../modals/ChangePassModal';
import GoBackModal from '../modals/GoBackModal';
import SuccessModal from '../modals/SuccessModal';
import MoreInfoModal from '../modals/MoreInfoModal';
import LocationModal from '../modals/LocationModal';
import CropEasy from './crop/CropEasy.js';

function Header() {

    const [isActive, setActive] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    const [isScrollToTop, setScrollToTop] = useState(false);
    const [isHidden, setHidden] = useState(true);
    const [toggleMenuTxt, setToggleMenuTxt] = useState({icon: "+", text: "More Categories"});
    const [isOpenSelect, setOpenSelect] = useState(false)
    const [isSelected, setSelected] = useState(false)
    const [categoryOption] = useState(["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"])
    const [selectTxtContext, setSelectTxtContext] = useState("All Categories")
    const [currentModal, setCurrentModal] = useState(1) 
    const [showScrollBtn, setShowScrollBtn] = useState(false) 

    const toggleclassName = () => {
        setActive(!isActive);
    };
    const toggleActiveMenu = () => {
        setIsActiveMenu(!isActiveMenu)
    }
    
    let menuRef = useRef()
    let categoryRef = useRef()
    let smallMenuRef = useRef()

    useEffect(() => {
        let handler = e => {
            if(!menuRef.current.contains(e.target)){
                setActive(false)
            }
            if(!categoryRef.current.contains(e.target)){
                setOpenSelect(false)
            }
            if(!smallMenuRef.current.contains(e.target)){
                setIsActiveMenu(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);            
        }
    })

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY
        if(scroll < 100){
            setScrollToTop(false)
        }else{
            setScrollToTop(true)
        }
    })

    const toggleHiddenMenu = () => {
        setHidden(!isHidden)
        if(isHidden == false){
            setToggleMenuTxt({icon: "+", text: "More Categories"})
        }else{
            setToggleMenuTxt({icon: "-", text: "Less Categories"})
        }
    }

    const openSelectCategories = () => {
        setOpenSelect(!isOpenSelect)
    }
    const selectedItem = (item) => {
        setSelected(true)
        if(isSelected === true){
            setSelectTxtContext(item)
        }
    }
    
    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 200){
       setShowScrollBtn(true)
      }
      else{
        setShowScrollBtn(false)
      }
    })

  return (
    <div id = 'scroll-up'>
        <header className="header_area header_padding">

            <div className="header_top top_two">
                <div className="container">
                    <div className="top_inner">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <div className="follow_us">
                                    <label>Follow Us:</label>
                                    <ul className="follow_link">
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor"  className="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                            </svg>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                            </svg>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                            </svg>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <div className="top_right text-right">
                                    <ul>
                                        <li className="language">
                                            <LocationModal />
                                        </li>
                                        <li className="language">
                                        <a className='header_top_links_hover' href="#"
                                            ><img
                                            src={languageIcon}
                                            alt="languageIcon" />en-gb <img src={arrowDown} alt="arrow-down" className='arrowDownIcon' />
                                        </a>
                                        <ul className="dropdown_language">
                                            <li>
                                            <a href="#"
                                                ><img src={languageIcon} alt="languageIcon" />
                                                English</a
                                            >
                                            </li>
                                            <li>
                                            <a href="#"
                                                ><img src={language2Icon} alt="language2Icon" />
                                                Germany</a
                                            >
                                            </li>
                                        </ul>
                                        </li>
                                        <li className="currency">
                                        <a className='header_top_links_hover' href="#"
                                            >$ USD <img src={arrowDown} alt="arrow-down" className='arrowDownIcon' />
                                        </a>
                                        <ul className="dropdown_currency">
                                            <li><a href="#">EUR – Euro</a></li>
                                            <li><a href="#">GBP – British Pound</a></li>
                                            <li><a href="#">INR – India Rupee</a></li>
                                        </ul>
                                        </li>
                                        <li 
                                            className="top_links"
                                        >
                                            {currentModal === 1 && <Login currentModal = {currentModal} setCurrentModal = {setCurrentModal}/>}
                                            {currentModal === 2 && <Register currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                                            {currentModal === 3 && <Reset currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                                            {/* {currentModal === 4 && <SuccessModal currentModal = {currentModal} setCurrentModal = {setCurrentModal} />} */}
                                            {currentModal === 4 && <ChangePassModal currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                                            {currentModal === 5 && <GoBackModal currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                                            {currentModal === 6 && <MoreInfoModal currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                                            {currentModal === 7 && <LoginTrue currentModal = {currentModal} setCurrentModal = {setCurrentModal}/>}
                                            {currentModal === 8 && <CropEasy currentModal = {currentModal} setCurrentModal = {setCurrentModal}/>}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_middle middle_two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-6">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-6">
                            <div className="middel_right">
                                <div className="search-container search_two">
                                    <form action="#">
                                        <div className="search_box">
                                        <input
                                            placeholder="Search entire store here ..."
                                            type="text"
                                        />
                                        <div ref={categoryRef} className="search_select-wrapper" onClick={openSelectCategories}>
                                            <div className={isOpenSelect ? "search_select openSel" : "search_select"}>
                                                <div className="search_select__trigger"><span>{selectTxtContext}</span>
                                                    <div className="search_arrow"></div>
                                                </div>
                                                <div className="search_custom-options">
                                                    {
                                                        categoryOption.map((item, index) => (
                                                            <span key={index} className={isSelected ? "search_custom-option selected" : "search_custom-option"} data-value={item} onClick={() => selectedItem(item)}>{item}</span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="33" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                        </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="middel_right_info">
                                    <div className="header_wishlist">
                                        <Link to = "/wishlist"
                                        ><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg></span>
                                        <span className="header_top_text"> Wish list</span>
                                        </Link>
                                        <span className="wishlist_quantity">3</span>
                                    </div>
                                    <div className="header_wishlist">
                                        <Link to = "/compare">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                                                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                                                </svg>
                                            </span>
                                        <span className="header_top_text">Compare</span>
                                        </Link>
                                        <span className="wishlist_quantity">3</span>
                                    </div>
                                    <div className="header_wishlist">
                                        <Link to = "/cart">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                </svg>
                                            </span>
                                        <span className="header_top_text">My Cart</span>
                                        </Link>
                                        <span className="wishlist_quantity">3</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mini_cart">
                <div className="cart_close">
                <div className="cart_text">
                    <h3>cart</h3>
                </div>
                <div className="mini_cart_close">
                    <a href="#"><i className="ion-android-close"></i></a>
                </div>
                </div>
                <div className="cart_item">
                <div className="cart_img">
                    <a href="#"
                    ><img src="assets/img/s-product/product.jpg" alt=""
                    /></a>
                </div>
                <div className="cart_info">
                    <a href="#"
                    >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                    >

                    <span className="quantity">Qty: 1</span>
                    <span className="price_cart">$60.00</span>
                </div>
                <div className="cart_remove">
                    <a href="#"><i className="ion-android-close"></i></a>
                </div>
                </div>
                <div className="cart_item">
                <div className="cart_img">
                    <a href="#"
                    ><img src="assets/img/s-product/product2.jpg" alt=""
                    /></a>
                </div>
                <div className="cart_info">
                    <a href="#">Koss Porta Pro On Ear Headphones </a>
                    <span className="quantity">Qty: 1</span>
                    <span className="price_cart">$69.00</span>
                </div>
                <div className="cart_remove">
                    <a href="#"><i className="ion-android-close"></i></a>
                </div>
                </div>
                <div className="mini_cart_table">
                <div className="cart_total">
                    <span>Sub total:</span>
                    <span className="price">$138.00</span>
                </div>
                <div className="cart_total mt-10">
                    <span>total:</span>
                    <span className="price">$138.00</span>
                </div>
                </div>

                <div className="mini_cart_footer">
                <div className="cart_button">
                    <Link to= "/cart">View cart</Link>
                </div>
                <div className="cart_button">
                    <Link to="/checkout" className="active" >Checkout</Link>
                </div>
                </div>
            </div>

            <div className={isScrollToTop ? "header_bottom bottom_two sticky-header sticky" : "header_bottom bottom_two sticky-header"}>
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                    <div className="header_bottom_container">
                        <div ref={menuRef} className="categories_menu">
                        <div className={isActive ? 'categories_title active': 'categories_title'}  onClick={toggleclassName} >
                            <h2 className="categori_toggle">Browse categories</h2>
                        </div>
                        <div className={isActive ? "categories_menu_toggle activeCategory" : "categories_menu_toggle" } >
                            <ul>
                            <li className="menu_item_children categorie_list">
                                <a href="#"
                                >Brake Parts <img src={arrowDown} alt="arrow" className='arrowRight' /></a>
                                <ul className="categories_mega_menu">
                                <li className="menu_item_children">
                                    <a href="#">Wheel Bearings</a>
                                    <ul className="categorie_sub_menu">
                                    <li><a href="#">Bower</a></li>
                                    <li><a href="#">Flipbac</a></li>
                                    <li><a href="#">Gary Fong</a></li>
                                    <li><a href="#">GigaPan</a></li>
                                    </ul>
                                </li>
                                <li className="menu_item_children">
                                    <a href="#">Wheel Rim Screws</a>
                                    <ul className="categorie_sub_menu">
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">2-Stroke</a></li>
                                    <li><a href="#">Handbag</a></li>
                                    <li><a href="#">Clothing</a></li>
                                    </ul>
                                </li>
                                <li className="menu_item_children last_child">
                                    <a href="#">Wheel Simulators</a>
                                    <ul className="categorie_sub_menu">
                                    <li><a href="#">Bags & Cases</a></li>
                                    <li>
                                        <a href="#">Binoculars & Scopes</a>
                                    </li>
                                    <li>
                                        <a href="#">Film Photography</a>
                                    </li>
                                    <li>
                                        <a href="#">Lighting & Studio</a>
                                    </li>
                                    </ul>
                                    <div className="categorie_banner">
                                    <a href="#"
                                        ><img src="assets/img/bg/banner2.jpg" alt=""
                                    /></a>
                                    </div>
                                </li>
                                </ul>
                            </li>
                            <li className="menu_item_children">
                                <a href="#">
                                Wheels & Tires <img src={arrowDown} alt="arrow" className='arrowRight' /></a>
                                <ul className="categories_mega_menu">
                                <li className="menu_item_children">
                                    <a href="#">Dresses</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li><a href="#">Sweater</a></li>
                                        <li><a href="#">Evening</a></li>
                                        <li><a href="#">Day</a></li>
                                        <li><a href="#">Sports</a></li>
                                    </ul>
                                    </div>
                                </li>
                                <li className="menu_item_children">
                                    <a href="#">Handbags</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li><a href="#">Shoulder</a></li>
                                        <li><a href="#">Satchels</a></li>
                                        <li><a href="#">kids</a></li>
                                        <li><a href="#">coats</a></li>
                                    </ul>
                                    </div>
                                </li>
                                <li className="menu_item_children">
                                    <a href="#">shoes</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li><a href="#">Ankle Boots</a></li>
                                        <li>
                                        <a href="#">Clog sandals </a>
                                        </li>
                                        <li><a href="#">run</a></li>
                                        <li><a href="#">Books</a></li>
                                    </ul>
                                    </div>
                                </li>
                                <li className="menu_item_children">
                                    <a href="#">Clothing</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li>
                                        <a href="#">Coats Jackets </a>
                                        </li>
                                        <li><a href="#">Raincoats</a></li>
                                        <li><a href="#">Jackets</a></li>
                                        <li><a href="#">T-shirts</a></li>
                                    </ul>
                                    </div>
                                </li>
                                </ul>
                            </li>
                            <li className="menu_item_children">
                                <a href="#">
                                Furnitured & Decor <img src={arrowDown} alt="arrow" className='arrowRight' /></a>
                                <ul className="categories_mega_menu column_3">
                                <li className="menu_item_children">
                                    <a href="#">Chair</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li><a href="#">Dining room</a></li>
                                        <li><a href="#">bedroom</a></li>
                                        <li>
                                        <a href="#"> Home & Office</a>
                                        </li>
                                        <li><a href="#">living room</a></li>
                                    </ul>
                                    </div>
                                </li>
                                <li className="menu_item_children">
                                    <a href="#">Lighting</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li>
                                        <a href="#">Ceiling Lighting</a>
                                        </li>
                                        <li>
                                        <a href="#">Wall Lighting</a>
                                        </li>
                                        <li>
                                        <a href="#">Outdoor Lighting</a>
                                        </li>
                                        <li>
                                        <a href="#">Smart Lighting</a>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                <li className="menu_item_children">
                                    <a href="#">Sofa</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li><a href="#">Fabric Sofas</a></li>
                                        <li>
                                        <a href="#">Leather Sofas</a>
                                        </li>
                                        <li><a href="#">Corner Sofas</a></li>
                                        <li><a href="#">Sofa Beds</a></li>
                                    </ul>
                                    </div>
                                </li>
                                </ul>
                            </li>
                            <li className="menu_item_children">
                                <a href="#">
                                Turbo System <img src={arrowDown} alt="arrow" className='arrowRight' /></a>
                                <ul className="categories_mega_menu column_2">
                                <li className="menu_item_children">
                                    <a href="#">Brake Tools</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li><a href="#">Driveshafts</a></li>
                                        <li><a href="#">Spools</a></li>
                                        <li><a href="#">Diesel </a></li>
                                        <li><a href="#">Gasoline</a></li>
                                    </ul>
                                    </div>
                                </li>
                                <li className="menu_item_children">
                                    <a href="#">Emergency Brake</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li>
                                        <a href="#">Dolls for Girls</a>
                                        </li>
                                        <li>
                                        <a href="#"
                                            >Girls' Learning Toys</a
                                        >
                                        </li>
                                        <li>
                                        <a href="#"
                                            >Arts and Crafts for Girls</a
                                        >
                                        </li>
                                        <li>
                                        <a href="#"
                                            >Video Games for Girls</a
                                        >
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                </ul>
                            </li>
                            <li className="menu_item_children">
                                <a href="#">
                                Lighting <img src={arrowDown} alt="arrow" className='arrowRight' /></a>
                                <ul className="categories_mega_menu column_2">
                                <li className="menu_item_children">
                                    <a href="#">Check Trousers</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li><a href="#">Building</a></li>
                                        <li><a href="#">Electronics</a></li>
                                        <li>
                                        <a href="#">action figures </a>
                                        </li>
                                        <li>
                                        <a href="#"
                                            >specialty & boutique toy</a
                                        >
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                <li className="menu_item_children">
                                    <a href="#">Calculators</a>
                                    <div className="categorie_sub_menu">
                                    <ul>
                                        <li>
                                        <a href="#">Dolls for Girls</a>
                                        </li>
                                        <li>
                                        <a href="#"
                                            >Girls' Learning Toys</a
                                        >
                                        </li>
                                        <li>
                                        <a href="#"
                                            >Arts and Crafts for Girls</a
                                        >
                                        </li>
                                        <li>
                                        <a href="#"
                                            >Video Games for Girls</a
                                        >
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                </ul>
                            </li>
                            <li><a href="#"> Accessories</a></li>
                            <li><a href="#">Body Parts</a></li>
                            <li><a href="#">Perfomance Filters</a></li>
                            <li><a href="#"> Engine Parts</a></li>
                            <li className="hidden" style={{display: isHidden ? "none" : "list-item"}}>
                                <a
                                href="https://template.hasthemes.com/autima/autima/shop-left-sidebar.html"
                                >New Sofas</a
                                >
                            </li>
                            <li className="hidden" style={{display: isHidden ? "none" : "list-item"}}>
                                <a
                                href="https://template.hasthemes.com/autima/autima/shop-left-sidebar.html"
                                >Sleight Sofas</a
                                >
                            </li>
                            <li>
                                <a href="#" id="more-btn" onClick={toggleHiddenMenu}
                                >{toggleMenuTxt.icon} {toggleMenuTxt.text}</a
                                >
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="main_menu">
                        <nav>
                            <ul>
                            <li><Link to = "/">home</Link></li>
                            <li className="mega_items">
                                <Link to="/shop">shop
                                    <img src={arrowDown} alt="arrow-down" className='arrowDownIcon2' />
                                </Link>
                                <div className="mega_menu">
                                <ul className="mega_menu_inner">
                                    <li>
                                    <a href="#">Concrete Tools</a>
                                    <ul>
                                        <li>
                                        <Link to= "/shop">Cables & Connectors</Link>
                                        </li>
                                        <li>
                                        <Link to="/shop"
                                            >Printers, Ink & Toner</Link>
                                        </li>
                                        <li>
                                        <Link to="/shop"
                                            >Refurbished Tablets</Link>
                                        </li>
                                        <li>
                                        <Link to="/shop"
                                            >Optical Drives</Link>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                                <div className="banner_static_menu">
                                    <Link to="/shop"
                                    ><img src="assets/img/bg/banner1.jpg" alt=""
                                    /></Link>
                                </div>
                                </div>
                            </li>
                            <li className="mega_items">
                                <Link to = "/services" >services
                                <i>
                                    <img src={arrowDown} alt="arrow-down" className='arrowDownIcon2' />
                                </i>
                                </Link>
                                <div className="mega_menu">
                                <ul className="mega_menu_inner">
                                    <li>
                                    <a href="#">Concrete Tools</a>
                                    <ul>
                                        <li>
                                        <Link to="/shop">Cables & Connectors</Link>
                                        </li>
                                        <li>
                                        <Link to="/shop"
                                            >Printers, Ink & Toner</Link>
                                        </li>
                                        <li>
                                        <Link to="/shop"
                                            >Refurbished Tablets</Link>
                                        </li>
                                        <li>
                                        <Link to="/shop"
                                            >Optical Drives</Link>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                                <div className="banner_static_menu">
                                    <Link to="/shop"
                                    ><img src="assets/img/bg/banner1.jpg" alt=""
                                    /></Link>
                                </div>
                                </div>
                            </li>
                            <li><Link to = "/blog">blog</Link></li>
                            <li><Link to = "/about">about Us</Link></li>
                            <li><Link to = "/contact"> Contact Us</Link></li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </header>
        <div className="off_canvars_overlay"></div>
        <div ref={smallMenuRef} className={isActiveMenu ? "Offcanvas_menu canvas_padding active" : "Offcanvas_menu canvas_padding"}>
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="canvas_open" onClick={toggleActiveMenu}>
                <span>MENU</span>
                <a href="#"><img src={list} alt="menu" /></a>
                </div>
                <div className={isActiveMenu ? "Offcanvas_menu_wrapper active" : "Offcanvas_menu_wrapper"}>
                <div className="canvas_close" onClick={toggleActiveMenu}>
                    <a href="#">x</a>
                </div>
                <div className="top_right text-right">
                    <ul>
                        <li className="language">
                            <LocationModal />
                        </li>
                        <li
                        className="top_links"
                        data-bs-toggle="modal"
                        data-bs-target="#modal_login"
                    >
                        <a><i className="ion-android-person"></i>
                            {currentModal === 1 && <Login currentModal = {currentModal} setCurrentModal = {setCurrentModal}/>}
                            {currentModal === 2 && <Register currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                            {currentModal === 3 && <Reset currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                            {/* {currentModal === 4 && <SuccessModal currentModal = {currentModal} setCurrentModal = {setCurrentModal} />} */}
                            {currentModal === 4 && <ChangePassModal currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                            {currentModal === 5 && <GoBackModal currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                            {currentModal === 6 && <MoreInfoModal currentModal = {currentModal} setCurrentModal = {setCurrentModal} />}
                            {currentModal === 7 && <LoginTrue currentModal = {currentModal} setCurrentModal = {setCurrentModal}/>}
                            {currentModal === 8 && <CropEasy currentModal = {currentModal} setCurrentModal = {setCurrentModal}/>}
                        </a>
                    </li>
                    <li className="language">
                        <a href="index-5.html#"
                        ><img src={languageIcon} alt="languageIcon" />en-gb<img src={arrowDown} alt="arrow" className='arrowDownIcon'/></a>
                        <ul className="dropdown_language">
                    
                        <li>
                            <a href="index-5.html#"
                            ><img src={languageIcon} alt="languageIcon" />
                            English</a
                            >
                        </li>
                        <li>
                            <a href="index-5.html#"
                            ><img src={language2Icon} alt="languageIcon" />
                            Germany</a
                            >
                        </li>
                        </ul>
                    </li>
                    <li className="currency">
                        <a href="index-5.html#"
                        >$ USD<img src={arrowDown} alt="arrow" className='arrowDownIcon'/></a>
                        <ul className="dropdown_currency">
                        <li><a href="index-5.html#">EUR – Euro</a></li>
                        <li><a href="index-5.html#">GBP – British Pound</a></li>
                        <li><a href="index-5.html#">INR – India Rupee</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                <div className="Offcanvas_follow">
                    <label>Follow Us:</label>
                    <ul className="follow_link">
                    <li>
                        <a href="index-5.html#"
                        ><i className="ion-social-facebook"></i
                        ></a>
                    </li>
                    <li>
                        <a href="index-5.html#"
                        ><i className="ion-social-twitter"></i
                        ></a>
                    </li>
                    <li>
                        <a href="index-5.html#"
                        ><i className="ion-social-googleplus"></i
                        ></a>
                    </li>
                    <li>
                        <a href="index-5.html#"
                        ><i className="ion-social-youtube"></i
                        ></a>
                    </li>
                    </ul>
                </div>
                <div className="search-container">
                    <form action="index-5.html#">
                    <div className="search_box">
                        <input
                        placeholder="Search entire store here ..."
                        type="text"
                        />
                        <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="33" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </button>
                    </div>
                    </form>
                </div>
                <div id="menu" className="text-left">
                    <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children">
                        <a href="index-5.html#">Home</a>
                        <ul className="sub-menu">
                        <li><a href="index.html">Home 1</a></li>
                        <li><a href="index-2.html">Home 2</a></li>
                        <li><a href="index-3.html">Home 3</a></li>
                        <li><a href="index-4.html">Home 4</a></li>
                        <li><a href="index-5.html">Home 5</a></li>
                        <li><a href="index-6.html">Home 6</a></li>
                        <li><a href="index-7.html">Home 7</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="index-5.html#">Shop</a>
                        <ul className="sub-menu">
                        <li className="menu-item-has-children">
                            <a href="index-5.html#">Shop Layouts</a>
                            <ul className="sub-menu">
                            <li><a href="shop.html">shop</a></li>
                            <li><a href="shop-fullwidth.html">Full Width</a></li>
                            <li>
                                <a href="shop-fullwidth-list.html"
                                >Full Width list</a
                                >
                            </li>
                            <li>
                                <a href="shop-right-sidebar.html">Right Sidebar </a>
                            </li>
                            <li>
                                <a href="shop-right-sidebar-list.html">
                                Right Sidebar list</a
                                >
                            </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"  data-bs-toggle="modal" data-bs-target="#modal_login">
                            <a><i className="ion-android-person"></i> My Account</a>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="index-5.html#">Product Types</a>
                            <ul className="sub-menu">
                            <li>
                                <a href="product-details.html">product details</a>
                            </li>
                            <li>
                                <a href="product-sidebar.html">product sidebar</a>
                            </li>
                            <li>
                                <a href="product-grouped.html">product grouped</a>
                            </li>
                            <li>
                                <a href="variable-product.html">product variable</a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="index-5.html#">blog</a>
                        <ul className="sub-menu">
                        <li><a href="blog.html">blog</a></li>
                        <li><a href="blog-details.html">blog details</a></li>
                        <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                        <li><a href="blog-sidebar.html">blog sidebar</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="index-5.html#">pages </a>
                        <ul className="sub-menu">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">services</a></li>

                        <li><a href="login.html">login</a></li>
                        <li><a href="compare.html">compare</a></li>
                        <li><a href="privacy-policy.html">privacy policy</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="my-account.html">my account</a>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="about.html">About Us</a>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="contact.html"> Contact Us</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <a id='scrollUp' className="scrollUpIcon"  href="#scroll-up" style={{display: showScrollBtn ? "flex" : "none"}}></a>
    </div>                                            
  )
}

export default Header