import React,{useState,useEffect,useRef} from 'react'

import productHandler from "../../../features/product/function";
import MainContentSubSmartWatch from '../MainContentSubSmartWatch'
import { list_product_smartWatch } from '../dataSmartWatch'
import { list_box_filter_sport } from '../dataSmartWatch'
const sliders = [
  {
      id:1,
      title: 'Lorem',
      url: 'https://cdn.tgdd.vn/2022/07/banner/800-X-200--2---1--800x200.png'
  
  },
  
]

const banners =[
  {
      id:1,
      title:'lorem',
      url:'https://cdn.tgdd.vn/2022/06/banner/5-390x97.png'
  },
  {
      id:2,
      title:'lorem',
      url:'https://cdn.tgdd.vn/2022/06/banner/1-390x97.png'
  }
]
const LayoutSportWatch = () => {
  const [tempProduct,setTempProduct] = useState()
 
 
  const [listProduct,setListProduct] = useState()
  const listTemp = tempProduct
  

  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 6,
    subCategoryId:21,
    page: 1,
    size: 10,
  });
  useEffect(() => {
    const fetchProduct = async () => {
      let res = await productHandler.getProductList(showSub);
      try {
        setListProduct(res.data);
        setTempProduct(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [showSub]);

// render filter

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
   },
   renderBattery: (pin) =>{
  
    console.log('bat1: '+ pin)
      const render = listTemp.filter(
        data =>  data?.detailSpecs?.filter(dt => dt.value === pin).length >= 1)

      const len = listTemp.map(data => data?.detailSpecs?.value === 'Type-C')
      console.log(JSON.stringify(len))
      console.log(render.length)
      setListProduct(render)
   },

}
  return (
    <div className='page-sub-watch'>

        <MainContentSubSmartWatch 
            parent_cate={'Đồng hồ thông minh'}
            child_cate={'Đồng hồ thông minh Thể thao chuyên nghiệp'}
            list_product={listProduct}
            totalShow={listProduct?.length}
            sliders={sliders}
            banners={banners}
            functions={functions}
            setShowSub={setShowSub}
        />
      
    </div>
  )
}

export default LayoutSportWatch
