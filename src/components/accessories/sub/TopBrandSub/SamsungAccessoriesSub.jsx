import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const SamsungAccessoriesSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện'}  
            childCate={'Phụ kiện Samsung chính hãng'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default SamsungAccessoriesSub
