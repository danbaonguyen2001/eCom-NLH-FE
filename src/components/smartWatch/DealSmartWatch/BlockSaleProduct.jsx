import React from 'react'
import bg_block from '../../../assets/images/smartWatch/block_fest.png'
import '../../../sass/smartWatch/smartWatch.scss'
import { Link } from 'react-router-dom'

const BlockSaleProduct = ({list_product}) => {
  return (
    <div className="group-block-product">
        {
            list_product.slice(0,2).map(item => (
                <div className="block-product" key={item.id}>

                <Link to='' >
                    <img src={bg_block} alt="" className='bg-block' />
                    <div className="content-block">
                        
                        <div className='img'><img src={item.urlImg} alt={item.title} /></div>
                        
                        <div className="info-product">
                            <h2 className='title'>{item.title}</h2>

                            <p className='text-online'>{item.online}</p>

                            <div className='priceOld'>
                                <span className='initialPrice'>{item.initialPrice} <span className='currency'>đ</span>
                                </span>
                                <span className='discount'>-{item.discount}%</span>   
                            </div>

                            <p className='priceDeal'>1000
                                <span className='currency'>đ</span>
                            </p>
                        </div>
                    </div>
                </Link>
                </div>
            ))
        }
              
    </div>
  )
}

export default BlockSaleProduct
