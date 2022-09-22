import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const SelfieSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện'}  
            childCate={'Gậy chụp ảnh, Gimbal'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default SelfieSub
