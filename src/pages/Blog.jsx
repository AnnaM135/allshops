import React from 'react';
import {Link} from "react-router-dom";
import Call from '../components/Call';

import blog12 from "../assets/img/blog/blog12.jpg";
import blog13 from "../assets/img/blog/blog13.jpg";
import blog14 from "../assets/img/blog/blog14.jpg";
import blog15 from "../assets/img/blog/blog15.jpg";
import blog6 from "../assets/img/blog/blog6.jpg";
import blog7 from "../assets/img/blog/blog7.jpg";
import blog8 from "../assets/img/blog/blog8.jpg";
import blog9 from "../assets/img/blog/blog9.jpg";
import comment from "../assets/img/blog/comment.png";
import doubleArrow from "../assets/img/icon/doubleArrow.webp"
import arrowDown from "../assets/img/icon/arrow-down.svg";

function Blog() {
  return (
    <div>
      <div class="breadcrumbs_area">
        <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="breadcrumb_content">
                          <ul>
                              <li><Link to="/">home</Link></li>
                              <li>blog sidebar</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="blog_page_section blog_sidebar blog_reverse mt-23">
          <div class="container">
              <div class="row">
                  <div class="col-lg-3 col-md-12">
                      <div class="blog_sidebar_widget">
                          <div class="widget_list widget_search">
                              <h3>Search</h3>
                              <form action="blog-sidebar.html#">
                                  <input placeholder="Search..." type="text" />
                                  <button type="submit">search</button>
                              </form>
                          </div>
                          <div class="widget_list widget_tag">
                              <h3>Tag products</h3>
                              <div class="tag_widget">
                                  <ul>
                                      <li><a href="blog-sidebar.html#">asian</a></li>
                                      <li><a href="blog-sidebar.html#">brown</a></li>
                                      <li><a href="blog-sidebar.html#">euro</a></li>
                                      <li><a href="blog-sidebar.html#">fashion</a></li>
                                      <li><a href="blog-sidebar.html#">hat</a></li>
                                      <li><a href="blog-sidebar.html#">t-shirt</a></li>
                                      <li><a href="blog-sidebar.html#">teen</a></li>
                                      <li><a href="blog-sidebar.html#">travel</a></li>
                                      <li><a href="blog-sidebar.html#">white</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div class="widget_list widget_post">
                              <h3>Recent Posts</h3>
                              <div class="post_wrapper">
                                  <div class="post_thumb">
                                      <Link to="/blog/detalis/id"><img src={blog12} alt="blog" /></Link>
                                  </div>
                                  <div class="post_info">
                                      <h3><Link to="/blog/detalis/id">Blog image post</Link></h3>
                                      <span>March 16, 2018 </span>
                                  </div>
                              </div>
                              <div class="post_wrapper">
                                  <div class="post_thumb">
                                      <Link to="/blog/detalis/id"><img src={blog13} alt="blog"/></Link>
                                  </div>
                                  <div class="post_info">
                                      <h3><Link to="/blog/detalis/id">Post with Gallery</Link></h3>
                                      <span>March 16, 2018 </span>
                                  </div>
                              </div>
                              <div class="post_wrapper">
                                  <div class="post_thumb">
                                      <Link to="/blog/detalis/id"><img src={blog14} alt="blog"/></Link>
                                  </div>
                                  <div class="post_info">
                                      <h3><Link to="/blog/detalis/id">Post with Audio</Link></h3>
                                      <span>March 16, 2018 </span>
                                  </div>
                              </div>
                              <div class="post_wrapper">
                                  <div class="post_thumb">
                                      <Link to="/blog/detalis/id"><img src={blog15} alt="blog"/></Link>
                                  </div>
                                  <div class="post_info">
                                      <h3><Link to="/blog/detalis/id">Post with Video</Link></h3>
                                      <span>March 16, 2018 </span>
                                  </div>
                              </div>
                          </div>

                          <div class="widget_list comments_post">
                              <h3>Comments</h3>
                              <div class="post_wrapper">
                                  <div class="post_thumb">
                                      <Link to="/blog/detalis/id"><img src={comment} alt="comment"/></Link>
                                  </div>
                                  <div class="post_info">
                                      <span>demo says:</span>
                                      <Link to="/blog/detalis/id">Quisque semper nunc</Link>
                                  </div>
                              </div>
                              <div class="post_wrapper">
                                  <div class="post_thumb">
                                      <Link to="/blog/detalis/id"><img src={comment} alt="comment"/></Link>
                                  </div>
                                  <div class="post_info">
                                      <span>admin says:</span>
                                      <Link to="/blog/detalis/id">Quisque orci porta...</Link>
                                  </div>
                              </div>
                              <div class="post_wrapper">
                                  <div class="post_thumb">
                                      <Link to="/blog/detalis/id"><img src={comment} alt="comment"/></Link>
                                  </div>
                                  <div class="post_info">
                                      <span>demo says:</span>
                                      <Link to="/blog/detalis/id">Quisque semper nunc</Link>
                                  </div>
                              </div>
                              <div class="post_wrapper">
                                  <div class="post_thumb">
                                      <Link to="/blog/detalis/id"><img src={comment} alt="comment"/></Link>
                                  </div>
                                  <div class="post_info">
                                      <span>admin says:</span>
                                      <Link to="/blog/detalis/id">Quisque semper nunc</Link>
                                  </div>
                              </div>
                          </div>
                          <div class="widget_list widget_categories">
                              <h3>Categories</h3>
                              <ul>
                                  <li><a href="blog-sidebar.html#">Fashion</a></li>
                                  <li><a href="blog-sidebar.html#">Travel</a></li>
                                  <li><a href="blog-sidebar.html#">Videos</a></li>
                                  <li><a href="blog-sidebar.html#">WordPress</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-9 col-md-12">
                      <div class="blog_wrapper">
                          <div class="single_blog">
                              <div class="blog_thumb">
                                  <Link to="/blog/detalis/id"><img src={blog6} alt="blog"/></Link>
                              </div>
                              <div class="blog_content">
                                  <h3><Link to="/blog/detalis/id">Blog image post</Link></h3>
                                  <div class="blog_meta">
                                      <span class="post_date"><i class="fa-calendar fa"></i> Februaey 02, 2019</span>
                                      <span class="author"><i class="fa fa-user-circle"></i> Posts by : admin</span>
                                      <span class="category">
                                          <i class="fa fa-folder-open"></i>
                                          <a href="blog-sidebar.html#">Fashion</a>
                                      </span>
                                  </div>
                                  <div class="blog_desc">
                                      <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue </p>
                                  </div>
                                  <div class="readmore_button">
                                      <Link to="/blog/detalis/id">read more</Link>
                                  </div>
                              </div>
                          </div>
                          <div class="single_blog">
                              <div class="blog_thumb">
                                  <Link to="/blog/detalis/id"><img src={blog7} alt="blog"/></Link>
                              </div>
                              <div class="blog_content">
                                  <h3><Link to="/blog/detalis/id">Post with Gallery</Link></h3>
                                  <div class="blog_meta">
                                      <span class="post_date"><i class="fa-calendar fa"></i> Februaey 02, 2019</span>
                                      <span class="author"><i class="fa fa-user-circle"></i> Posts by : admin</span>
                                      <span class="category">
                                          <i class="fa fa-folder-open"></i>
                                          <a href="blog-sidebar.html#">Fashion</a>
                                      </span>
                                  </div>
                                  <div class="blog_desc">
                                      <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue </p>
                                  </div>
                                  <div class="readmore_button">
                                      <Link to="/blog/detalis/id">read more</Link>
                                  </div>
                              </div>
                          </div>
                          <div class="single_blog">
                              <div class="blog_thumb">
                                  <Link to="/blog/detalis/id"><img src={blog8} alt="blog"/></Link>
                              </div>
                              <div class="blog_content">
                                  <h3><Link to="/blog/detalis/id">Post with Audio</Link></h3>
                                  <div class="blog_meta">
                                      <span class="post_date"><i class="fa-calendar fa"></i> Februaey 02, 2019</span>
                                      <span class="author"><i class="fa fa-user-circle"></i> Posts by : admin</span>
                                      <span class="category">
                                          <i class="fa fa-folder-open"></i>
                                          <a href="blog-sidebar.html#">Fashion</a>
                                      </span>
                                  </div>
                                  <div class="blog_desc">
                                      <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue </p>
                                  </div>
                                  <div class="readmore_button">
                                      <Link to="/blog/detalis/id">read more</Link>
                                  </div>
                              </div>
                          </div>
                          <div class="single_blog">
                              <div class="blog_thumb">
                                  <Link to="/blog/detalis/id"><img src={blog9} alt="blog"/></Link>
                              </div>
                              <div class="blog_content">
                                  <h3><Link to="/blog/detalis/id">Post with Video</Link></h3>
                                  <div class="blog_meta">
                                      <span class="post_date"><i class="fa-calendar fa"></i> Februaey 02, 2019</span>
                                      <span class="author"><i class="fa fa-user-circle"></i> Posts by : admin</span>
                                      <span class="category">
                                          <i class="fa fa-folder-open"></i>
                                          <a href="blog-sidebar.html#">Fashion</a>
                                      </span>
                                  </div>
                                  <div class="blog_desc">
                                      <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue </p>
                                  </div>
                                  <div class="readmore_button">
                                      <Link to="/blog/detalis/id">read more</Link>
                                  </div>
                              </div>
                          </div>
                          <div class="single_blog">
                              <div class="blog_thumb">
                                  <Link to="/blog/detalis/id"><img src={blog7} alt="blog"/></Link>
                              </div>
                              <div class="blog_content">
                                  <h3><Link to="/blog/detalis/id">Maecenas ultricies</Link></h3>
                                  <div class="blog_meta">
                                      <span class="post_date"><i class="fa-calendar fa"></i> Februaey 02, 2019</span>
                                      <span class="author"><i class="fa fa-user-circle"></i> Posts by : admin</span>
                                      <span class="category">
                                          <i class="fa fa-folder-open"></i>
                                          <a href="blog-sidebar.html#">Fashion</a>
                                      </span>
                                  </div>
                                  <div class="blog_desc">
                                      <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue </p>
                                  </div>
                                  <div class="readmore_button">
                                      <Link to="/blog/detalis/id">read more</Link>
                                  </div>
                              </div>
                          </div>
                          <div class="single_blog">
                              <div class="blog_thumb">
                                  <Link to="/blog/detalis/id"><img src={blog8} alt="blog"/></Link>
                              </div>
                              <div class="blog_content">
                                  <h3><Link to="/blog/detalis/id">Etiam magna</Link></h3>
                                  <div class="blog_meta">
                                      <span class="post_date"><i class="fa-calendar fa"></i> Februaey 02, 2019</span>
                                      <span class="author"><i class="fa fa-user-circle"></i> Posts by : admin</span>
                                      <span class="category">
                                          <i class="fa fa-folder-open"></i>
                                          <a href="blog-sidebar.html#">Fashion</a>
                                      </span>
                                  </div>
                                  <div class="blog_desc">
                                      <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue </p>
                                  </div>
                                  <div class="readmore_button">
                                      <Link to="/blog/detalis/id">read more</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
      <div class="blog_pagination">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="pagination">
                        <ul>
                            <li><a href="blog-sidebar.html#"><img src={doubleArrow} alt="doubleArrow" className='doubleArrow doubleArrowLeft'/></a></li>
                            <li class="prev"><a><img src={arrowDown} alt="arrow" className='doubleArrow arrowDown-arrowLeft'/></a></li>
                            <li class="current">1</li>
                            <li><a >2</a></li>
                            <li><a >3</a></li>
                            <li class="next"><a ><img src={arrowDown} alt="arrow" className='doubleArrow arrowDown-arrowRight'/></a></li>
                            <li><a href="blog-sidebar.html#"><img src={doubleArrow} alt="doubleArrow" className='doubleArrow'/></a></li>
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

export default Blog