import React from 'react'

import DataCard from './DataCard'
import BasicSim from './BasicSim'


const BlockSim = ({background,title,list_card_data,border_color,level}) => {
  return (
    <div className={`block-sim ${border_color}`}>
      
        <div className="title">
            <img src={background} alt="" />
            <h2>{title}</h2>
        </div>

        <div className="block-content-sim">
          {level === 'advance' ? (          
            <DataCard list_card_data={list_card_data} />
          ) : (
            <BasicSim list_basic_sim={list_card_data} />
          )}
        </div>

    </div>
  )
}

export default BlockSim
