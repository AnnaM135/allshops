import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/style.css";

import Footer from './components/Footer';
import Header from "./components/Header";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Home from './pages/Home';
import ProductDetalis from './pages/ProductDetalis';
import BlogDetalis from './pages/BlogDetalis';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Faq from './pages/Faq';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Compare from './pages/Compare';
import MyAccount from './pages/MyAccount';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" exact element = {<Home /> }  />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/shop/product-detalis/id' element={<ProductDetalis />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blog/detalis/id" element={<BlogDetalis />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path="/faq" element = {<Faq />} />
        <Route path="/terms" element = {<Terms />} />
        <Route path = "/privacy-policy" element={<PrivacyPolicy />}/> 
        <Route path='/cart' element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/compare" element={<Compare />} />
        <Route path='/account' element={<MyAccount /> }/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App