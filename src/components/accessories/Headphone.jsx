import React,{useState,useEffect} from 'react'
import MenuTop from './MenuTop'
import ListProduct from './ListProduct'
import { menuHeadphone } from './data'
import banner from '../../assets/images/accessories/headphone.png'
import productHandler from "../../features/product/function"; 
import { Link } from 'react-router-dom'
const Headphone = () => {
  const [listProduct,setListProduct] = useState()
  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 4,
    subCategoryId: 8,
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
    <div className='headphone list-product-same'>

        <div className="banner"><img src={banner} alt="" /></div>
      
      <MenuTop menuTop={menuHeadphone} />

      <ListProduct listProduct={listProduct}
                    quantityShow={10} />

      <button className='btnViewMore'><Link to='/tai-nghe'>XEM TẤT CẢ CÁC TAI NGHE</Link></button>
    </div>
  )
}

export default Headphone
