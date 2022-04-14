import React from 'react';
import {Link} from "react-router-dom";
import Call from '../components/Call';
import product from "../assets/img/s-product/product.jpg";
import product2 from "../assets/img/s-product/product2.jpg";
import product5 from "../assets/img/s-product/product5.jpg";

function Wishlist() {
   
  return (
    <div>
      <div class="breadcrumbs_area">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="breadcrumb_content">
                          <ul>
                              <li><Link to = "/">home</Link></li>
                              <li>Wishlist</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="wishlist_area mt-30">
        <div class="container">
            <form action="wishlist.html#">
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc wishlist">
                            <div class="cart_page table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="product_remove">Delete</th>
                                            <th class="product_thumb">Image</th>
                                            <th class="product_name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product_quantity">Stock Status</th>
                                            <th class="product_total">Add To Cart</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product_remove"><a href="wishlist.html#">X</a></td>
                                            <td class="product_thumb"><a href="wishlist.html#"><img src={product} alt="product" /></a></td>
                                            <td class="product_name"><a href="wishlist.html#">Handbag fringilla</a></td>
                                            <td class="product-price">£65.00</td>
                                            <td class="product_quantity">In Stock</td>
                                            <td class="product_total"><a href="wishlist.html#">Add To Cart</a></td>


                                        </tr>

                                        <tr>
                                            <td class="product_remove"><a href="wishlist.html#">X</a></td>
                                            <td class="product_thumb"><a href="wishlist.html#"><img src={product2} alt="product" /></a></td>
                                            <td class="product_name"><a href="wishlist.html#">Handbags justo</a></td>
                                            <td class="product-price">£90.00</td>
                                            <td class="product_quantity">In Stock</td>
                                            <td class="product_total"><a href="wishlist.html#">Add To Cart</a></td>


                                        </tr>
                                        <tr>
                                            <td class="product_remove"><a href="wishlist.html#">X</a></td>
                                            <td class="product_thumb"><a href="wishlist.html#"><img src={product5} alt="product" /></a></td>
                                            <td class="product_name"><a href="wishlist.html#">Handbag elit</a></td>
                                            <td class="product-price">£80.00</td>
                                            <td class="product_quantity">In Stock</td>
                                            <td class="product_total"><a href="wishlist.html#">Add To Cart</a></td>


                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

            </form>
            <div class="row">
                <div class="col-12">
                    <div class="wishlist_share">
                        <h4>Share on:</h4>
                        <ul>
                            <li><a href="wishlist.html#"><i class="fa fa-rss"></i></a></li>
                            <li><a href="wishlist.html#"><i class="fa fa-vimeo"></i></a></li>
                            <li><a href="wishlist.html#"><i class="fa fa-tumblr"></i></a></li>
                            <li><a href="wishlist.html#"><i class="fa fa-pinterest"></i></a></li>
                            <li><a href="wishlist.html#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <Call />
    </div>
  )
}

export default Wishlist