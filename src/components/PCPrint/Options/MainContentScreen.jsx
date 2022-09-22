import React, {useState, useEffect} from 'react'
import BoxFilter from '../../accessories/sub/BoxFilter'
import { list_box_filter_screen,list_company_screen, sliderPC, bannerPC } from '../data'
import Categories from '../Categories'
import BlockBoxFilter from '../../smartWatch/BlockBoxFilter'
import BreadcrumbAccessories from '../../accessories/sub/BreadcrumbAccessories'
import TopSlider from '../TopSlider'
import Firm from '../Firm'
import ListProduct from '../ListProduct'

const MainContentScreen = ({parentCate,childCate,listProduct,totalShow,setShowSub,functions}) => {


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
        <BlockBoxFilter list_box_filter={list_box_filter_screen}
                        setShowSub={setShowSub}
                          
                        functions={functions}
                          />
        <Firm  company={list_company_screen}/>
        <BoxFilter totalQuantity={totalShow} childCate={childCate} functions={functions}/>
        
        <ListProduct listProduct={listProduct} quantityShow= {quantityShow}/>

        { totalQuantity <= 0 ? ('') : (
                <button className='btnViewMore-sub'
            ><a href="javascript:;" onClick={handleShowViewMore}>Xem thêm {totalQuantity} {childCate}</a></button>
            )}
    </div>
  )
}

export default MainContentScreen
