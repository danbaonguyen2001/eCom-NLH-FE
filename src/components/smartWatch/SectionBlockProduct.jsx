import React from 'react'
import MenuTop from '../accessories/MenuTop'
import ListProductSmartWatch from './ListProductSmartWatch'
import { Link } from '@mui/material'


const SectionBlockProduct = ({banner,menu_top,list_product,content_btn,linkTo}) => {
  return (
    <section>
        <div className="block">

            <div className="block-banner">
                <img src={banner} alt="" />
            </div>

            {/* <MenuTop menuTop={menu_top} /> */}

            <ListProductSmartWatch listProduct={list_product} quantityShow={10} />

            <button className='btnViewMore'><a href={linkTo} className='link'>Xem tất cả {content_btn}</a></button>
        </div>
    </section>
  )
}

export default SectionBlockProduct 
