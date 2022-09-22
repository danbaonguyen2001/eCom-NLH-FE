import React,{useState,useEffect,useRef} from 'react'
import SliderBanner from '../../accessories/SliderBanner'
import '../../../sass/simCard/simCard.scss'
import {sliders} from '../../../components/simCard/dataSimCard' 
import {banners} from '../../../components/simCard/dataSimCard' 
import { Link } from 'react-router-dom'
import ListPhoneNumberSim from './ListPhoneNumberSim'
import { useParams } from 'react-router-dom'
import { list_card_data } from '../../../components/simCard/dataSimCard'
import DropDownClassifySim from './DropDownClassifySim'
import SubPagination from './SubPagination'


const MainContentSubSimCard = ({list_sim_card}) => {
    const {simId} = useParams()
    const title = list_card_data.find(item => item.id == simId)

    const [showDropDown,setShowDropDown] = useState(false)




    
  return (
    <div className='main-content-sub'>
      
        <div className="simCard-container">
            <SliderBanner sliders={sliders} banners={banners} />

            <div className={`title-sim`}>
                <p>Bạn đang chọn sim <b>{title.title}</b><span>Xem thêm khuyến mãi</span></p>
            </div>

            <div className="search-sim">
                <input type="text" placeholder='Nhập số cần tìm'  />
                <button><span>TÌM</span></button>
            </div>

            <div className="box-filter-classify">
                <span>Lọc theo: </span>
                <span className='sim-type'
                      onClick={() => setShowDropDown(!showDropDown)}
                >Loại sim</span>
                <DropDownClassifySim showDrop={showDropDown ? 'show-drop' : ''} />
                
            </div>

            <SubPagination itemPerPage={20} list_item={list_sim_card} />

           

        </div>

    </div>
  )
}

export default MainContentSubSimCard
