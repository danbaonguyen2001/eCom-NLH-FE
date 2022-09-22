import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const MemoryCardSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Thiết bị lưu trữ'}  
            childCate={'Thẻ nhớ'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default MemoryCardSub
