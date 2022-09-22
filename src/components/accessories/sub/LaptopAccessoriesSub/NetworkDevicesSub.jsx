import React from 'react'

import MainContentSubAccessories from '../MainContentSubAccessories'

const NetworkDevicesSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện laptop'}  
            childCate={'Thiết bị mạng'} 
            // listProduct={listProductSub}
        />
</div>
  )
}

export default NetworkDevicesSub
