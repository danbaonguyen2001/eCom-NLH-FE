import React from 'react'
import MainContentSubSmartWatch from '../MainContentSubSmartWatch'
import { list_product_smartWatch } from '../dataSmartWatch'
import { list_box_filter_xiaomi } from '../dataSmartWatch'
const sliders = [
  {
      id:1,
      title: 'Lorem',
      url: 'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-144.png'
  
  },
  
]

const banners =[
  {
      id:1,
      title:'lorem',
      url:'https://cdn.tgdd.vn/2022/06/banner/5-390x97.png'
  },
  {
      id:2,
      title:'lorem',
      url:'https://cdn.tgdd.vn/2022/06/banner/1-390x97.png'
  }
]



const LayoutXiaomiSmartWatch = () => {
  return (
    <div className='page-sub-watch'>

        <MainContentSubSmartWatch 
            parent_cate={'Đồng hồ thông minh'}
            child_cate={'Đồng hồ thông minh Xiaomi'}
            list_product={list_product_smartWatch}
            sliders={sliders}
            banners={banners}
            list_box_filter={list_box_filter_xiaomi}
        />
      
    </div>
  )
}

export default LayoutXiaomiSmartWatch
