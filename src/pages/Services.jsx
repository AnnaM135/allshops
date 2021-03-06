import React from 'react';
import {Link} from "react-router-dom";

import service1 from "../assets/img/service/services1.jpg";
import service2 from "../assets/img/service/services2.jpg";
import service3 from "../assets/img/service/services3.jpg";
import service4 from "../assets/img/service/services4.jpg";
import Call from '../components/Call';

function Services() {
  return (
    <div>
      <div class="breadcrumbs_area">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="breadcrumb_content">
                          <ul>
                              <li><Link to="/">home</Link></li>
                              <li>our services</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="services_gallery mt-32">
          <div class="container">
              <div class="row">
                  <div class="col-lg-4 col-md-6">
                      <div class="single_services">
                          <div class="services_thumb">
                              <img src={service1} alt="service" />
                          </div>
                          <div class="services_content">
                              <h3>DESIGN THE COVER</h3>
                              <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>

                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="single_services">
                          <div class="services_thumb">
                              <img src={service2} alt="service" />
                          </div>
                          <div class="services_content">
                              <h3>DESIGN THE COVER</h3>
                              <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>

                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="single_services">
                          <div class="services_thumb">
                              <img src={service3} alt="service" />
                          </div>
                          <div class="services_content">
                              <h3>DESIGN THE COVER</h3>
                              <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="our_services">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="services_title">
                          <h2>OUR SERVICES</h2>
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore<br />
                              eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit..</p>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-3 col-md-6">
                      <div class="services_item">
                          <div class="services_icone">
                              <i class="fa fa-sliders" ariaHidden="true"></i>
                          </div>
                          <div class="services_desc">
                              <h3>BRANDING</h3>
                              <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="services_item">
                          <div class="services_icone">
                              <i class="fa fa-umbrella"></i>
                          </div>
                          <div class="services_desc">
                              <h3>WEB DESIGN</h3>

                              <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="services_item">
                          <div class="services_icone">

                              <i class="fa fa-camera"></i>

                          </div>
                          <div class="services_desc">
                              <h3>PHOTOGRAPHY</h3>

                              <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="services_item">
                          <div class="services_icone">
                              <i class="fa fa-cog"></i>
                          </div>
                          <div class="services_desc">
                              <h3>WEB DEVELOPMENT</h3>
                              <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="services_item">
                          <div class="services_icone">
                              <i class="fa fa-file-code-o" ariaHidden="true"></i>
                          </div>
                          <div class="services_desc">
                              <h3>CODING</h3>
                              <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="services_item">
                          <div class="services_icone">
                              <i class="fa fa-bar-chart" ariaHidden="true"></i>
                          </div>
                          <div class="services_desc">
                              <h3>MARKETING</h3>
                              <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="services_item">
                          <div class="services_icone">
                              <i class="fa fa-headphones"></i>
                          </div>
                          <div class="services_desc">
                              <h3>SUPPORT</h3>
                              <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="services_item">
                          <div class="services_icone">
                              <i class="fa fa-leaf"></i>
                          </div>
                          <div class="services_desc">
                              <h3>GRAPHIC DESIGN</h3>
                              <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="unlimited_services">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-6 col-md-12">
                      <div class="services_section_thumb">
                          <img src={service4} alt="service" />
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                      <div class="unlimited_services_content">
                          <h1>UNLIMITED IDEAS</h1>
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. </p>
                          <div class="view__work">
                              <a href="services.html#">MORE INFO <i class="fa fa-angle-right"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="priceing_table">
          <div class="container">
              <div class="row">
                  <div class="col-lg-3 col-md-6">
                      <div class="single_priceing">
                          <div class="priceing_title">
                              <h1>Standard</h1>
                          </div>
                          <div class="priceing_list">
                              <h1><span>??19</span>/Month</h1>
                              <ul>
                                  <li>2 GB Webspace</li>
                                  <li>1 Domain</li>
                                  <li>PHP 5 Enbled</li>
                                  <li>24H ??? Support</li>
                              </ul>
                              <a href="services.html#">purchase now </a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="single_priceing">
                          <div class="priceing_title">
                              <h1>Returns</h1>
                          </div>
                          <div class="priceing_list">
                              <h1><span>??23</span>/Month</h1>
                              <ul>
                                  <li>2 GB Webspace</li>
                                  <li>1 Domain</li>
                                  <li>PHP 5 Enbled</li>
                                  <li>24H ??? Support</li>
                              </ul>
                              <a class="list_button" href="services.html#">purchase now </a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="single_priceing">
                          <div class="priceing_title">
                              <h1>Affiliate</h1>
                          </div>
                          <div class="priceing_list">
                              <h1><span>??20</span>/Month</h1>
                              <ul>
                                  <li>2 GB Webspace</li>
                                  <li>1 Domain</li>
                                  <li>PHP 5 Enbled</li>
                                  <li>24H ??? Support</li>
                              </ul>
                              <a href="services.html#">purchase now </a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="single_priceing">
                          <div class="priceing_title">
                              <h1>Specials</h1>
                          </div>
                          <div class="priceing_list">
                              <h1><span>??25</span>/Month</h1>
                              <ul>
                                  <li>2 GB Webspace</li>
                                  <li>1 Domain</li>
                                  <li>PHP 5 Enbled</li>
                                  <li>24H ??? Support</li>
                              </ul>
                              <a class="list_button" href="services.html#">purchase now </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="advantages_ecommerce">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-7 col-md-8 col-sm-12">
                      <div class="advantages_content">
                          <h3>Advantages of Mobile ecommerce theme</h3>
                          <p>Build a professional website system and great user experience</p>
                      </div>
                  </div>
                  <div class="col-lg-5 col-md-4 col-sm-12">
                      <div class="advantages_button">
                          <a href="services.html#" title="MORE INFO ">MORE INFO <i class="fa fa-angle-right"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Call />
    </div>
  )
}

export default Services