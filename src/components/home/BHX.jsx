import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "../../sass/home/bhx.scss"
import bhxI from "../../assets/images/home/item-BHX/bhxI.png"
import moreBt from "../../assets/images/home/item-BHX/moreBt.svg"
import { bhxArr } from './bhxVar'
import { Link } from 'react-router-dom'
const BHX = () => {
  return (
    <div className='bhxWrap grid wide'>
        <div className="bhx__top row">
            <div className="col">
                {/* Animate circle */}
                <div className="top__circle col"></div>

                {/* Icon */}
                <div className="top__icon col">
                    <LazyLoadImage src={bhxI}/>
                </div>

                {/* Free ship */}
                <div className="top__freeship col">
                    <p className='yellow'>
                        FREESHIP cho đơn hàng từ 300.000đ
                    </p>
                    <p>
                        (Đây là khuyến mãi của website cùng tập đoàn MWG)
                    </p>
                </div>
            </div>
            

            {/* More discount */}
            <div className="top__discount col">
                <Link to="/">
                <LazyLoadImage src={moreBt}/>
                </Link>
            </div>
        </div>
        <div className="bhx__content row">
            {/* Input */}
            <div className="content__card content__card1 l-2 m-4 c-6">
                <div className="card1__des">Tặng thêm mã giảm 10%</div>
                <form action="/">
                    <input type="text" placeholder='Nhập email' name='email'/>
                    <input type="text" placeholder='Nhập SĐT' name="sdt"/>
                    <button type='submit'>
                        nhận mã
                    </button>

                </form>
            </div>
            {/* Card */}
            {
                bhxArr.map((v,i)=>{
                    return   <div key={i} className="content__card content__card2 l-2 m-4 c-6">
                        <LazyLoadImage src={v.path}/>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default BHX