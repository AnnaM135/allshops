import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/img/logo/logo.svg";
import payment from "../assets/img/icon/payment.png"

function Footer() {
  return (
    <footer className="footer_widgets">
    <div className="container">
      <div className="footer_top">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="widgets_container contact_us">
              <div className="footer_logo">
                <Link to = "/"
                  ><img src={logo} alt="logo"
                /></Link>
              </div>
              <div className="footer_contact">
                <p>
                  We are a team of designers and developers that create high
                  quality Magento, Prestashop, Opencart...
                </p>
                <p>
                  <span>Address</span> 4710-4890 Breckinridge St, UK
                  Burlington, VT 05401
                </p>
                <p>
                  <span>Need Help?</span>Call:
                  <a href="tel:1-800-345-6789">1-800-345-6789</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widgets_container widget_menu">
              <h3>Information</h3>
              <div className="footer_menu">
                <ul>
                  <li><Link to = "/about">About Us</Link></li>
                  <li><a href="#">Delivery Information</a></li>
                  <li><Link to="/privacy-policy">privacy policy</Link></li>
                  <li><Link to = "/terms">Terms & Conditions</Link></li>
                  <li><a href="#">Returns</a></li>
                  <li><Link to = "/faq">Frequently Questions</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widgets_container widget_menu">
              <h3>Extras</h3>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Order History</a></li>
                  <li><Link to="/wishlist">Wish List</Link></li>
                  <li><a href="#">Newsletter</a></li>
                  <li><a href="#">Affiliate</a></li>
                  <li><a href="#">Specials</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="widgets_container">
              <h3>Newsletter Subscribe</h3>
              <p>We’ll never share your email address with a third-party.</p>
              <div className="subscribe_form">
                <form id="mc-form" className="mc-form footer-newsletter">
                  <input
                    id="mc-email"
                    type="email"
                    autoComplete="off"
                    placeholder="Enter you email address here..."
                  />
                  <button id="mc-submit">Subscribe</button>
                </form>
                <div className="mailchimp-alerts text-centre">
                  <div className="mailchimp-submitting"></div>
                  <div className="mailchimp-success"></div>
                  <div className="mailchimp-error"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="copyright_area">
              <p>
                Copyright &copy; 2022 <a href="#">AllShops</a> All
                Right Reserved.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="footer_payment text-right">
              <a href="#"
                ><img src={payment} alt="payment"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer