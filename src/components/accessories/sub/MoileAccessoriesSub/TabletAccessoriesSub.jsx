import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const TableAccessoriesSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện'}  
            childCate={'Phụ kiện tablet'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default TableAccessoriesSub
