import React from 'react'
import { Link } from 'react-router-dom'
import { line_strap, width_line_strap } from './data'
const LineStrap = ({linestrap}) => {
  return (
    <div className="layout-line-strap">
      <div className='line-strap flex'>
      <div className="width-line-strap flex">
        <h4>Dây da đồng hồ</h4>
        <ul className='flex'>
            <span>Bề rộng dây:</span>
            {linestrap.map(width => (
                <li className='blue'>{width}<span>mm</span></li>
            ))}
        </ul>
      </div>
      <Link 
        to="/day-dong-ho" className="view-more blue">
            <span>Xem tất cả dây đồng hồ <i class="fas fa-caret-right"></i></span>
      </Link>
    </div>

      <div className="product-line-strap flex">
          {line_strap.map(item =>(
            <div className="product">
              <img src={item.url} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>

    
  )
}

export default LineStrap
