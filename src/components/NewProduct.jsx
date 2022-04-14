import React from 'react';

import product2 from "../assets/img/product/product2.jpg";
import product3 from "../assets/img/product/product3.jpg";
import product5 from "../assets/img/product/product5.jpg";
import product6 from "../assets/img/product/product6.jpg";
import product7 from "../assets/img/product/product7.jpg";
import product8 from "../assets/img/product/product8.jpg";
import product9 from "../assets/img/product/product9.jpg";
import product10 from "../assets/img/product/product10.jpg";
import product11 from "../assets/img/product/product11.jpg";
import product12 from "../assets/img/product/product12.jpg";
import product13 from "../assets/img/product/product13.jpg";
import product14 from "../assets/img/product/product14.jpg";
import product15 from "../assets/img/product/product15.jpg";
import product16 from "../assets/img/product/product16.jpg";
import product17 from "../assets/img/product/product17.jpg";
import product18 from "../assets/img/product/product18.jpg";
import product19 from "../assets/img/product/product19.jpg";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    autoplay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 8000,
    items: 2,
    margin: 20,
    dots: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#a9a9a9" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>' , '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#a9a9a9" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        768: {
            items: 1,
            margin: 0,
        },
        992: {
            items: 2,
        },
    }
}

function NewProduct() {
  return (
    <section className="new_product_area mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product_tab_button tab_button2">
              <ul className="nav" role="tablist" id="nav-tab">
                <li>
                  <a
                    className="active"
                    data-toggle="tab"
                    href="/featured"
                    role="tab"
                    aria-controls="featured"
                    aria-selected="true"
                    ><span>New</span> Products</a
                  >
                </li>
                <li>
                  <a
                    data-toggle="tab"
                    href="/view"
                    role="tab"
                    aria-controls="view"
                    aria-selected="false"
                    ><span>Most</span> View Products</a
                  >
                </li>
                <li>
                  <a
                    data-toggle="tab"
                    href="/bestseller"
                    role="tab"
                    aria-controls="bestseller"
                    aria-selected="false"
                    ><span>Bestseller</span> Products</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="featured" role="tabpanel">
            <div className="new_product_container">
              <div className="sample_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >1. New and sale new badge product
                    </a>
                  </h3>
                  <div className="manufacture_product">
                    <p><a href="#">Hewlett-Packard</a></p>
                  </div>
                </div>
                <div className="product_thumb">
                  <a href="#"
                    ><img src={product19} alt="product"
                  /></a>
                </div>
                <div className="product_content">
                  <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="price_box">
                    <span className="current_price">$160.00</span>
                    <span className="old_price">$180.00</span>
                  </div>
                  <div className="quantity_progress">
                    <p className="product_sold">Sold: <span>199</span></p>
                    <p className="product_available">Availabe: <span>9800</span></p>
                  </div>
                  <div className="bar_percent"></div>
                </div>
              </div>
              <OwlCarousel className="product_carousel product_bg product_column2 testimonial_active owl-carousel" {...options}>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Lid Cover Cookware Steel Hybrid</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product2} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product12} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product5} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Kodak PIXPRO Astro Zoom AZ421 16 MP 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="regular_price">$160.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product10} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product11} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product13} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Kodak PIXPRO Astro Zoom AZ421 16 MP 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product7} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product17} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product15} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Lid Cover Cookware Steel Hybrid</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product16} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JKodak PIXPRO Astro Zoom AZ421 16 MP 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product17} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                        <ul>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="ion-star"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="price_box">
                        <span className="regular_price">$280.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product18} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="tab-pane fade" id="view" role="tabpanel">
            <div className="new_product_container">
              <div className="sample_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >Beats EP Wired On-Ear Headphone-Black</a
                    >
                  </h3>
                  <div className="manufacture_product">
                    <p><a href="#">Canon</a></p>
                  </div>
                </div>
                <div className="product_thumb">
                  <a href="#"
                    ><img src={product15} alt="product"
                  /></a>
                </div>
                <div className="product_content">
                <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="price_box">
                    <span className="current_price">$160.00</span>
                    <span className="old_price">$180.00</span>
                  </div>
                  <div className="quantity_progress">
                    <p className="product_sold">Sold: <span>199</span></p>
                    <p className="product_available">Availabe: <span>9800</span></p>
                  </div>
                  <div className="bar_percent"></div>
                </div>
              </div>
              <OwlCarousel className="product_carousel product_bg product_column2 testimonial_active owl-carousel" {...options} >
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Lid Cover Cookware Steel Hybrid</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product10} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product11} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$280.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product12} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Kodak PIXPRO Astro Zoom AZ421 16 MP 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product13} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product11} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$280.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product14} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Kodak PIXPRO Astro Zoom AZ421 16 MP 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product15} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product16} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product17} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Lid Cover Cookware Steel Hybrid</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product18} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JKodak PIXPRO Astro Zoom AZ421 16 MP 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product19} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product2} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="tab-pane fade" id="bestseller" role="tabpanel">
            <div className="new_product_container">
              <div className="sample_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >Koss KPH7 Lightweight Portable Headphone</a
                    >
                  </h3>
                  <div className="manufacture_product">
                    <p><a href="#">Accessories</a></p>
                  </div>
                </div>
                <div className="product_thumb">
                  <a href="#"
                    ><img src={product3} alt="product"
                  /></a>
                </div>
                <div className="product_content">
                <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="price_box">
                    <span className="current_price">$160.00</span>
                    <span className="old_price">$180.00</span>
                  </div>
                  <div className="quantity_progress">
                    <p className="product_sold">Sold: <span>199</span></p>
                    <p className="product_available">Availabe: <span>9800</span></p>
                  </div>
                  <div className="bar_percent"></div>
                </div>
              </div>
              <OwlCarousel className="product_carousel product_bg product_column2 testimonial_active owl-carousel" {...options} >
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Lid Cover Cookware Steel Hybrid</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product5} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product6} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$280.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product7} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Kodak PIXPRO Astro Zoom AZ421 16 MP 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$160.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product8} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product9} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$280.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product10} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Kodak PIXPRO Astro Zoom AZ421 16 MP 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product11} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product12} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product13} alt="product"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="small_product">
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Lid Cover Cookware Steel Hybrid</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product14} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >JKodak PIXPRO Astro Zoom AZ421 16 MP 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="regular_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product15} alt="product"
                      /></a>
                    </div>
                  </div>
                  <div className="single_product">
                    <div className="product_content">
                      <h3>
                        <a href="/shop/product-detalis/id"
                          >Nonstick Dishwasher On-Ear Headphones 2</a
                        >
                      </h3>
                      <div className="product_ratings">
                    <ul>
                      <li>
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                      <div className="price_box">
                        <span className="current_price">$160.00</span>
                        <span className="old_price">$180.00</span>
                      </div>
                    </div>
                    <div className="product_thumb">
                      <a className="primary_img" href="/shop/product-detalis/id"
                        ><img src={product16} alt="product"
                      /></a>
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

export default NewProduct