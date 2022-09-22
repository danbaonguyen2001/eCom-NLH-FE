import React,{useState} from 'react'
import { Link } from 'react-router-dom'



const ListPhoneNumberSim = ({list_number_sim}) => {

    // const [quantityShow,setQuantityShow] = useState(20)

  return (
    <div className='list-number-sim'>
      
        <div className="sim-bar">
            <div className="col-1">SIM SỐ</div>
            <div className="col-2">GIÁ TIỀN</div>
            <div className="col-3">NHÀ MẠNG</div>
            <div className="col-4"></div>
        </div>

        <ul>
            {
                list_number_sim.map(sim => (
                    <li key={sim.id}>
                        <div className="col-1">{sim.phoneNumber}</div>
                        <div className="col-2">{sim.price}<span>đ</span></div>
                        <div className="col-3">{sim.brand}</div>
                        <div className="col-4"><Link to='/sim-so-dep/vinaphone/a'>MUA</Link></div>
                    </li>
                ))
            }
        </ul>

       

    </div>
  )
}

export default ListPhoneNumberSim
