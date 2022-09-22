import React,{useState,useEffect} from 'react'
import banner from '../../assets/images/smartWatch/children_banner.png'
import { list_product_smartWatch } from './dataSmartWatch'
import { block_sport_menu_top } from './dataSmartWatch'
import SectionBlockProduct from './SectionBlockProduct'
import productHandler from "../../features/product/function";

const BlockChildrenSmartWatch = () => {

    const menu_child =[]
    const [listProduct,setListProduct] = useState()
    const [showSub,setShowSub] = useState({
      manufacturerId: 0,
      categoryId: 6,
      subCategoryId: 23,
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
    
    <div className="section-block-children">

        <SectionBlockProduct banner={banner}
            menu_top={menu_child} 
            list_product={listProduct}
            content_btn={'đồng hồ trẻ em'} 
            linkTo='/dong-ho-thong-minh-tre-em'
            />

    </div>
  )
}


export default BlockChildrenSmartWatch
