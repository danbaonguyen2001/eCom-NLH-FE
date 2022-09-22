import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const PhoneHookSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện'}  
            childCate={'Mốc, Móc điện thoại'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default PhoneHookSub
