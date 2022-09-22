import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const JBLAccessoriesSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện'}  
            childCate={'Phụ kiện JBL chính hãng'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default JBLAccessoriesSub
