import React, {useState, useEffect}from 'react'
import BreadcrumbAccessories from '../../accessories/sub/BreadcrumbAccessories'
import Categories from '../Categories'
import Firm from '../Firm'
import { list_company_ink } from '../data'
import BoxFilter from '../../accessories/sub/BoxFilter'
import ListProduct from '../ListProduct'

const MainContentInk = ({parentCate,childCate,listProduct,totalShow,setShowSub,functions}) => {


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
            <Categories/>
            <Firm company={list_company_ink}/>
            <BoxFilter totalQuantity={totalShow} childCate={childCate} functions={functions}/>
            <ListProduct listProduct={listProduct}  quantityShow={quantityShow}/>

            { totalQuantity <= 0 ? ('') : (
                    <button className='btnViewMore-sub'
                ><a href="javascript:;" onClick={handleShowViewMore}>Xem thêm {totalQuantity} {childCate}</a></button>
                )}
        </div>
    )
}

export default MainContentInk
