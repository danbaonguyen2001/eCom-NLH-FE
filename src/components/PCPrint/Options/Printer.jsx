import React, {useState, useEffect} from 'react'
import "../../../assets/fonts/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css";
import "../../../sass/PCPrint/Options.scss"
import "../../../sass/PCPrint/PCPrint.scss"
import productHandler from '../../../features/product/function';
import MainContentPrinter from './MainContentPrinter';


const Printer = () => {
   

    const [totalProduct, setTotalProduct] = useState(0);
    // const [totalShow, setTotalShow] = useState(0)
   const [tempProduct,setTempProduct] = useState()
 
 
   const [listProduct, setListProduct] = useState();
   const listTemp = tempProduct;
 
 
   const [showSub,setShowSub] = useState({
     manufacturerId: 0,
     categoryId: 7,
     subCategoryId: 26,
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
    <div className='containerPC'>
        <MainContentPrinter parentCate = {'PC, Máy in'}
                          childCate = {'Máy in'}
                          listProduct={listProduct}
                          totalShow={listProduct?.length}
                          setShowSub={setShowSub}
                          functions={functions}
                          />     

      
    </div>
  )
}




export default Printer


   
    

  