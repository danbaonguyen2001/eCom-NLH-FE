import React,{useState} from 'react'

const MoveToCardFixed = ({active,handleClick}) => {



  return (
    <div className='move-to-card-fixed'>
        <div className="flash-sale box"
            style={active === 'flash' ? {
                backgroundColor:'#ff8f00'
            } : {}}
            onClick={e => handleClick(980)}
        >
            <span>Flashsale</span>
        </div>
      
        <div className="sale-smart-watch box"
            style={active === 'fest' ? {
                backgroundColor:'#ff8f00'
            } : {}} 
            onClick={e => handleClick(1680)}
        >
            <span>Smartwatch Giảm sốc</span>
        </div>

    </div>
  )
}

export default MoveToCardFixed
