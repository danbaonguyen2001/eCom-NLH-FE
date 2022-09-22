import React,{useState,useEffect} from 'react'
import banner from '../../assets/images/smartWatch/sport_banner.png'
import { list_product_smartWatch } from './dataSmartWatch'
import { block_sport_menu_top } from './dataSmartWatch'
import SectionBlockProduct from './SectionBlockProduct'
import productHandler from "../../features/product/function";

const BlockSportSmartWatch = () => {
  const [listProduct,setListProduct] = useState()
  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 6,
    subCategoryId: 21,
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
            menu_top={block_sport_menu_top} 
            list_product={listProduct}
            content_btn={'đồng hồ Thể thao chuyên nghiệp'}
            linkTo={'/dong-ho-thong-minh-the-thao-chuyen-nghiep'}
            />

  )
}


export default BlockSportSmartWatch
