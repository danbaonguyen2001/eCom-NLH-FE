import React from 'react'

import bannerEvent from '../../assets/images/smartWatch/gold_week.png'
import StarRating from '../accessories/StarRating'
import { Link } from 'react-router-dom'

const ListProductSmartWatch = ({listProduct,quantityShow}) => {
  return (
    <div className='list-product'>
     {
        listProduct?.slice(0,quantityShow).map(item =>(
            <Link  to={{
              pathname: `/productdetail/${item.name}`,
              state: { productId: item.id },
            }} key={item?.id} className='item-product'>
                <div className='img'>
                  <img src={item?.image} alt={item?.name} className='img-product'/>
                 
                  </div>
                  <div className='special-event'>
                    <img  src={bannerEvent}  />
                    <span>TUẦN LỄ GIẢM SỐC</span>
                </div>
                <h3 className='title'>{item?.name}</h3>
                <p className='text-online'>Chỉ bán online</p>

                <div className='priceOld'>
                  {
                    item?.promotion > 0 ? (
                      <div className="">
                            <span className='initialPrice'>
                      {item?.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                    </span>
                      <span className='discount'>-{item?.promotion}%</span>
                      </div>
                    ) : ('')
                  }
                  
                </div>
                <p className='priceDeal'>{item?.marketPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  <span className='currency'>&#8363;</span>
                </p>
                <StarRating rating={item?.rate} />
                <span className='rateTotal'>{item?.rate}</span>
            </Link>
        ))
      }
      
    </div>
  )
}

export default ListProductSmartWatch
