import React from 'react'
import banner from '../../../assets/images/smartWatch/flash_deal.png'
import { list_product_smartWatch } from '../dataSmartWatch'
import ListProductSmartWatch from '../ListProductSmartWatch'

const FlashSmartWatchProduct = () => {
  return (
    <div className='flash-sale'>
        <div className='banner'>
            <img src={banner} alt="" />
        </div>

        <div className="flash-product">
            <ListProductSmartWatch listProduct={list_product_smartWatch} quantityShow={5} />
        </div>
           
      
    </div>
  )
}

export default FlashSmartWatchProduct
