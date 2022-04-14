import React from 'react';

import product1 from "../assets/img/product/image1.png";
import product2 from "../assets/img/product/image2.png";
import product3 from "../assets/img/product/image3.png";
import product4 from "../assets/img/product/image4.png";
import product5 from "../assets/img/product/image5.png";
import product6 from "../assets/img/product/image6.png";

// const options = {
//     autoplay: true,
//     loop: true,
//     nav: false,
//     autoplayTimeout: 4000,
//     items: 8,
//     dots: false,
//     center: true,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 2,
//         },
//         480: {
//             items: 2,
//         },
//         768: {
//             items: 4,
//         },
//         992: {
//             items: 4,
//         },
//         1200: {
//             items: 8,
//         },

//     }
// }

function PopCategories() {
  return (
    <section className="mb-50">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section_title">
                        <h2>
                            <span> <strong>Explore Popular</strong>Categories</span>
                        </h2>
                    </div>
                    <div className='product__categories'>
                        <div className="product__category">
                            <img src={product1} alt="product" />
                        </div>
                        <div className="product__category">
                            <img src={product2} alt="product" />
                        </div>
                        <div className="product__category">
                            <img src={product3} alt="product" />
                        </div>
                        <div className="product__category">
                            <img src={product4} alt="product" />
                        </div>
                        <div className="product__category">
                            <img src={product5} alt="product" />
                        </div>
                        <div className="product__category">
                            <img src={product6} alt="product" />
                        </div>
                        <div className="product__category">
                            <img src={product1} alt="product" />
                        </div>
                        <div className="product__category">
                            <img src={product2} alt="product" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopCategories




