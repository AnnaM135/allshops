import React from 'react';

import BannerProduct from '../components/BannerProduct';
import BannerSingle from '../components/BannerSingle';
import Brand from '../components/Brand';
import Call from '../components/Call';
import CustomProduct from '../components/CustomProduct';
import Featured from '../components/Featured';
import MainSlider from '../components/MainSlider';
import NewProduct from '../components/NewProduct';
import PopBrands from '../components/PopBrands';
import PopCategories from '../components/PopCategories';
import PopProducts from '../components/PopProducts';
import Shipping from '../components/Shipping';

function Home() {

  return (
    <div>
        <MainSlider />
        <Shipping />
        <PopCategories />
        <PopBrands />
        <PopProducts />
        <BannerProduct />
        <NewProduct />
        <Featured />
        <BannerSingle />
        <CustomProduct />
        <Brand />
        <Call />
    </div>
  )
}

export default Home