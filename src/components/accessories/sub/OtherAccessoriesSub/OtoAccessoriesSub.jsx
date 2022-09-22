import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const OtoAccessoriesSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện khác'}  
            childCate={'Phụ kiện ô tô'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default OtoAccessoriesSub
