import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const CalculatorSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện khác'}  
            childCate={'Máy tính cầm tay'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default CalculatorSub
