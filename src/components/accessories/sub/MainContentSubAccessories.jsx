import React,{useState,useEffect} from 'react'

import BreadcrumbAccessories from './BreadcrumbAccessories'
import SliderBanner from '../SliderBanner'
import BoxFilter from './BoxFilter'
import ListProduct from '../ListProduct'
import '../../../sass/accessories/accessories.scss'
import { list_box_filter_sac_dung_phong } from '../data'
import BlockBoxFilter from '../../smartWatch/BlockBoxFilter'



const categories = [
    {
        title: 'Sạc dự phòng',
        name:'backupCharger',
        url: 'https://cdn.tgdd.vn/Category/57/5-Pinsa%CC%A3cdu%CC%9B%CC%A3pho%CC%80ng-120x120.png'
    },
    {
        title: 'Sạc, cáp',
        name:'chargeCable',
        url: 'https://cdn.tgdd.vn/Category/9518/10-Ca%CC%81psa%CC%A3cchuye%CC%82%CC%89ndo%CC%82%CC%89i-120x120.png'
    },
    {
        title: 'Tai nghe',
        name:'headphone',
        url: 'https://cdn.tgdd.vn/Category/54/21-Tainghe-120x120.png'
    },
    {
        title: 'Loa',
        name:'speaker',
        url: 'https://cdn.tgdd.vn/Category/2162/22-Loa2-120x120.png'
    },
    {
        title: 'Thiết bị nhà thông minh',
        name:'tech',
        url: 'https://cdn.tgdd.vn/Category/9458/thongminh-120x120.png'
    },
    {
        title: 'Camera, webcam',
        name:'camera',
        url: 'https://cdn.tgdd.vn/Category/4728/17-Camerawebcam-120x120.png'
    },
    {
        title: 'Thiết bị mạng',
        name:'wifi',
        url: 'https://cdn.tgdd.vn/Category/4727/16-Thie%CC%82%CC%81tbi%CC%A3ma%CC%A3ng-120x120.png'
    },
    {
        title: 'Ốp lưng, miếng dán',
        name:'bumper',
        url: 'https://cdn.tgdd.vn/Category/9262/icon-mieng-dan-op-lung-100x100-1.png'
    },
    {
        title: 'Chuột máy tính',
        name:'mouse',
        url: 'https://cdn.tgdd.vn/Category/86/13-Chuo%CC%A3%CC%82tma%CC%81yti%CC%81nh-120x120.png'
    },
    {
        title: 'Bàn phím',
        name:'keyBoard',
        url: 'https://cdn.tgdd.vn/Category/4547/19-Ba%CC%80nphi%CC%81m-120x120.png'
    },
]
const sliders = [
    {
        id:1,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-6.png'
    
    },
    {
        id:2,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/06/banner/800x200-(1)-800x200.png'
    
    },
    {
        id:3,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-18.png'
    
    },
    {
        id:4,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/05/banner/800x200-800x200-1.png'
    
    },
    {
        id:5,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/07/banner/800-200-800x200-10.png'
    
    },
    {
        id:6,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/06/banner/800-200-800x200-28.png'
    
    },
    {
        id:7,
        title: 'Lorem',
        url: 'https://cdn.tgdd.vn/2022/06/banner/800x200-800x200-1.jpg'
    
    }
]

const banners =[
    {
        id:1,
        title:'lorem',
        url:'https://cdn.tgdd.vn/2022/05/banner/sticky-airpod-390-97-390x97.png'
    },
    {
        id:2,
        title:'lorem',
        url:'https://cdn.tgdd.vn/2022/05/banner/stickyJBL-390x97-1.jpg'
    }
]


const MainContentSubAccessories = ({parentCate,childCate,listProduct,totalShow,setShowSub,functions}) => {

    const [quantityShow,setQuantityShow] = useState(5)
    const [totalQuantity,setTotalQuantity] = useState(0)

    useEffect(() => {
        setTotalQuantity(totalShow-5)
    },[totalShow])

    
    const handleShowViewMore = (e) =>{
        setQuantityShow(prev => prev + 10)
        setTotalQuantity(prev => prev - 10)
    }

  return (
    <div>
        <div className="mainHeader bg-main-header-accessories-sub-page">
            <div className="accessories-container">
                <BreadcrumbAccessories parentCate={parentCate} childCate={childCate} totalProduct={totalShow}/>
                <SliderBanner sliders={sliders} banners={banners} />
                
            </div>
        </div>

        <div className='mainContent bg-main-content-accessories-sub-page'>
            <div className="accessories-container">

            <BlockBoxFilter list_box_filter={list_box_filter_sac_dung_phong}
                           setShowSub={setShowSub}
                          
                           functions={functions}
                           
            />

            <BoxFilter totalQuantity={totalShow} childCate={childCate} functions={functions}  />

            <ListProduct listProduct={listProduct}  quantityShow={quantityShow}/>

            
            { totalQuantity <= 0 ? ('') : (
                <button className='btnViewMore-sub'
            ><a href="javascript:;" onClick={handleShowViewMore}>Xem thêm {totalQuantity} {childCate}</a></button>
            )}
            

        </div>
    </div>
    </div>
  )
}

export default MainContentSubAccessories
