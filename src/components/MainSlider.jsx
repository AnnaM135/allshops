import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../assets/css/slick.css";
import slider1 from "../assets/img/slider/slider1.jpg";
import slider2 from "../assets/img/slider/slider2.jpg";
import slider3 from "../assets/img/slider/slider3.jpg";
import banner1 from "../assets/img/bg/slider-banner-1.jpg";
import banner2 from "../assets/img/bg/slider-banner-2.jpg";
import banner3 from "../assets/img/bg/slider-banner-3.jpg";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function MainSlider() {
    const [imgArr] = useState([slider1, slider2, slider3])
    return (


        <section className="slider_section mb-5 mt-4">
        <div className="container">
            <div className="row">
            <div className="col-lg-9 col-12">
                <OwlCarousel 
                    animateOut={true}
                    autoplay={true}
                    loop={true}
                    nav={false} 
                    autoplayTimeout={8000}
                    items={1}
                    dots={true}  className="slider_area slider_three slider_new5 owl-carousel">
                    {
                        imgArr.map((item, index) => {
                            return(
                                <div key={index}
                                    className="single_slider d-flex align-items-center"
                                    style={{backgroundImage: "url("+item+")"}}
                                >
                                    <div className="slider_content slide-effect">
                                        <h2 className='slideUp'>GM 10 & 12</h2>
                                        <h1 className='slideUp slideUp2'>Bolt Rear Disc Brake Conversions</h1>
                                        <Link to = "/shop" className="button slideUp slideUp3">shopping now</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </OwlCarousel> 
            </div>
            <div className="col-lg-3 col-12">
                <div className="row mx-n2 mt-lg-n3">
                <div className="col-lg-12 col-md-4 col-sm-6 col-12">
                    <div className="sidebar_banner m-0">
                    <div className="banner_thumb">
                        <Link to = "/shop"
                        ><img src={banner1} alt="banner"
                        /></Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 col-12 mt-3">
                    <div className="sidebar_banner m-0">
                    <div className="banner_thumb">
                        <Link to = "/shop"
                        ><img src={banner2} alt="banner"
                        /></Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-6 col-12 mt-3">
                    <div className="sidebar_banner m-0">
                    <div className="banner_thumb">
                        <Link to = "/shop"
                        ><img src={banner3} alt="banner"
                        /></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>


  )
}

export default MainSlider