import React from 'react'

// import { listDropdownCate } from './data'
import { Link } from 'react-router-dom'
import { groupCate } from './data'

const DropdownAccessories = ({nameCate}) => {

    const classN = `dropdown-cate ${nameCate}`
  return (
    <div className={classN}>
        <span className='icon-angle-up'></span>
        <ul>
            {groupCate.map(drop => 
                ((drop.name === nameCate) && (drop.childCate.length)) ? (
                    drop.childCate.map((child,idx) => (
                        <li key={idx}>
                            <Link to={`${child.link}`}>
                            <img src={child.imgUrl} alt="" />
                            <span className='content-dropdown'>{child.nameChild}</span>
                            </Link>
                        </li>
                    ))
                ) : ('')
            )}
        </ul>
    </div>
  )
}

export default DropdownAccessories
