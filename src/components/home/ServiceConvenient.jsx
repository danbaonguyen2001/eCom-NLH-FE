import React from 'react'
import moreBt from "../../assets/images/home/More.svg"
import "../../assets/css/home/serviceconvenient.css"
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ServiceConvenient = () => {
  return (
    <div className='scWrap grid wide'>
        <div className="sc__top row">
            <div className="top__title col">
                <h1>dịch vụ tiện ích</h1>
            </div>
            <div className="top__bt col">
                <Link to="/tien-ich">
                    <LazyLoadImage width="142px" height="auto" src={moreBt}/>
                    
                </Link>
            </div>
        </div>
        <div className="sc__content row">
            <Link to="/">
            <div className="sc__card sc__card--1 col">
                <p>
                    <span className='red'>
                        Giảm 3%&nbsp;

                    </span>
                    <span>
                        cho mệnh giá từ 100.000 trở lên
                    </span>
                </p>
                <div className="card__exp">
                    <span className="card__exp--month">July</span>
                    <span className="card__exp--day">15</span>
                    <span className="card__exp--yr">2022</span> <br/>
                    <span className="card__exp--time">9:00pm</span>

                    

                </div>
            </div>
            </Link>
            <Link to="/">
            <div className="sc__card sc__card--2 col">
                <p>
                    <span className='red'>
                        

                    </span>
                    <span>
                        Điện, nước, Internet, Cước điện thoại trả sau
                    </span>
                </p>
                <div className="card__exp">
                    <span className="card__exp--month">July</span>
                    <span className="card__exp--day">15</span>
                    <span className="card__exp--yr">2022</span> <br/>
                    <span className="card__exp--time">9:00pm</span>

                    

                </div>
            </div>
            </Link>
            <Link to="/">
            <div className="sc__card sc__card--3 col">
                <p>
                    <span  className='red'>
                        Giảm 3%&nbsp;

                    </span>
                    <span >
                        cho tất cả nhà mạng, áp dụng mệnh giá từ 100.000 trở lên
                    </span>
                </p>
                <div className="card__exp">
                    <span className="card__exp--month">July</span>
                    <span className="card__exp--day">15</span>
                    <span className="card__exp--yr">2022</span> <br/>
                    <span className="card__exp--time">9:00pm</span>

                    

                </div>
            </div>
            </Link>
            <Link to="/">
            <div className="sc__card sc__card--4 col">
                <p>
                    <span className='red'>
                        

                    </span>
                    <span>
                        Thu hộ tiền vé máy bay, vé tàu, vé xe
                    </span>
                </p>
                <div className="card__exp">
                    <span className="card__exp--month">July</span>
                    <span className="card__exp--day">15</span>
                    <span className="card__exp--yr">2022</span> <br/>
                    <span className="card__exp--time">9:00pm</span>

                    

                </div>
            </div>
            </Link>

        </div>
    </div>
  )
}

export default ServiceConvenient