import React from 'react'

import MainContentSubAccessories from '../MainContentSubAccessories'

const AirpodBagSub = () => {
  return (
    <div className='pageAccessories bg-accessories-sub-page'>
        <MainContentSubAccessories parentCate={'Phụ kiện'}  
            childCate={'Túi đựng AirPods'} 
            // listProduct={listProductSub}
    />
</div>
  )
}

export default AirpodBagSub
