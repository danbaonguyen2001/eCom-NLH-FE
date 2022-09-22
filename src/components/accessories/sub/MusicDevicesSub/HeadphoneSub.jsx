import React,{useState,useEffect,useRef} from 'react'

import productHandler from "../../../../features/product/function";
import MainContentSubAccessories from '../MainContentSubAccessories'

const HeadphoneSub = () => {
  const [tempProduct,setTempProduct] = useState()
 
  const [listProduct,setListProduct] = useState()
  const listTemp = tempProduct

  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 4,
    subCategoryId:8,
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
        data =>  data?.detailSpecs?.filter(dt => dt.value === 'Typce-C').length >= 1)

      // const len = listTemp.map(data => data?.detailSpecs?.map(data => data === 'Type-C'))
      // console.log(JSON.stringify(len))
      // console.log(render.length)
      setListProduct(render)
   },
   renderPower: (pow) =>{
      const render =listTemp.filter(data => 
        data => data?.detailSpecs?.filter(dt => dt.value === pow).length > 0 )

      console.log(render)
      setListProduct(render)
   },

}
  
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Thiết bị âm thanh'}  
            childCate={'Tai nghe'} 
            listProduct={listProduct}
            totalShow={listProduct?.length}
            setShowSub={setShowSub}
            functions={functions}
    />
</div>
  )
}

export default HeadphoneSub
