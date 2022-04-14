import React from 'react'
import shipping1 from "../assets/img/about/shipping1.png";
import shipping2 from "../assets/img/about/shipping2.png";
import shipping3 from "../assets/img/about/shipping3.png";
import shipping4 from "../assets/img/about/shipping4.png";


function Shipping() {
  return (
    <section className="shipping_area mb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="shipping_inner">
              <div className="single_shipping">
                <div className="shipping_icone">
                  <img src={shipping1} alt="shipping" />
                </div>
                <div className="shipping_content">
                  <h2>Free Shipping</h2>
                  <p>Free shipping on all US order</p>
                </div>
              </div>
              <div className="single_shipping">
                <div className="shipping_icone">
                  <img src={shipping2} alt="shipping" />
                </div>
                <div className="shipping_content">
                  <h2>Support 24/7</h2>
                  <p>Contact us 24 hours a day</p>
                </div>
              </div>
              <div className="single_shipping">
                <div className="shipping_icone">
                  <img src={shipping3} alt="shipping" />
                </div>
                <div className="shipping_content">
                  <h2>100% Money Back</h2>
                  <p>You have 30 days to Return</p>
                </div>
              </div>
              <div className="single_shipping">
                <div className="shipping_icone">
                  <img src={shipping4} alt="shipping" />
                </div>
                <div className="shipping_content">
                  <h2>Payment Secure</h2>
                  <p>We ensure secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shipping