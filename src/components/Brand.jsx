import React from 'react';
import {Link} from "react-router-dom";

import brand from "../assets/img/brand/brand.png";
import brand1 from "../assets/img/brand/brand1.png";
import brand2 from "../assets/img/brand/brand2.png";
import brand3 from "../assets/img/brand/brand3.png";
import brand4 from "../assets/img/brand/brand4.png";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 4000,
    items: 5,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 5,
        },

    }
}


function Brand() {
  return (
    <div className="brand_area mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <OwlCarousel className="brand_container owl-carousel" {...options}>
              <div className="single_brand">
                <Link to="/"
                  ><img src={brand} alt="brand"
                /></Link>
              </div>
              <div className="single_brand">
                <Link to="/"
                  ><img src={brand1} alt="brand"
                /></Link>
              </div>
              <div className="single_brand">
                <Link to="/"
                  ><img src={brand2} alt="brand"
                /></Link>
              </div>
              <div className="single_brand">
                <Link to="/"
                  ><img src={brand3} alt="brand"
                /></Link>
              </div>
              <div className="single_brand">
                <Link to="/"
                  ><img src={brand4} alt="brand"
                /></Link>
              </div>
              <div className="single_brand">
                <Link to="/"
                  ><img src={brand2} alt="brand"
                /></Link>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand