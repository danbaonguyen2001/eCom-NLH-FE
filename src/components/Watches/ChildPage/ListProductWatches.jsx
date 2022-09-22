import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from '../../accessories/StarRating'
import '../../../sass/Watches/WatchForMen.scss'

const ListProductWatches = ({listProduct, quantityShow}) => {


  
  return (
    <div className='ListProductWatches'>
      {listProduct?.slice(0,quantityShow).map(item => (
        <Link 
        to={{
          pathname: `/productdetail/${item?.name}`,
          state: { productId: item?.id },
        }} key={item?.id} className="product-watches">
            <div className="avatar">
                <img src= {item?.image} alt="" />
            </div>
            <div className="detail">
                <p className='name-product'>{item?.name}</p>
                {/* {item.note && (
                    <p className='note'>{item.note}</p>
                )} */}

                <p className='price-old'>

                {item?.marketPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                <span className='discount'>   -{item?.promotion}%</span>
                </p>
                <p className='price-new'><b>
                {item?.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                  
                  </b></p>

                


                    {/* <ul >
                        {list_inform_watches.map(inform => (
                            <li>{inform}</li>
                        ))}
                    </ul> */}
            </div>

            <StarRating rating={item?.rate}/>
        </Link>
      ))}
    </div>
  )
}

export default ListProductWatches
