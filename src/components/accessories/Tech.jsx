import React,{useState,useEffect} from 'react'

import banner from '../../assets/images/accessories/tech.png'
import { menuTech } from './data'
import MenuTop from './MenuTop'
import ListProduct from './ListProduct'
import productHandler from "../../features/product/function";
import { Link } from 'react-router-dom'

const Tech = () => {
  const [listProduct,setListProduct] = useState()
  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 4,
    subCategoryId: 10,
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
    <div className='tech list-product-same'>

      <div className="banner"><img src={banner} alt="" /></div>
      
      <MenuTop menuTop={menuTech} />

      <ListProduct listProduct={listProduct}
                    quantityShow={10} />

      <button className='btnViewMore'><Link to='/khoa-dien-tu'>XEM TẤT CẢ CÁC THIẾT BỊ NHÀ THÔNG MINH</Link></button>
      
    </div>
  )
}

export default Tech
