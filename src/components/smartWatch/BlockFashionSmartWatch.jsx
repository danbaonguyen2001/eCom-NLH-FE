import React,{useState,useEffect} from 'react'
import SectionBlockProduct from './SectionBlockProduct'

import banner from '../../assets/images/smartWatch/fashion_banner.png'
import { list_product_smartWatch } from './dataSmartWatch'
import { block_fashion_menu_top } from './dataSmartWatch'
import productHandler from "../../features/product/function";

const BlockFashionSmartWatch = () => {

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
            menu_top={block_fashion_menu_top} 
            list_product={listProduct} 
            content_btn={'đồng hồ thời trang sành điệu'} 
            linkTo={'/dong-ho-thong-minh-thoi-trang-sanh-dieu'}
            />

  )
}

export default BlockFashionSmartWatch 
