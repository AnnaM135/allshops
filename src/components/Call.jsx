import React from 'react'
import post_1 from "../assets/img/s-product/post1.jpg";
import post_2 from "../assets/img/s-product/post2.jpg";
import post_3 from "../assets/img/s-product/post3.jpg";
import instagram from "../assets/img/s-product/instagram.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const topOptions = {
  autoplay: true,
  slidesToShow: 7,
  dots: false,
  arrows: false,
  rows: 1,
  infinite: true,
  cssEase: 'linear',
  slidesToScroll: -3,
}

const bottomOptions = {
  autoplay: true,
  slidesToShow: 7,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  rows: 1,
  infinite: true,
  cssEase: 'linear',
  rtl: false,
}

function Call() {
  return (
    <section className="posts">
      <Slider className="posts__top" {...topOptions}>
        <div className="post__panel">
          <img src={post_1} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_2} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_3} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_1} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_2} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_3} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_1} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_2} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_3} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_1} alt="post" />
        </div>
      </Slider>
      
      <Slider className="posts__bottom" {...bottomOptions}>
        <div className="post__panel">
          <img src={post_3} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_1} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_2} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_1} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_2} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_3} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_1} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_2} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_3} alt="post" />
        </div>
        <div className="post__panel">
          <img src={post_1} alt="post" />
        </div>
      </Slider>
      <div className="media__contacts">
        <img src={instagram} alt="instagram" />
        <h2>INSTAGRAM</h2>
        <p>@ALLSHOPS</p>
        <button>Follow</button>
      </div>
    </section>
  )
}

export default Call