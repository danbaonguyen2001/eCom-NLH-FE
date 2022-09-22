import React from 'react'

import MainContentSubAccessories from '../MainContentSubAccessories'

const SoftwareSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện laptop'}  
            childCate={'Phần mềm'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default SoftwareSub
