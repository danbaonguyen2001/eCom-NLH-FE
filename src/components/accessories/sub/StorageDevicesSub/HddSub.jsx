import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const HddSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Thiết bị lưu trữ'}  
            childCate={'Ổ cứng di động'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default HddSub
