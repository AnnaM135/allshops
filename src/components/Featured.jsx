import React from 'react';

import featured from "../assets/img/featured/featured.jpg";
import featured1 from "../assets/img/featured/featured1.jpg";
import featured2 from "../assets/img/featured/featured2.jpg";
import featured3 from "../assets/img/featured/featured3.jpg";
import featured5 from "../assets/img/featured/featured5.jpg";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
        autoplay: true,
        loop: true,
        nav: true,
        autoplayTimeout: 8000,
        items: 3,
        dots: false,
        responsiveClass: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#a9a9a9" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>' , '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#a9a9a9" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>'],
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },

        }
}

function Featured() {
  return (
    <section className="featured_categories featured_c_three mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title">
              <h2>
                <span> <strong>Featured</strong>Categories</span>
              </h2>
            </div>
            <div className="featured_container">
              <OwlCarousel className="featured_carousel featured_column3 testimonial_active owl-carousel" {...options}>
                <div className="single_items">
                  <div className="single_featured">
                    <div className="featured_thumb">
                      <a href="#"
                        ><img src={featured} alt="featured"
                      /></a>
                    </div>
                    <div className="featured_content">
                      <h3 className="product_name">
                        <a href="#">Body Parts</a>
                      </h3>
                      <div className="sub_featured">
                        <ul>
                          <li><a href="#">Handbag</a></li>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Shoes</a></li>
                        </ul>
                      </div>
                      <a className="view_more" href="#">shop now</a>
                    </div>
                  </div>
                  <div className="single_featured">
                    <div className="featured_thumb">
                      <a href="#"
                        ><img src={featured1} alt="featured"
                      /></a>
                    </div>
                    <div className="featured_content">
                      <h3 className="product_name">
                        <a href="#">Brake Parts</a>
                      </h3>
                      <div className="sub_featured">
                        <ul>
                          <li><a href="#">Handbag</a></li>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Shoes</a></li>
                        </ul>
                      </div>
                      <a className="view_more" href="#">shop now</a>
                    </div>
                  </div>
                </div>
                <div className="single_items">
                  <div className="single_featured">
                    <div className="featured_thumb">
                      <a href="#"
                        ><img src={featured2} alt="featured"
                      /></a>
                    </div>
                    <div className="featured_content">
                      <h3 className="product_name">
                        <a href="#">Lighting</a>
                      </h3>
                      <div className="sub_featured">
                        <ul>
                          <li><a href="#">Handbag</a></li>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Shoes</a></li>
                        </ul>
                      </div>
                      <a className="view_more" href="#">shop now</a>
                    </div>
                  </div>
                  <div className="single_featured">
                    <div className="featured_thumb">
                      <a href="#"
                        ><img src={featured3} alt="featured"
                      /></a>
                    </div>
                    <div className="featured_content">
                      <h3 className="product_name">
                        <a href="#">Moto Oil</a>
                      </h3>
                      <div className="sub_featured">
                        <ul>
                          <li><a href="#">Handbag</a></li>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Shoes</a></li>
                        </ul>
                      </div>
                      <a className="view_more" href="#">shop now</a>
                    </div>
                  </div>
                </div>
                <div className="single_items">
                  <div className="single_featured">
                    <div className="featured_thumb">
                      <a href="#"
                        ><img src={featured5} alt="featured"
                      /></a>
                    </div>
                    <div className="featured_content">
                      <h3 className="product_name">
                        <a href="#">Turbo Systems</a>
                      </h3>
                      <div className="sub_featured">
                        <ul>
                          <li><a href="#">Handbag</a></li>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Shoes</a></li>
                        </ul>
                      </div>
                      <a className="view_more" href="#">shop now</a>
                    </div>
                  </div>
                  <div className="single_featured">
                    <div className="featured_thumb">
                      <a href="#"
                        ><img src={featured3} alt="featured"
                      /></a>
                    </div>
                    <div className="featured_content">
                      <h3 className="product_name">
                        <a href="#">Wheels & Tires</a>
                      </h3>
                      <div className="sub_featured">
                        <ul>
                          <li><a href="#">Handbag</a></li>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Shoes</a></li>
                        </ul>
                      </div>
                      <a className="view_more" href="#">shop now</a>
                    </div>
                  </div>
                </div>
                <div className="single_items">
                  <div className="single_featured">
                    <div className="featured_thumb">
                      <a href="#"
                        ><img src={featured3} alt="featured"
                      /></a>
                    </div>
                    <div className="featured_content">
                      <h3 className="product_name">
                        <a href="#">Body Parts</a>
                      </h3>
                      <div className="sub_featured">
                        <ul>
                          <li><a href="#">Handbag</a></li>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Shoes</a></li>
                        </ul>
                      </div>
                      <a className="view_more" href="#">shop now</a>
                    </div>
                  </div>
                  <div className="single_featured">
                    <div className="featured_thumb">
                      <a href="#"
                        ><img src={featured5} alt="featured"
                      /></a>
                    </div>
                    <div className="featured_content">
                      <h3 className="product_name">
                        <a href="#">Brake Parts</a>
                      </h3>
                      <div className="sub_featured">
                        <ul>
                          <li><a href="#">Handbag</a></li>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Clothing</a></li>
                          <li><a href="#">Shoes</a></li>
                        </ul>
                      </div>
                      <a className="view_more" href="#">shop now</a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured