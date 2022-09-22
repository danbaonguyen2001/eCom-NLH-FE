import React from 'react'
import { hoDataPo } from './mockData';
import "../../assets/css/home/payol.css"
const Slider = React.lazy(()=>import("../home/subComponent/Slider"))
const DiscountPayOl = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        navArr:true,
      };
  return (
    
    <div className='poWrap'>
        <div className="po__title">
            <h1>giảm thêm khi thanh toán online</h1>
        </div>
        <div className="po__content">
            <Slider data={hoDataPo} settings={settings}/>
        </div>

    </div>
  )
}

export default DiscountPayOl