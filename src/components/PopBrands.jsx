import React from 'react';

import product1 from "../assets/img/product/image1.png";
import product2 from "../assets/img/product/image2.png";
import product3 from "../assets/img/product/image3.png";
import product4 from "../assets/img/product/image4.png";
import product5 from "../assets/img/product/image5.png";
import product6 from "../assets/img/product/image6.png";


function PopBrands() {
  return (
    <section className="mb-50">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section_title">
                        <h2>
                            <span> <strong>Explore Popular</strong>Brends</span>
                        </h2>
                    </div>
                    <div className='product__categories'>
                        <div className="product__brands product__category">
                            <img src={product1} alt="product" />
                            <p>Pop Brands</p>
                        </div>
                        <div className="product__brands product__category">
                            <img src={product2} alt="product" />
                            <p>Pop Brands</p>
                        </div>
                        <div className="product__brands product__category">
                            <img src={product3} alt="product" />
                            <p>Pop Brands</p>
                        </div>
                        <div className="product__brands product__category">
                            <img src={product4} alt="product" />
                            <p>Pop Brands</p>
                        </div>
                        <div className="product__brands product__category">
                            <img src={product5} alt="product" />
                            <p>Pop Brands</p>
                        </div>
                        <div className="product__brands product__category">
                            <img src={product6} alt="product" />
                            <p>Pop Brands</p>
                        </div>
                        <div className="product__brands product__category">
                            <img src={product1} alt="product" />
                            <p>Pop Brands</p>
                        </div>
                        <div className="product__brands product__category">
                            <img src={product2} alt="product" />
                            <p>Pop Brands</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopBrands




