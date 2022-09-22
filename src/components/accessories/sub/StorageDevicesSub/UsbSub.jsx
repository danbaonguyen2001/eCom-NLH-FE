import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const UsbSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Thiết bị lưu trữ'}  
            childCate={'USB'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default UsbSub
