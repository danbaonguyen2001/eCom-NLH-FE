import React from 'react'

import MainContentSubAccessories from '../MainContentSubAccessories'

const ShelfLaptopSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện laptop'}  
            childCate={'Giá đỡ laptop'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default ShelfLaptopSub
