import React from 'react'
import "../../assets/css/home/trendingshop.css"
import { Link } from 'react-router-dom'
const TrendingShop = () => {
  return (
    <div className='trendWrap wide grid'>
        <div className="ts__title row">
            <h1 className='col'>xu hướng mua sắm</h1>
        </div>
        <div className="ts__content row">
            <div className="col l-3 m-6 c-12">
                <div className='content__card content__card--1'>
                    <Link to="/">
                        <div className="card__cate">Điện thoại</div>
                        <div className="card__name">Galaxy M Series</div>
                    </Link>

                </div>
            </div>
            <div className="col l-3 m-6 c-12">
                <div className='content__card content__card--2'>
                    <Link to="/">
                        <div className="card__cate">Macbook,iMac</div>
                        <div className="card__name">Mua online có quà</div>
                    </Link>

                </div>
            </div>
            <div className="col l-3 m-6 c-12">
                <div className='content__card content__card--3'>
                    <Link to="/">
                        <div className="card__cate">Tai nghe không dây</div>
                        <div className="card__name">Giảm đến 50%</div>
                    </Link>

                </div>
            </div>
            <div className="col l-3 m-6 c-12">
                <div className='content__card content__card--4'>
                    <Link to="/">
                        <div className="card__cate">Smartwatch</div>
                        <div className="card__name">Giảm đến 50%++</div>
                    </Link>

                </div>
            </div>
        </div>

    </div>
  )
}

export default TrendingShop