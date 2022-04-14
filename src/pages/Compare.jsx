import React from 'react';
import {Link} from "react-router-dom";
import Call from '../components/Call';
import product4 from "../assets/img/product/product4.jpg";
import product8 from "../assets/img/product/product8.jpg";
import product9 from "../assets/img/product/product9.jpg";

function Compare() {
  return (
    <div>
      <div class="breadcrumbs_area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li>compare</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="main-content-wrap compaer-page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form action="compare.html#">

                        <div class="compare-table table-responsive">
                            <table class="table mb-0">
                                <tbody>
                                    <tr>
                                        <td class="first-column">Product</td>
                                        <td class="product-image-title">
                                            <a href="compare.html#" class="image"><img src={product4} alt="Compare Product" /></a>
                                            <a href="compare.html#" class="category">Furniture</a>
                                            <a href="compare.html#" class="title">Rinosin title</a>
                                        </td>
                                        <td class="product-image-title">
                                            <a href="compare.html#" class="image"><img src={product8} alt="Compare Product" /></a>
                                            <a href="compare.html#" class="category">Furniture</a>
                                            <a href="compare.html#" class="title">Macro title</a>
                                        </td>
                                        <td class="product-image-title">
                                            <a href="compare.html#" class="image"><img src={product9} alt="Compare Product" /></a>
                                            <a href="compare.html#" class="category">Furniture</a>
                                            <a href="compare.html#" class="title">Oakley title</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Description</td>
                                        <td class="pro-desc">
                                            <p>Eye glasses are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly</p>
                                        </td>
                                        <td class="pro-desc">
                                            <p>Eye glasses are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly</p>
                                        </td>
                                        <td class="pro-desc">
                                            <p>Eye glasses are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Price</td>
                                        <td class="pro-price">$295</td>
                                        <td class="pro-price">$275</td>
                                        <td class="pro-price">$395</td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Color</td>
                                        <td class="pro-color">Black</td>
                                        <td class="pro-color">Black</td>
                                        <td class="pro-color">Black</td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Stock</td>
                                        <td class="pro-stock">In Stock</td>
                                        <td class="pro-stock">In Stock</td>
                                        <td class="pro-stock">In Stock</td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Add to cart</td>
                                        <td class="pro-addtocart"><a href="compare.html#" class="add-to-cart" tabindex="0"><span>ADD TO CART</span></a></td>
                                        <td class="pro-addtocart"><a href="compare.html#" class="add-to-cart" tabindex="0"><span>ADD TO CART</span></a></td>
                                        <td class="pro-addtocart"><a href="compare.html#" class="add-to-cart" tabindex="0"><span>ADD TO CART</span></a></td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Delete</td>
                                        <td class="pro-remove"><button><i class="fa fa-trash-o"></i></button></td>
                                        <td class="pro-remove"><button><i class="fa fa-trash-o"></i></button></td>
                                        <td class="pro-remove"><button><i class="fa fa-trash-o"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Rating</td>
                                        <td class="pro-ratting">
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                        </td>
                                        <td class="pro-ratting">
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                        </td>
                                        <td class="pro-ratting">
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                            <a href="compare.html#"><i class="ion-star"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
    <Call />
    </div>
  )
}

export default Compare