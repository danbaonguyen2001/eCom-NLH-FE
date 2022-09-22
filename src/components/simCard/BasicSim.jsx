import React from 'react'
import { Link } from 'react-router-dom'

const BasicSim = ({list_basic_sim}) => {
  return (
    <div className='list-basic-sim'>
        
        {
            list_basic_sim.map(sim => (
                
                <Link to='' className="basic-sim">
                    <div className={`banner-title ${sim.brand}`}>
                        <img src={sim.img} alt="" />
                    </div>

                   <div className="a-center">
                   <div className="info-act">
                   <div className="price">
                            Giá từ: <p>{sim.price}<span>đ</span></p>
                        </div>

                        <button className='btn-act'><span>CHỌN SỐ</span></button>
                    </div>
                   </div>

                </Link>

            ))
        }

    </div>
  )
}

export default BasicSim
