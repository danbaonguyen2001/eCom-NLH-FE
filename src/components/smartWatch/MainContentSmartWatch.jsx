import React,{useState,useEffect} from 'react'
import '../../sass/smartWatch/smartWatch.scss'
import BannerSmartWatch from './BannerSmartWatch'
import MenuTopSmartWatch from './MenuTopSmartWatch'
import DealProductSmartWatch from './DealProductSmartWatch'
import SliderSmartWatch from './SliderSmartWatch'
import BlockFashionSmartWatch from './BlockFashionSmartWatch'
import BlockUtilitySmartWatch from './BlockUtilitySmartWatch'
import BlockSportSmartWatch from './BlockSportSmartWatch'
import BlockChildrenSmartWatch from './BlockChildrenSmartWatch'
import BlockWatchChainSmartWatch from './BlockWatchChainSmartWatch'
import MenuTopFixedSmartWatch from './MenuTopFixedSmartWatch'
import productHandler from "../../features/product/function";

const MainContentSmartWatch = () => {
  const [listProduct,setListProduct] = useState()
  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 6,
    subCategoryId: 0,
    page: 1,
    size: 100,
  });
  useEffect(() => {
    const fetchProduct = async () => {
      let res = await productHandler.getProductList(showSub);
      try {
        setListProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [showSub]);
  return (
    <div className='main-content-smartWatch'>

    <MenuTopFixedSmartWatch />

    <div className='main-header-smartWatch'>
        <BannerSmartWatch />
        <MenuTopSmartWatch  />
        <div className="smartWatch-container">
          <DealProductSmartWatch listProduct={listProduct} />
          <SliderSmartWatch  />
        </div>
    </div>
      <div className="content-block-smartWatch">
        <div className="smartWatch-container">
          <BlockFashionSmartWatch />
          <BlockUtilitySmartWatch />
          <BlockSportSmartWatch />
          <BlockChildrenSmartWatch />
          <BlockWatchChainSmartWatch />
        </div>
      </div>
    </div>
  )
}

export default MainContentSmartWatch
