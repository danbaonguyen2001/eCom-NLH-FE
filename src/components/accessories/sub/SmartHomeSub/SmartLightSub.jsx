import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const SmartLightSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Thiết bị nhà thông minh'}  
            childCate={'Ổ cắm, Bóng đèn thông minh'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default SmartLightSub
