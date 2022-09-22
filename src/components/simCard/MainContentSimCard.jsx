import React from 'react'
import SliderBanner from '../accessories/SliderBanner'
import '../../sass/simCard/simCard.scss'
import {list_card_price, list_suppliers, sliders} from '../../components/simCard/dataSimCard' 
import {banners} from '../../components/simCard/dataSimCard' 
import BlockSim from './BlockSim'
import { list_card_data } from './dataSimCard'
import bg_sim from '../../assets/images/simCard/title_sim_1.png'
import bg_data from '../../assets/images/simCard/title_sim_2.png'
import bg_basic_sim from '../../assets/images/simCard/title_sim_3.png'
import { list_basic_sim } from '../../components/simCard/dataSimCard'
import BuyGameCard from './BuyGameCard'
import ListPriceCard from './ListPriceCard'

const MainContentSimCard = () => {
  return (
    <div className='main-sim-card'>
        <div className="simCard-container">
            <SliderBanner sliders={sliders} banners={banners} />
            <div className="col-card ">
              <div className="block-sim-card-data">
                <div className="title-sim">
                  <p>Chọn <b>GÓI CƯỚC</b>, sau đó bấm <b>CHỌN SỐ</b> để xem <b>HƠN 400.000 SIM</b> tại <b>TGDĐ</b></p>
                </div>              
                  <BlockSim background={bg_sim} 
                                        title={"GỌI THẢ GA, DATA KHỦNG"} 
                                        list_card_data={list_card_data} 
                                        border_color={'border_sim'}
                                        level={'advance'}
                                        />
                            
                  <BlockSim background={bg_data} 
                            title={"SIM DATA SIÊU TỐC"} 
                            list_card_data={list_card_data}
                            border_color={'border_data'}
                            level={'advance'} />          
    
                  <BlockSim background={bg_basic_sim} 
                            title={"SIM NGHE GỌI CƠ BẢN"} 
                            list_card_data={list_basic_sim}
                            border_color={'border_basic_sim'}
                            level={'basic'} />
                            
                  </div>         

           
      

              <div className="block-game-card-data">
                <BuyGameCard/>
              </div>
                          
            </div>
        </div>
    </div>
  )
}

export default MainContentSimCard
