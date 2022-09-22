import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const ShelfPhoneSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện'}  
            childCate={'Giá đỡ điện thoại'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default ShelfPhoneSub
