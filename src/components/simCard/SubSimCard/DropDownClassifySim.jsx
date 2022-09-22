import React from 'react'
import { Link } from 'react-router-dom'
import { menu_drop_down_classify } from '../dataSimCard'

const DropDownClassifySim = ({showDrop}) => {
  return (
    <div className={`drop-down-classify ${showDrop}`}>
      
        <div className="title-drop">

            <Link to='' className='all'>Tất cả</Link>


        </div>

        <ul>
            {
            menu_drop_down_classify.map(drop => (
                <li><Link to=''>{drop}</Link> </li>
            ))
            }
        </ul>

    </div>
  )
}

export default DropDownClassifySim
