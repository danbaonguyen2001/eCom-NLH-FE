import React from 'react'

import { Link } from 'react-router-dom'
import { list_number_sim } from './dataSimCard'


const DataCard = ({list_card_data}) => {
  return (
    
    <section className='list-card'>

        {list_card_data.map(item => (
            <div className='data-card' key={item.id}>
                <Link to='javascrit:;' className={`banner ${item.brand}`}>
                    <div className="img">
                    <img src={item.img} alt={item.title} />
                    </div>
                    <span>Xem chi tiết</span>
                </Link>

                <Link to={`/sim-so-dep/${item.brand}/id=${item.id}`} className='data-content'>
                    
                        { item.service.length <= 1 ? (
                            <ul>
                                {item.service.map(serv => (
                                    <li>
                                        <i className={`${serv.icon} icon`}></i>
                                        <p>{serv.content}</p>
                                    </li>
                       ))}
                            </ul>
                        ) : (
                            <ul>
                                {
                                    item.service.map(serv => (
                                        <li className='straight'>
                                            <i className={`${serv.icon} icon`}></i>
                                            <p>{serv.content}</p>
                                        </li>
                                   ))
                                }
                            </ul>
                        )
                            
                        }
                    

                    <div className="info-data">
                        {
                            item.info.map(inf => (
                               
                                <p className='content'><i className='icon-sim'></i> {inf}</p>
                            ))
                        }
                    </div>

                    <div className="info-act">
                        <div className="price">
                            Giá từ
                            <p>{item.price}<span>đ</span></p>
                        </div>

                       <button className='btn-act'><span>CHỌN SỐ</span></button>

                    </div>

                </Link>

            </div>
        ))}

    </section>
  
  )
}

export default DataCard
