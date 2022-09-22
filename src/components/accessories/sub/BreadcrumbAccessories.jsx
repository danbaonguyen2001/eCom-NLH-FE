import React from 'react'

const BreadcrumbAccessories = ({parentCate,childCate,totalProduct}) => {
  return (
    <div className='breadcrumb'>
        <ul>
          <li><a href="" className='parentCate'>{parentCate}</a></li>
          <li><a href="" className='childCate'>{childCate}</a></li>
          <li><span className='quantity'>{totalProduct} {childCate}</span></li>
        </ul>
    </div>
  )
}



export default BreadcrumbAccessories
