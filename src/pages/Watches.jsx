import React, {useState, useEffect} from 'react'
import TopSlider from '../components/PCPrint/TopSlider'
import { Link } from 'react-router-dom'
import "../sass/Watches/Watches.scss"
import "../components/Watches/data"
import {sliderWatch ,listWatchProducts, optionWatches, WatchCategories, wt_mono_categories, wt_high_end_categories, watch_for_men_categories, wt_for_men_categories, wt_for_women_categories, wt_for_couple_categories, wt_for_children_categories, width_line_strap, list_box_filter_watch, bannerWatch } from '../components/Watches/data'
import { quickLink } from '../components/Watches/data'
import WatchTypes from '../components/Watches/WatchTypes'
import LineStrap from '../components/Watches/LineStrap'
import CollectionWatch from '../components/Watches/CollectionWatch'
import BlockBoxFilter from '../components/smartWatch/BlockBoxFilter'
import productHandler from '../features/product/function'

const Watches = () => {

  const [totalProduct, setTotalProduct] = useState(0);
    // const [totalShow, setTotalShow] = useState(0)
   const [tempProduct,setTempProduct] = useState()
 
 
   const [listProduct, setListProduct] = useState();
   const listTemp = tempProduct;
 
 
   const [showSub,setShowSub] = useState({
     manufacturerId: 0,
     categoryId: 6,
     subCategoryId: 22,
     page: 1,
     size: 10,
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

//

  const [listProductMen, setListProductMen] = useState();
   const [showSubMen,setShowSubMen] = useState({
    manufacturerId: 0,
    categoryId: 6,
    subCategoryId: 21,
    page: 1,
    size: 10,
  });
 
  useEffect(() => {
    const fetchProduct = async () => {
      let res = await productHandler.getProductList(showSubMen);
      try {
        setListProductMen(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [showSubMen]);



  const [listProductWomen, setListProductWomen] = useState();
  const [showSubWomen,setShowSubWomen] = useState({
   manufacturerId: 0,
   categoryId: 6,
   subCategoryId: 22,
   page: 1,
   size: 10,
 });

 useEffect(() => {
   const fetchProduct = async () => {
     let res = await productHandler.getProductList(showSubWomen);
     try {
       setListProductWomen(res.data);
     } catch (error) {
       console.log(error);
     }
   };
   fetchProduct();
 }, [showSubWomen]);





 const [listProductCouple, setListProductCouple] = useState();
 const [showSubCouple,setShowSubCouple] = useState({
  manufacturerId: 0,
  categoryId: 6,
  subCategoryId: 24,
  page: 1,
  size: 10,
});

useEffect(() => {
  const fetchProduct = async () => {
    let res = await productHandler.getProductList(showSubCouple);
    try {
      setListProductCouple(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchProduct();
}, [showSubCouple]);




const [listProductChildren, setListProductChildren] = useState();
const [showSubChildren,setShowSubChildren] = useState({
 manufacturerId: 0,
 categoryId: 6,
 subCategoryId: 23,
 page: 1,
 size: 10,
});

useEffect(() => {
 const fetchProduct = async () => {
   let res = await productHandler.getProductList(showSubChildren);
   try {
     setListProductChildren(res.data);
   } catch (error) {
     console.log(error);
   }
 };
 fetchProduct();
}, [showSubChildren]);


 
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
    <div className='containerWatch'>
      <TopSlider sliders={sliderWatch} banners= {bannerWatch}/>

        

        <BlockBoxFilter list_box_filter={list_box_filter_watch}
                        setShowSub={setShowSub}                          
                        functions={functions}
        />

        <div className="listQuickLink">
                {quickLink.map(qlink => (
                    <Link
                    to={qlink.pathname} className="quickLink" key={qlink.id}>
                        <img src={qlink.url} alt={qlink.title} />
                        <span>{qlink.title}</span>
                    </Link>
                ))}
        </div>

        <CollectionWatch/>
        
          {/* <div className="wt-mono wt-border">
            <WatchTypes 
              listType={WatchCategories}
              idType={WatchCategories[0].id}
              listProduct= {listProduct}
              catname= {wt_mono_categories}
            />
          </div>

          <div className="wt-high-end wt-border">
            <WatchTypes 
                listType={WatchCategories}
                idType={WatchCategories[1].id}
                listProduct= {listProduct}
                catname= {wt_high_end_categories}
              />
          </div> */}

          <div className="wt-for-men wt-border">
            <WatchTypes 
                listType={WatchCategories}
                idType={WatchCategories[2].id}
                listProduct= {listProductMen}
                catname= {wt_for_men_categories}
              />
          </div>

          <div className="wt-for-women wt-border">
            <WatchTypes 
                listType={WatchCategories}
                idType={WatchCategories[3].id}
                listProduct= {listProductWomen}
                catname= {wt_for_women_categories}
              />
          </div>

          <div className="wt-for-couple wt-border">
            <WatchTypes 
                listType={WatchCategories}
                idType={WatchCategories[4].id}
                listProduct= {listProductCouple}
                catname= {wt_for_couple_categories}
              />
          </div>

          <div className="wt-for-children wt-border">
            <WatchTypes 
                listType={WatchCategories}
                idType={WatchCategories[5].id}
                listProduct= {listProductChildren}
                catname= {wt_for_children_categories}
              />
          </div>

          <LineStrap linestrap={width_line_strap}/>
      
    </div>
  )
}

export default Watches
