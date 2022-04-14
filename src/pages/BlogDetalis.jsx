import React from 'react';
import {Link} from "react-router-dom";

import blogBig1 from "../assets/img/blog/blog-big1.jpg";
import blog3 from "../assets/img/blog/blog3.jpg";
import blog4 from "../assets/img/blog/blog4.jpg";
import blog5 from "../assets/img/blog/blog5.jpg";
import blog12 from "../assets/img/blog/blog12.jpg";
import blog13 from "../assets/img/blog/blog13.jpg";
import blog14 from "../assets/img/blog/blog14.jpg";
import blog15 from "../assets/img/blog/blog15.jpg";
import comment from "../assets/img/blog/comment.png";
import comment3 from "../assets/img/blog/comment3.png.jpg";
import Call from '../components/Call';


function BlogDetalis() {
  return (
    <div>
        <div class="breadcrumbs_area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb_content">
                            <ul>
                                <li><Link to = "/">home</Link></li>
                                <li><a href="blog-details.html#">fashion</a></li>
                                <li>blog details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog_details blog_padding mt-23">
            <div class="container">
                <div class="row">

                    <div class="col-lg-9 col-md-12">
                        <div class="blog_details_wrapper">
                            <div class="blog_thumb">
                                <a href="blog-details.html#"><img src={blogBig1} alt="blogBig" /></a>
                            </div>
                            <div class="blog_content">
                                <h3 class="post_title">Blog image post</h3>
                                <div class="post_meta">
                                    <span><i class="ion-person"></i> Posted by </span>
                                    <span><a href="blog-details.html#">admin</a></span>
                                    <span>|</span>
                                    <span><i class="fa fa-calendar" ariaHidden="true"></i>  Posted on  March 10, 2019	</span>

                                </div>
                                <div class="post_content">
                                    <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                                    <blockquote>
                                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                                    </blockquote>
                                    <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                                    <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel. Vivamus finibus mi a neque pretium, ut convallis dui lacinia. Morbi a rutrum velit. Curabitur sagittis quam quis consectetur mattis. Aenean sit amet quam vel turpis interdum sagittis et eget neque. Nunc ante quam, luctus et neque a, interdum iaculis metus. Aliquam vel ante mattis, placerat orci id, vehicula quam. Suspendisse quis eros cursus, viverra urna sed, commodo mauris. Cras diam arcu, fringilla a sem condimentum, viverra facilisis nunc. Curabitur vitae orci id nulla maximus maximus. Nunc pulvinar sollicitudin molestie.</p>
                                </div>
                                <div class="entry_content">
                                    <div class="post_meta">
                                        <span>Tags: </span>
                                        <span><a href="blog-details.html#">, fashion</a></span>
                                        <span><a href="blog-details.html#">, t-shirt</a></span>
                                        <span><a href="blog-details.html#">, white</a></span>
                                    </div>

                                    <div class="social_sharing">
                                        <h3>share this post:</h3>
                                        <ul>
                                            <li><a href="blog-details.html#" title="facebook"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="blog-details.html#" title="twitter"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="blog-details.html#" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
                                            <li><a href="blog-details.html#" title="google+"><i class="fa fa-google-plus"></i></a></li>
                                            <li><a href="blog-details.html#" title="linkedin"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="related_posts">
                                <h3>Related posts</h3>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single_related">
                                            <div class="related_thumb">
                                                <img src={blog3} alt="blog"/>
                                            </div>
                                            <div class="related_content">
                                                <h3><a href="blog-details.html#">Post with Gallery</a></h3>
                                                <span><i class="fa fa-calendar" ariaHidden="true"></i> December 10, 2019 </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single_related">
                                            <div class="related_thumb">
                                                <img src={blog4} alt="blog"/>
                                            </div>
                                            <div class="related_content">
                                                <h3><a href="blog-details.html#">Post with Audio</a></h3>
                                                <span><i class="fa fa-calendar" ariaHidden="true"></i> December 10, 2019 </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single_related column_3">
                                            <div class="related_thumb">
                                                <img src={blog5} alt="blog"/>
                                            </div>
                                            <div class="related_content">
                                                <h3><a href="blog-details.html#">Post with Video</a></h3>
                                                <span><i class="fa fa-calendar" ariaHidden="true"></i> December 10, 2019 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="comments_box">
                                <h3>3 Comments </h3>
                                <div class="comment_list">
                                    <div class="comment_thumb">
                                        <img src={comment3} alt="comment"/>
                                    </div>
                                    <div class="comment_content">
                                        <div class="comment_meta">
                                            <h5><a href="blog-details.html#">Admin</a></h5>
                                            <span>October 16, 2018 at 1:38 am</span>
                                        </div>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                        <div class="comment_reply">
                                            <a href="blog-details.html#">Reply</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="comment_list list_two">
                                    <div class="comment_thumb">
                                        <img src={comment3} alt="comment"/>
                                    </div>
                                    <div class="comment_content">
                                        <div class="comment_meta">
                                            <h5><a href="blog-details.html#">Demo</a></h5>
                                            <span>October 16, 2018 at 1:38 am</span>
                                        </div>
                                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                                        <div class="comment_reply">
                                            <a href="blog-details.html#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="comment_list">
                                    <div class="comment_thumb">
                                        <img src={comment3} alt="comment"/>
                                    </div>
                                    <div class="comment_content">
                                        <div class="comment_meta">
                                            <h5><a href="blog-details.html#">Admin</a></h5>
                                            <span>October 16, 2018 at 1:38 am</span>
                                        </div>
                                        <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at</p>
                                        <div class="comment_reply">
                                            <a href="blog-details.html#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="comments_form">
                                <h3>Leave a Reply </h3>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form action="blog-details.html#">
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="review_comment">Comment </label>
                                            <textarea name="comment" id="review_comment"></textarea>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <label for="author">Name</label>
                                            <input id="author" type="text" />

                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <label for="email">Email </label>
                                            <input id="email" type="text" />
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <label for="website">Website </label>
                                            <input id="website" type="text" />
                                        </div>
                                    </div>
                                    <button class="button" type="submit">Post Comment</button>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <div class="blog_sidebar_widget">
                            <div class="widget_list widget_search">
                                <h3>Search</h3>
                                <form action="blog-details.html#">
                                    <input placeholder="Search..." type="text" />
                                    <button type="submit">search</button>
                                </form>
                            </div>
                            <div class="widget_list widget_tag">
                                <h3>Tag products</h3>
                                <div class="tag_widget">
                                    <ul>
                                        <li><a href="blog-details.html#">asian</a></li>
                                        <li><a href="blog-details.html#">brown</a></li>
                                        <li><a href="blog-details.html#">euro</a></li>
                                        <li><a href="blog-details.html#">fashion</a></li>
                                        <li><a href="blog-details.html#">hat</a></li>
                                        <li><a href="blog-details.html#">t-shirt</a></li>
                                        <li><a href="blog-details.html#">teen</a></li>
                                        <li><a href="blog-details.html#">travel</a></li>
                                        <li><a href="blog-details.html#">white</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="widget_list widget_post">
                                <h3>Recent Posts</h3>
                                <div class="post_wrapper">
                                    <div class="post_thumb">
                                        <a href="blog-details.html"><img src={blog12} alt="blog"/></a>
                                    </div>
                                    <div class="post_info">
                                        <h3><a href="blog-details.html">Blog image post</a></h3>
                                        <span>March 16, 2018 </span>
                                    </div>
                                </div>
                                <div class="post_wrapper">
                                    <div class="post_thumb">
                                        <a href="blog-details.html"><img src={blog13} alt="blog"/></a>
                                    </div>
                                    <div class="post_info">
                                        <h3><a href="blog-details.html">Post with Gallery</a></h3>
                                        <span>March 16, 2018 </span>
                                    </div>
                                </div>
                                <div class="post_wrapper">
                                    <div class="post_thumb">
                                        <a href="blog-details.html"><img src={blog14} alt="blog"/></a>
                                    </div>
                                    <div class="post_info">
                                        <h3><a href="blog-details.html">Post with Audio</a></h3>
                                        <span>March 16, 2018 </span>
                                    </div>
                                </div>
                                <div class="post_wrapper">
                                    <div class="post_thumb">
                                        <a href="blog-details.html"><img src={blog15} alt="blog"/></a>
                                    </div>
                                    <div class="post_info">
                                        <h3><a href="blog-details.html">Post with Video</a></h3>
                                        <span>March 16, 2018 </span>
                                    </div>
                                </div>
                            </div>

                            <div class="widget_list comments_post">
                                <h3>Comments</h3>
                                <div class="post_wrapper">
                                    <div class="post_thumb">
                                        <a href="blog-details.html"><img src={comment} alt="comment"/></a>
                                    </div>
                                    <div class="post_info">
                                        <span>demo says:</span>
                                        <a href="blog-details.html">Quisque semper nunc</a>
                                    </div>
                                </div>
                                <div class="post_wrapper">
                                    <div class="post_thumb">
                                        <a href="blog-details.html"><img src={comment} alt="comment"/></a>
                                    </div>
                                    <div class="post_info">
                                        <span>admin says:</span>
                                        <a href="blog-details.html">Quisque orci porta...</a>
                                    </div>
                                </div>
                                <div class="post_wrapper">
                                    <div class="post_thumb">
                                        <a href="blog-details.html"><img src={comment} alt="comment"/></a>
                                    </div>
                                    <div class="post_info">
                                        <span>demo says:</span>
                                        <a href="blog-details.html">Quisque semper nunc</a>
                                    </div>
                                </div>
                                <div class="post_wrapper">
                                    <div class="post_thumb">
                                        <a href="blog-details.html"><img src={comment} alt="comment"/></a>
                                    </div>
                                    <div class="post_info">
                                        <span>admin says:</span>
                                        <a href="blog-details.html">Quisque semper nunc</a>
                                    </div>
                                </div>
                            </div>
                            <div class="widget_list widget_categories">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="blog-details.html#">Fashion</a></li>
                                    <li><a href="blog-details.html#">Travel</a></li>
                                    <li><a href="blog-details.html#">Videos</a></li>
                                    <li><a href="blog-details.html#">WordPress</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Call />
    </div>
  )
}

export default BlogDetalis