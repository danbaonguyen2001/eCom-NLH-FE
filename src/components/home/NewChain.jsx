import React from 'react'
import '../../sass/home/trademark.scss'
import '../../sass/home/newchain.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import ncPic1 from "../../assets/images/home/item-NC/ncPic1.png"
import ncPic2 from "../../assets/images/home/item-NC/ncPic2.png"
import ncPic3 from "../../assets/images/home/item-NC/ncPic3.png"
const NewChain = () => {
  return (
    <div className='tmWrap ncWrap grid wide'>
    <div className="tm__title row">
        <h1>chuyên trang thương hiệu</h1>
    </div>
    <div className="tm__content row">
        <div className="content__item col c-12 m-6 l-4">
            <LazyLoadImage src={ncPic1}/>
        </div>
        <div className="content__item col c-12 m-6 l-4">
            <LazyLoadImage src={ncPic2}/>
        </div>
        <div className="content__item col c-12 m-6 l-4">
            <LazyLoadImage src={ncPic3}/>
        </div>

    </div>
</div>
  )
}

export default NewChain