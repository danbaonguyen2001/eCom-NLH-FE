import React, {useState, useEffect} from 'react'
import Categories from '../Categories'
import BreadcrumbAccessories from '../../accessories/sub/BreadcrumbAccessories'
import BlockBoxFilter from '../../smartWatch/BlockBoxFilter'
import BoxFilter from '../../accessories/sub/BoxFilter'
import ListProduct from '../ListProduct'
import {sliderPC ,bannerPC, list_box_filter_printer } from '../data' 
import TopSlider from '../TopSlider'
const MainContentPrinter = ({parentCate,childCate,listProduct,totalShow,setShowSub,functions}) => {


    const [quantityShow,setQuantityShow] = useState(10)
    const [totalQuantity,setTotalQuantity] = useState(0)
    useEffect(() => {
      setTotalQuantity(totalShow-10)
    },[totalShow])
    
    const handleShowViewMore = (e) =>{
      setQuantityShow(prev => prev + 10)
      setTotalQuantity(prev => prev - 10)
    }


  return (
    <div>
      <BreadcrumbAccessories parentCate={parentCate} childCate={childCate} totalProduct={totalShow}/>
        <TopSlider sliders={sliderPC} banners={bannerPC}/>
        <Categories/>

        <BlockBoxFilter    list_box_filter={list_box_filter_printer}
                        setShowSub={setShowSub}                          
                        functions={functions}
        />


      <div className="listFirm_Printer">
        <a className='firm' href="">
            <img src="https://cdn.tgdd.vn/Brand/1/Canon5693-b46-220x48.jpg" alt="" />

        </a>

        <a className='firm' href="">
            <img src="https://cdn.tgdd.vn/Brand/1/Brother5693-b32-220x48.jpg" alt="" />

        </a>

        <a className='firm' href="">
            <img src="https://cdn.tgdd.vn/Brand/1/logo-hp-149x40-3.png" alt="" />

        </a>

       
      </div>

      <BoxFilter totalQuantity={totalShow} childCate={childCate} functions={functions}/>

            <ListProduct listProduct={listProduct}  quantityShow={quantityShow}/>

            { totalQuantity <= 0 ? ('') : (
                    <button className='btnViewMore-sub'
                ><a href="javascript:;" onClick={handleShowViewMore}>Xem thêm {totalQuantity} {childCate}</a></button>
                )}
    </div>
  )
}

export default MainContentPrinter
