import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "../../sass/home/trademark.scss"
import tmPic1 from "../../assets/images/home/item-TM/tmPic1.png"
import tmPic2 from "../../assets/images/home/item-TM/tmPic2.png"
import tmPic3 from "../../assets/images/home/item-TM/tmPic3.png"

const TradeMark = () => {
  return (
    <div className='tmWrap grid wide'>
        <div className="tm__title row">
            <h1>chuyên trang thương hiệu</h1>
        </div>
        <div className="tm__content row">
            <div className="content__item col c-12 m-6 l-4">
                <LazyLoadImage src={tmPic1}/>
            </div>
            <div className="content__item col c-12 m-6 l-4">
                <LazyLoadImage src={tmPic2}/>
            </div>
            <div className="content__item col c-12 m-6 l-4">
                <LazyLoadImage src={tmPic3}/>
            </div>

        </div>
    </div>
  )
}

export default TradeMark