import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const AirTagSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện'}  
            childCate={'AirTag'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default AirTagSub
