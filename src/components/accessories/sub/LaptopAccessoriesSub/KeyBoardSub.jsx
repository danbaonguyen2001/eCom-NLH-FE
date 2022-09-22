import React,{useState,useEffect,useRef} from 'react'

import productHandler from "../../../../features/product/function";

import MainContentSubAccessories from '../MainContentSubAccessories'

const KeyBoardSub = () => {
  const [tempProduct,setTempProduct] = useState()
 
 
  const [listProduct,setListProduct] = useState()
  const listTemp = tempProduct
  

  const [showSub,setShowSub] = useState({
    manufacturerId: 0,
    categoryId: 4,
    subCategoryId:11,
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
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện laptop'}  
            childCate={'Chuột, Bàn phím'} 
            listProduct={listProduct}
            totalShow={listProduct?.length}
            setShowSub={setShowSub}
            functions={functions}
    />
</div>
  )
}

export default KeyBoardSub
