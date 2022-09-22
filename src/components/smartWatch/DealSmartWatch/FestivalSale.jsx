import React,{useState} from 'react'
import banner from '../../../assets/images/smartWatch/festival_sale.png'
import { list_product_smartWatch } from '../dataSmartWatch'
import MenuTop from '../../accessories/MenuTop'
import { festival_sale_menu_top } from '../dataSmartWatch'
import BoxFilterSmartWatch from '../BoxFilterSmartWatch'
import { box_filter_fest } from '../dataSmartWatch'
import BlockSaleProduct from './BlockSaleProduct'
import ListProductSmartWatch from '../ListProductSmartWatch'
import { Link } from 'react-router-dom'

const FestivalSale = () => {

    const [quantityShow,setQuantityShow] = useState(10)
    const [totalQuantity,setTotalQuantity] = useState(list_product_smartWatch.length-10)

    
    const handleShowViewMore = (e) =>{
       
            setQuantityShow(prev => prev + 10)
            setTotalQuantity(prev => prev - 10)
   
    }

  return (
    <div className='festival-sale'>
        
        <div className="banner">
            <img src={banner} alt="" />
        </div>

        <div className="block-content">

            <div className="menu-top-festival">
                <MenuTop menuTop={festival_sale_menu_top} />
            </div>

            <BoxFilterSmartWatch box_filter={box_filter_fest} />
           
            <BlockSaleProduct list_product={list_product_smartWatch} />
            
            <ListProductSmartWatch listProduct={list_product_smartWatch} quantityShow={quantityShow} />
           
            { totalQuantity <= 0 ? ('') : (
                <button className='btnViewMore'
            ><a to='javascript:;'
                className='link'
                onClick={handleShowViewMore}>Xem thêm {totalQuantity} sản phẩm</a></button>
            )}
        </div>

    </div>
  )
}

export default FestivalSale
