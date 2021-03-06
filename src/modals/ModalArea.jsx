import React from 'react'

function ModalArea() {
  return (
    <div
    class="modal fade"
    id="modal_box"
    tabindex="-1"
    role="dialog"
    ariaHidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <button
          type="button"
          className="close"
          data-bs-dismiss="modal"
          ariaLabel="Close"
        >
          <span ariaHidden="true">&times;</span>
        </button>
        <div className="modal_body">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="modal_tab">
                  <div className="tab-content product-details-large">
                    <div
                      className="tab-pane fade show active"
                      id="tab1"
                      role="tabpanel"
                    >
                      <div className="modal_tab_img">
                        <a href="index-5.html#"
                          ><img src="assets/img/product/product1.jpg" alt=""
                        /></a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab2" role="tabpanel">
                      <div className="modal_tab_img">
                        <a href="index-5.html#"
                          ><img src="assets/img/product/product2.jpg" alt=""
                        /></a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3" role="tabpanel">
                      <div className="modal_tab_img">
                        <a href="index-5.html#"
                          ><img src="assets/img/product/product3.jpg" alt=""
                        /></a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab4" role="tabpanel">
                      <div className="modal_tab_img">
                        <a href="index-5.html#"
                          ><img src="assets/img/product/product5.jpg" alt=""
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div className="modal_tab_button">
                    <ul
                      className="nav product_navactive owl-carousel"
                      role="tablist"
                    >
                      <li>
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="index-5.html#tab1"
                          role="tab"
                          aria-controls="tab1"
                          aria-selected="false"
                          ><img src="assets/img/product/product1.jpg" alt=""
                        /></a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="index-5.html#tab2"
                          role="tab"
                          aria-controls="tab2"
                          aria-selected="false"
                          ><img src="assets/img/product/product2.jpg" alt=""
                        /></a>
                      </li>
                      <li>
                        <a
                          className="nav-link button_three"
                          data-toggle="tab"
                          href="index-5.html#tab3"
                          role="tab"
                          aria-controls="tab3"
                          aria-selected="false"
                          ><img src="assets/img/product/product3.jpg" alt=""
                        /></a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="index-5.html#tab4"
                          role="tab"
                          aria-controls="tab4"
                          aria-selected="false"
                          ><img src="assets/img/product/product5.jpg" alt=""
                        /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="modal_right">
                  <div className="modal_title mb-10">
                    <h2>Handbag feugiat</h2>
                  </div>
                  <div className="modal_price mb-10">
                    <span className="new_price">$64.99</span>
                    <span className="old_price">$78.99</span>
                  </div>
                  <div className="modal_description mb-15">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Mollitia iste laborum ad impedit pariatur esse
                      optio tempora sint ullam autem deleniti nam in quos qui
                      nemo ipsum numquam, reiciendis maiores quidem aperiam,
                      rerum vel recusandae
                    </p>
                  </div>
                  <div className="variants_selects">
                    <div className="variants_size">
                      <h2>size</h2>
                      <select className="select_option">
                        <option selected value="1">s</option>
                        <option value="1">m</option>
                        <option value="1">l</option>
                        <option value="1">xl</option>
                        <option value="1">xxl</option>
                      </select>
                    </div>
                    <div className="variants_color">
                      <h2>color</h2>
                      <select className="select_option">
                        <option selected value="1">purple</option>
                        <option value="1">violet</option>
                        <option value="1">black</option>
                        <option value="1">pink</option>
                        <option value="1">orange</option>
                      </select>
                    </div>
                    <div className="modal_add_to_cart">
                      <form action="index-5.html#">
                        <input
                          min="1"
                          max="100"
                          step="2"
                          value="1"
                          type="number"
                        />
                        <button type="submit">add to cart</button>
                      </form>
                    </div>
                  </div>
                  <div className="modal_social">
                    <h2>Share this product</h2>
                    <ul>
                      <li className="facebook">
                        <a href="index-5.html#"
                          ><i className="fa fa-facebook"></i
                        ></a>
                      </li>
                      <li className="twitter">
                        <a href="index-5.html#"
                          ><i className="fa fa-twitter"></i
                        ></a>
                      </li>
                      <li className="pinterest">
                        <a href="index-5.html#"
                          ><i className="fa fa-pinterest"></i
                        ></a>
                      </li>
                      <li className="google-plus">
                        <a href="index-5.html#"
                          ><i className="fa fa-google-plus"></i
                        ></a>
                      </li>
                      <li className="linkedin">
                        <a href="index-5.html#"
                          ><i className="fa fa-linkedin"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalArea