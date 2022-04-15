import React, {useEffect, useState} from "react";

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
import SubscribeModal from "../modals/SubscribeModal";

function Home() {
  const [isWarningModalOpen, setWarningModalOpen] = useState(false);

  useEffect(() => {
     setTimeout(()=>{ 
     // setWarningModalOpen(true);
      console.log("ok");
    },5000)
  }, [isWarningModalOpen])
  return (
    <div>
      {isWarningModalOpen && (
        <SubscribeModal 
          isOpen={isWarningModalOpen}
          onRequestClose={() => setWarningModalOpen(false)}
        />
        )
      }
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