import React, {useState, useEffect} from 'react'
import BlockBoxFilter from '../../smartWatch/BlockBoxFilter'
import { list_company_screen , sliderPC, bannerPC, list_box_filter_PC } from '../data'
import TopSlider from '../TopSlider'
import Categories from '../Categories'
import Firm from '../Firm'
import BoxFilter from '../../accessories/sub/BoxFilter'
import BreadcrumbAccessories from '../../accessories/sub/BreadcrumbAccessories'
import ListProduct from '../ListProduct'

const MainContentPC = ({parentCate,childCate,listProduct,totalShow,setShowSub,functions}) => {
    
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
        <BlockBoxFilter list_box_filter={list_box_filter_PC}
                        setShowSub={setShowSub}                         
                        functions={functions}
        />
        <Firm company = {list_company_screen}/>
        <BoxFilter totalQuantity={totalShow} childCate={childCate} functions={functions}/>
        <ListProduct listProduct={listProduct}  quantityShow={quantityShow}/>

            { totalQuantity <= 0 ? ('') : (
                    <button className='btnViewMore-sub'
                ><a href="javascript:;" onClick={handleShowViewMore}>Xem thêm {totalQuantity} {childCate}</a></button>
                )}
    </div>
  )
}

export default MainContentPC
