import React from 'react'

import MainContentSubAccessories from '../MainContentSubAccessories'

const CameraSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện laptop'}  
            childCate={'Camera, webcam'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default CameraSub
