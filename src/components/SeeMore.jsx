import React from 'react'
import { veData } from './home/mockData'

const PSlider = React.lazy(()=>import('../components/home/subComponent/PSlider'))

// Load sản phẩm điện thoại có thể tái sử dụng để loàd danh sách sản phẩm liên quan
const SeeMore = () => {
  // veData config
    const veSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        focusOnSelect: true,
      };
  return (
    <div className="see_more">
        <header className='see_more_header'>Xem thêm sản phẩm khác</header>
        <PSlider data={veData} settings={veSettings}/>
    </div>          
  )
}

export default SeeMore