import React from 'react';
import {Link} from "react-router-dom";
import Call from '../components/Call';
import product from "../assets/img/s-product/product.jpg";
import product2 from "../assets/img/s-product/product2.jpg";
import product5 from "../assets/img/s-product/product5.jpg";

function Cart() {
  return (
    <div>
        <div class="breadcrumbs_area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb_content">
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <li>Shopping Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shopping_cart_area mt-32">
        <div class="container">
            <form action="cart.html#">
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc">
                            <div class="cart_page table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="product_thumb">Image</th>
                                            <th class="product_name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product_quantity">Quantity</th>
                                            <th class="product_total">Total</th>
                                            <th class="product_remove">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product_thumb"><a href="cart.html#"><img src={product} alt="product" /></a></td>
                                            <td class="product_name"><a href="cart.html#">Handbag fringilla</a></td>
                                            <td class="product-price">£65.00</td>
                                            <td class="product_quantity"><label>Quantity</label> <input min="1" max="100" value="1" type="number" /></td>
                                            <td class="product_total">£130.00</td>
                                            <td class="product_remove"><a href="cart.html#"><i class="fa fa-trash-o"></i></a></td>


                                        </tr>

                                        <tr>
                                            <td class="product_thumb"><a href="cart.html#"><img src={product2} alt="product" /></a></td>
                                            <td class="product_name"><a href="cart.html#">Handbags justo</a></td>
                                            <td class="product-price">£90.00</td>
                                            <td class="product_quantity"><label>Quantity</label> <input min="1" max="100" value="1" type="number" /></td>
                                            <td class="product_total">£180.00</td>
                                            <td class="product_remove"><a href="cart.html#"><i class="fa fa-trash-o"></i></a></td>


                                        </tr>
                                        <tr>
                                            <td class="product_thumb"><a href="cart.html#"><img src={product5} alt="product" /></a></td>
                                            <td class="product_name"><a href="cart.html#">Handbag elit</a></td>
                                            <td class="product-price">£80.00</td>
                                            <td class="product_quantity"><label>Quantity</label> <input min="1" max="100" value="1" type="number" /></td>
                                            <td class="product_total">£160.00</td>
                                            <td class="product_remove"><a href="cart.html#"><i class="fa fa-trash-o"></i></a></td>
                                            

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="cart_submit">
                                <button type="submit">update cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="coupon_area">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="coupon_code left">
                                <h3>Coupon</h3>
                                <div class="coupon_inner">
                                    <p>Enter your coupon code if you have one.</p>
                                    <input placeholder="Coupon code" type="text" />
                                    <button type="submit">Apply coupon</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="coupon_code right">
                                <h3>Cart Totals</h3>
                                <div class="coupon_inner">
                                    <div class="cart_subtotal">
                                        <p>Subtotal</p>
                                        <p class="cart_amount">£215.00</p>
                                    </div>
                                    <div class="cart_subtotal ">
                                        <p>Shipping</p>
                                        <p class="cart_amount"><span>Flat Rate:</span> £255.00</p>
                                    </div>
                                    <a href="cart.html#">Calculate shipping</a>

                                    <div class="cart_subtotal">
                                        <p>Total</p>
                                        <p class="cart_amount">£215.00</p>
                                    </div>
                                    <div class="checkout_btn">
                                        <a href="cart.html#">Proceed to Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <Call />
    </div>
  )
}

export default Cart