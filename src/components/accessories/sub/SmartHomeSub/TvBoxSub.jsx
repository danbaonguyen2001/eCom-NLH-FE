import React from 'react'
import MainContentSubAccessories from '../MainContentSubAccessories'

const TvBoxSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Thiết bị nhà thông minh'}  
            childCate={'TV Box'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default TvBoxSub
