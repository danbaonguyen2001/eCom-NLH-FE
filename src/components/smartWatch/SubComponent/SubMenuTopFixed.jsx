import React from 'react'
import BlockBoxFilter from '../BlockBoxFilter'


const SubMenuTopFixed = ({list_box_filter_fixed}) => {
  return (
    <div className='sub-menu-top-fixed'>
        
      <div className="smartWatch-container">
         <BlockBoxFilter list_box_filter={list_box_filter_fixed} />
      </div>

    </div>
  )
}

export default SubMenuTopFixed
