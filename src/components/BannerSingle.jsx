import React from 'react'
import banner from "../assets/img/bg/banner5.jpg";
import {Link} from "react-router-dom";


function BannerSingle() {
  return (
    <section className="banner_area mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="single_banner banner_fullwidth">
              <div className="banner_thumb">
                <Link to="/"
                  ><img src={banner} alt="banner"
                /></Link>
                <div className="banner_text">
                  <h2>Win the cost of your</h2>
                  <h3>Tyres back</h3>
                  <p>Chance to win when you buy 2 + Pirell Tyres in March</p>
                  <Link to ="/shop">Discover Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSingle