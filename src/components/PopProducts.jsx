import React from 'react';
import product19 from "../assets/img/product/product19.jpg";
import product11 from "../assets/img/product/product11.jpg";
import product12 from "../assets/img/product/product12.jpg";
import product13 from "../assets/img/product/product13.jpg";
import product14 from "../assets/img/product/product14.jpg";
import product15 from "../assets/img/product/product15.jpg";
import product16 from "../assets/img/product/product16.jpg";
import product17 from "../assets/img/product/product17.jpg";
import product1 from "../assets/img/product/product1.jpg";
import product2 from "../assets/img/product/product2.jpg";
import product3 from "../assets/img/product/product3.jpg";
import product4 from "../assets/img/product/product4.jpg";
import product5 from "../assets/img/product/product5.jpg";
import product18 from "../assets/img/product/product18.jpg";


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
        autoplay: true,
        loop: true,
        nav: true,
        autoplayTimeout: 8000,
        items: 5,
        margin: 20,
        dots: false,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#a9a9a9" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>' , '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#a9a9a9" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            576: {
                items: 2,
                dots: true,
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

function PopProducts() {
  return (
    <section className="product_area mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title">
              <h2>
                <span> <strong>Popular</strong>Products</span>
              </h2>
            </div>
            <OwlCarousel  className="product_carousel product_column5 testimonial_active owl-carousel" {...options}>
              <div className="single_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                    >
                  </h3>
                  <p className="manufacture_product">
                    <a href="#">Accessories</a>
                  </p>
                </div>
                <div className="product_thumb">
                  <a className="primary_img" href="/shop/product-detalis/id"
                    ><img src={product19} alt="product"
                  /></a>
                  <a className="secondary_img" href="/shop/product-detalis/id"
                    ><img src={product11} alt="product"
                  /></a>
                  <div className="label_product">
                    <span className="label_sale">-57%</span>
                  </div>

                  <div className="action_links">
                    <ul>
                      <li className="quick_button">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modal_box"
                          title="quick view"
                        >
                          <span className="lnr lnr-magnifier"></span
                        ></a>
                      </li>
                      <li className="wishlist">
                        <a href="wishlist.html" title="Add to Wishlist"
                          ><span className="lnr lnr-heart"></span
                        ></a>
                      </li>
                      <li className="compare">
                        <a href="compare.html" title="compare"
                          ><span className="lnr lnr-sync"></span
                        ></a>
                      </li>
                    </ul>
                  </div>
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
                  <div className="product_footer d-flex align-items-center">
                    <div className="price_box">
                      <span className="regular_price">$180.00</span>
                    </div>
                    <div className="add_to_cart">
                      <a href="cart.html" title="add to cart"
                        ><span className="lnr lnr-cart"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >Bose SoundLink Bluetooth Speaker</a
                    >
                  </h3>
                  <p className="manufacture_product">
                    <a href="#">Accessories</a>
                  </p>
                </div>
                <div className="product_thumb">
                  <a className="primary_img" href="/shop/product-detalis/id"
                    ><img src={product12} alt="product"
                  /></a>
                  <a className="secondary_img" href="/shop/product-detalis/id"
                    ><img src={product13} alt="product"
                  /></a>
                  <div className="label_product">
                    <span className="label_sale">-47%</span>
                  </div>

                  <div className="action_links">
                    <ul>
                      <li className="quick_button">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modal_box"
                          title="quick view"
                        >
                          <span className="lnr lnr-magnifier"></span
                        ></a>
                      </li>
                      <li className="wishlist">
                        <a href="wishlist.html" title="Add to Wishlist"
                          ><span className="lnr lnr-heart"></span
                        ></a>
                      </li>
                      <li className="compare">
                        <a href="compare.html" title="compare"
                          ><span className="lnr lnr-sync"></span
                        ></a>
                      </li>
                    </ul>
                  </div>
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
                  <div className="product_footer d-flex align-items-center">
                    <div className="price_box">
                      <span className="current_price">$160.00</span>
                      <span className="old_price">$3200.00</span>
                    </div>
                    <div className="add_to_cart">
                      <a href="cart.html" title="add to cart"
                        ><span className="lnr lnr-cart"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >Variable with soldout product for title</a
                    >
                  </h3>
                  <p className="manufacture_product">
                    <a href="#">Accessories</a>
                  </p>
                </div>
                <div className="product_thumb">
                  <a className="primary_img" href="/shop/product-detalis/id"
                    ><img src={product15} alt="product"
                  /></a>
                  <a className="secondary_img" href="/shop/product-detalis/id"
                    ><img src={product14} alt="product"
                  /></a>
                  <div className="label_product">
                    <span className="label_sale">-57%</span>
                  </div>

                  <div className="action_links">
                    <ul>
                      <li className="quick_button">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modal_box"
                          title="quick view"
                        >
                          <span className="lnr lnr-magnifier"></span
                        ></a>
                      </li>
                      <li className="wishlist">
                        <a href="wishlist.html" title="Add to Wishlist"
                          ><span className="lnr lnr-heart"></span
                        ></a>
                      </li>
                      <li className="compare">
                        <a href="compare.html" title="compare"
                          ><span className="lnr lnr-sync"></span
                        ></a>
                      </li>
                    </ul>
                  </div>
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
                  <div className="product_footer d-flex align-items-center">
                    <div className="price_box">
                      <span className="regular_price">$150.00</span>
                    </div>
                    <div className="add_to_cart">
                      <a href="cart.html" title="add to cart"
                        ><span className="lnr lnr-cart"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >Lorem ipsum dolor sit amet, consectetur</a
                    >
                  </h3>
                  <p className="manufacture_product">
                    <a href="#">Accessories</a>
                  </p>
                </div>
                <div className="product_thumb">
                  <a className="primary_img" href="/shop/product-detalis/id"
                    ><img src={product16} alt="product"
                  /></a>
                  <a className="secondary_img" href="/shop/product-detalis/id"
                    ><img src={product17} alt="product"
                  /></a>
                  <div className="label_product">
                    <span className="label_sale">-57%</span>
                  </div>

                  <div className="action_links">
                    <ul>
                      <li className="quick_button">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modal_box"
                          title="quick view"
                        >
                          <span className="lnr lnr-magnifier"></span
                        ></a>
                      </li>
                      <li className="wishlist">
                        <a href="wishlist.html" title="Add to Wishlist"
                          ><span className="lnr lnr-heart"></span
                        ></a>
                      </li>
                      <li className="compare">
                        <a href="compare.html" title="compare"
                          ><span className="lnr lnr-sync"></span
                        ></a>
                      </li>
                    </ul>
                  </div>
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
                  <div className="product_footer d-flex align-items-center">
                    <div className="price_box">
                      <span className="regular_price">$175.00</span>
                    </div>
                    <div className="add_to_cart">
                      <a href="cart.html" title="add to cart"
                        ><span className="lnr lnr-cart"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >JBL Flip 3 Splasroof Portable Bluetooth 2</a
                    >
                  </h3>
                  <p className="manufacture_product">
                    <a href="#">Accessories</a>
                  </p>
                </div>
                <div className="product_thumb">
                  <a className="primary_img" href="/shop/product-detalis/id"
                    ><img src={product18} alt="product"
                  /></a>
                  <a className="secondary_img" href="/shop/product-detalis/id"
                    ><img src={product1} alt="product"
                  /></a>
                  <div className="label_product">
                    <span className="label_sale">-07%</span>
                  </div>

                  <div className="action_links">
                    <ul>
                      <li className="quick_button">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modal_box"
                          title="quick view"
                        >
                          <span className="lnr lnr-magnifier"></span
                        ></a>
                      </li>
                      <li className="wishlist">
                        <a href="wishlist.html" title="Add to Wishlist"
                          ><span className="lnr lnr-heart"></span
                        ></a>
                      </li>
                      <li className="compare">
                        <a href="compare.html" title="compare"
                          ><span className="lnr lnr-sync"></span
                        ></a>
                      </li>
                    </ul>
                  </div>
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
                  <div className="product_footer d-flex align-items-center">
                    <div className="price_box">
                      <span className="current_price">$180.00</span>
                      <span className="old_price">$420.00</span>
                    </div>
                    <div className="add_to_cart">
                      <a href="cart.html" title="add to cart"
                        ><span className="lnr lnr-cart"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >Accusantium dolorem Security Camera</a
                    >
                  </h3>
                  <p className="manufacture_product">
                    <a href="#">Accessories</a>
                  </p>
                </div>
                <div className="product_thumb">
                  <a className="primary_img" href="/shop/product-detalis/id"
                    ><img src={product2} alt="product"
                  /></a>
                  <a className="secondary_img" href="/shop/product-detalis/id"
                    ><img src={product3} alt="product"
                  /></a>
                  <div className="label_product">
                    <span className="label_sale">-57%</span>
                  </div>

                  <div className="action_links">
                    <ul>
                      <li className="quick_button">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modal_box"
                          title="quick view"
                        >
                          <span className="lnr lnr-magnifier"></span
                        ></a>
                      </li>
                      <li className="wishlist">
                        <a href="wishlist.html" title="Add to Wishlist"
                          ><span className="lnr lnr-heart"></span
                        ></a>
                      </li>
                      <li className="compare">
                        <a href="compare.html" title="compare"
                          ><span className="lnr lnr-sync"></span
                        ></a>
                      </li>
                    </ul>
                  </div>
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
                  <div className="product_footer d-flex align-items-center">
                    <div className="price_box">
                      <span className="current_price">$140.00</span>
                      <span className="old_price">$320.00</span>
                    </div>
                    <div className="add_to_cart">
                      <a href="cart.html" title="add to cart"
                        ><span className="lnr lnr-cart"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product">
                <div className="product_name">
                  <h3>
                    <a href="/shop/product-detalis/id"
                      >Koss Porta Pro On Ear Headphones
                    </a>
                  </h3>
                  <p className="manufacture_product">
                    <a href="#">Accessories</a>
                  </p>
                </div>
                <div className="product_thumb">
                  <a className="primary_img" href="/shop/product-detalis/id"
                    ><img src={product4} alt="product"
                  /></a>
                  <a className="secondary_img" href="/shop/product-detalis/id"
                    ><img src={product5} alt="product"
                  /></a>
                  <div className="label_product">
                    <span className="label_sale">-57%</span>
                  </div>

                  <div className="action_links">
                    <ul>
                      <li className="quick_button">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modal_box"
                          title="quick view"
                        >
                          <span className="lnr lnr-magnifier"></span
                        ></a>
                      </li>
                      <li className="wishlist">
                        <a href="wishlist.html" title="Add to Wishlist"
                          ><span className="lnr lnr-heart"></span
                        ></a>
                      </li>
                      <li className="compare">
                        <a href="compare.html" title="compare"
                          ><span className="lnr lnr-sync"></span
                        ></a>
                      </li>
                    </ul>
                  </div>
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
                  <div className="product_footer d-flex align-items-center">
                    <div className="price_box">
                      <span className="regular_price">$160.00</span>
                    </div>
                    <div className="add_to_cart">
                      <a href="cart.html" title="add to cart"
                        ><span className="lnr lnr-cart"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopProducts

