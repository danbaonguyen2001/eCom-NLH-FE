import banner from "../../assets/images/accessories/apple-accessories.png"
import { menuAppleAccessories } from './data'
import ListProduct from './ListProduct'
import React,{useState,useEffect,useRef} from 'react'
import MenuTop from './MenuTop'
import { Link } from "react-router-dom"

import productHandler from "../../features/product/function";

const AppleAccessries = () => {


  const [listProduct,setListProduct] = useState()
  const [showSub,setShowSub] = useState({
    manufacturerId: 1,
    categoryId: 4,
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
    <div className='apple-accessories list-product-same'
          id='apple' >
        <div className='banner'><img src={banner} alt="" /></div>

        <MenuTop menuTop={menuAppleAccessories}
                  setShowSub={setShowSub}
                />

        <ListProduct listProduct={listProduct}
                      quantityShow={10} />
    
        <button className='btnViewMore'><Link to='/phu-kien/apple'>XEM TẤT CẢ CÁC APPLE CHÍNH HÃNG</Link></button>
    </div>
  )
}

export default AppleAccessries
