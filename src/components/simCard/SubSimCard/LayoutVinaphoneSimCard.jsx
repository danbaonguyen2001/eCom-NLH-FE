import React from 'react'
import MainContentSubSimCard from './MainContentSubSimCard'
import { list_number_sim } from '../dataSimCard'

const LayoutVinaphoneSimCard = () => {
  return (
    <div className='page-sub-sim-card'>

        <MainContentSubSimCard list_sim_card={list_number_sim} />
      
    </div>
  )
}

export default LayoutVinaphoneSimCard
