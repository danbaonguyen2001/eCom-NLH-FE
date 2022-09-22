import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const SonyAccessoriesSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện'}  
            childCate={'Phụ kiện Sony chính hãng'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default SonyAccessoriesSub
