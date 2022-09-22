import React, {useState, useEffect} from 'react'
import ListButton from '../../PCPrint/ListButton'
import TopSlider from '../../PCPrint/TopSlider'
import BlockBoxFilter from '../../smartWatch/BlockBoxFilter'
import { bannerWatch, list_box_filter_watch , sliderWatch} from '../data'
import "../../../sass/Watches/Watches.scss"
import productHandler from '../../../features/product/function'
import ListProductWatches from './ListProductWatches'
import {list_products_watch_for_men, list_inform_watch_for_men} from './dataChildPage'
const WatchForChildren = () => {

  const [totalProduct, setTotalProduct] = useState(0);
  // const [totalShow, setTotalShow] = useState(0)
 const [tempProduct,setTempProduct] = useState()


 const [listProduct, setListProduct] = useState();
 const listTemp = tempProduct;


 const [showSub,setShowSub] = useState({
   manufacturerId: 0,
   categoryId: 6,
   subCategoryId: 23,
   page: 1,
   size: 20,
 });
 useEffect(() => {
   const fetchProduct = async () => {
     let res = await productHandler.getProductList(showSub);
     try {
       setListProduct(res.data);
       setTempProduct(res.data)
       setTotalProduct(res.data.length)
     } catch (error) {
       console.log(error);
     }
   };
   fetchProduct();
 }, [showSub]);



 const functions= {
   renderPrice: (minPrice,maxPrice) =>{
    const render = listTemp.filter(data => {
      if(minPrice === maxPrice)
      {
        return  data?.marketPrice > maxPrice
      } else {
        return data?.marketPrice >= minPrice && data?.marketPrice <= maxPrice
      }
    })
    setListProduct(render)
   },
   renderBoxFilter: (e) =>{
    const sort = e.target.value;
    if (sort === "increase") {
      setListProduct(listTemp?.slice().sort((a, b) => a.price - b.price));
    }
    if (sort === "decrease") {
      setListProduct(listTemp?.slice().sort((a, b) => b.price - a.price));
    }
    if(sort === 'percent_increase')
    {
      setListProduct(listTemp?.slice().sort((a, b) => a.promotion - b.promotion));
    }
   }

}

  return (
    <div className="containerWatch">
        <div className='WatchForChildren' >
            <TopSlider sliders={sliderWatch} banners={bannerWatch}/>
            
            <BlockBoxFilter list_box_filter={list_box_filter_watch}
                              setShowSub={setShowSub}                          
                              functions={functions}/>
           
            <ListProductWatches listProduct={listProduct}
                                />
        </div>
    </div>
  )
}

export default WatchForChildren


