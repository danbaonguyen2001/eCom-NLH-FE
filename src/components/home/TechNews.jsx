import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "../../sass/home/technews.scss"
import arr from "../../assets/images/home/More.svg"
import newsPic from "../../assets/images/home/item-TN/newspic.png"
import sponsorPic from "../../assets/images/home/item-TN/sponsorImg.png"
import { Link } from 'react-router-dom'
const TechNews = () => {
  return (
    <div className='tnWrap grid wide'>
        <div className="tn__inner row">
            {/* Tech news */}
            <div className="tn__news col l-9 m-9 c-9">
                {/* News - Title */}
                <div className="news__title row">
                    <h1>24h công nghệ</h1>
                    <div className="news__more">
                        <LazyLoadImage src={arr}/>
                    </div>
                </div>
                {/* News - Content */}
                <div className="news__content row">
                    <div className="news__contentCard col c-4">
                        <LazyLoadImage src={newsPic}/>
                        <span>Giảm tưng bừng các mẫu smartphone 5G
                            <br/>độc quyền chỉ có tại TGDĐ! Đừng bỏ lỡ nhớ</span>
                    </div>
                    <div className="news__contentCard col c-4">
                        <LazyLoadImage src={newsPic}/>
                        <span>Giảm tưng bừng các mẫu smartphone 5G
                            <br/>độc quyền chỉ có tại TGDĐ! Đừng bỏ lỡ nhớ</span>
                    </div>
                    <div className="news__contentCard col c-4">
                        <LazyLoadImage src={newsPic}/>
                        <span>Giảm tưng bừng các mẫu smartphone 5G
                            <br/>độc quyền chỉ có tại TGDĐ! Đừng bỏ lỡ nhớ</span>
                    </div>


                </div>
            </div>
            {/* Sponsor */}
            <div className="tn__sponsor col l-3 m-3 c-3">
                <Link to="/">
                    <LazyLoadImage src={sponsorPic}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TechNews