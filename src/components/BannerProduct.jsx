import React from 'react';
import {Link} from "react-router-dom";

import banner1 from "../assets/img/bg/banner11.png";
import banner2 from "../assets/img/bg/banner10.png";

function BannerProduct() {
  return (
    <section className="banner_area mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner_container">
              <div className="single_banner">
                <div className="banner_thumb">
                  <Link to="/"
                    ><img src={banner1} alt="banner"
                  /></Link>
                  {/* <div className="banner_text">
                    <h3>Car Audio</h3>
                    <h2>Super Natural Sound</h2>
                    <Link to="/shop">Shop Now</Link>
                  </div> */}
                </div>
              </div>
              <div className="single_banner">
                <div className="banner_thumb">
                  <Link to="/"
                    ><img src={banner2} alt="banner"
                  /></Link>
                  {/* <div className="banner_text">
                    <h3>All - New</h3>
                    <h2>Perfomance Parts</h2>
                    <Link to="/">Shop Now</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerProduct