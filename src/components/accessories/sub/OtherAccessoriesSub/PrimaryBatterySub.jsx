import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const PrimaryBatterySub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện khác'}  
            childCate={'Pin tiểu'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default PrimaryBatterySub
