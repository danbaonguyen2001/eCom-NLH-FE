import React,{useState,useEffect} from 'react'
import banner from '../../assets/images/smartWatch/watch_chain.png'
import { list_product_smartWatch } from './dataSmartWatch'
import { block_watch_chain_menu_top } from './dataSmartWatch'
import SectionBlockProduct from './SectionBlockProduct'
import productHandler from "../../features/product/function";

const BlockWatchChainSmartWatch = () => {
  const [listProduct,setListProduct] = useState()
  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 6,
    subCategoryId: 25,
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
            menu_top={block_watch_chain_menu_top} 
            list_product={listProduct}
            content_btn={'dây đồng hồ'} 
            linkTo={'/day-dong-ho'}
            />

  )
}


export default BlockWatchChainSmartWatch
