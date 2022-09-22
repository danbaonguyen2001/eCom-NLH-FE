import React from 'react'
import "../../assets/css/home/goldenweek.css"
// data
import { hoData4,veData } from './mockData'
// sub com
const Slider = React.lazy(()=>import("./subComponent/Slider")) 
const PSdlier = React.lazy(()=>import('./subComponent/PSlider'))
const ListAllButton = React.lazy(()=>import('./subComponent/ListAllButton')) 
const GoldenWeek = () => {
    // hoData config
    const hoSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        navArr:true,
      };
    // veData config
    const veSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        focusOnSelect: true,
      };
  return (
    <div className='gwWrap wide grid'>
        <div className="gw__title row ">
            <h1 className='col l-12 m-12 c-12'> tuần lễ vàng vivo</h1>
        </div>
        <div className="gw__midSlider ">
            <Slider data={hoData4} settings={hoSettings}/>
        </div>
        <div className="gw__botSlider ">
            <PSdlier data={veData} settings={veSettings}/>
        </div>
        <div className="gw__bt row ">
            <ListAllButton className="col"/>
        </div>
    </div>
  )
}

export default GoldenWeek