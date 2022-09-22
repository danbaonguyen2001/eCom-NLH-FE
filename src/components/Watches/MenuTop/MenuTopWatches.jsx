import React from 'react'

import BlockSaleProduct from '../../smartWatch/DealSmartWatch/BlockSaleProduct'

const MenuTopWatches = ({list_option}) => {
  
    
    return (

    <div className='MenuTopWatches'>
        
      <div className="list-option flex">
        {list_option.map( (ops, index) =>
            <div className="radio-btn">
                <input type="radio" name="" id={index} />
                <label for= {index}>{ops}</label>
            </div>
        )}
      </div>

      
    </div>
  )
}

export default MenuTopWatches
