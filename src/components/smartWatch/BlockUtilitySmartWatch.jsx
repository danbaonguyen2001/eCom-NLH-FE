import React,{useState,useEffect} from 'react'
import banner from '../../assets/images/smartWatch/multi_utility_banner.png'
import { list_product_smartWatch } from './dataSmartWatch'
import { block_utility_menu_top } from './dataSmartWatch'
import SectionBlockProduct from './SectionBlockProduct'
import { list_box_filter_xiaomi } from './dataSmartWatch'
import productHandler from "../../features/product/function";


const BlockUtilitySmartWatch = () => {
  const [listProduct,setListProduct] = useState()
  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 6,
    subCategoryId: 0,
    page: 1,
    size: 10,
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
    
    <SectionBlockProduct banner={banner}
            menu_top={block_utility_menu_top} 
            list_product={listProduct}
            content_btn={'đồng hồ đa tiện ích'}
            linkTo={'/dong-ho-thong-minh'}

            />

  )
}


export default BlockUtilitySmartWatch
