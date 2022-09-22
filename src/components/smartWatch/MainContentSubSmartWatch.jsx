import React,{useState,useEffect} from 'react'
import BreadcrumbAccessories from '../accessories/sub/BreadcrumbAccessories'
import SliderBanner from '../accessories/SliderBanner'
import '../../sass/smartWatch/smartWatch.scss'
import BoxFilter from '../accessories/sub/BoxFilter'
import ListProductSmartWatch from './ListProductSmartWatch'
import BlockBoxFilter from './BlockBoxFilter'
import SubMenuTopFixed from './SubComponent/SubMenuTopFixed'
import { list_box_filter_sac_dung_phong } from '../accessories/data'


const MainContentSubSmartWatch = ({parent_cate,child_cate,list_product,totalShow,sliders,banners,functions,setShowSub}) => {
  
  const [quantityShow,setQuantityShow] = useState(5)
  const [totalQuantity,setTotalQuantity] = useState(0)
    const [showMenuTopFixed,SetShowMenuTopFixed] = useState(false)

    useEffect(() => {
      setTotalQuantity(totalShow-5)
  },[totalShow])

    useEffect(()=>{

      const handleScroll = () =>{

         console.log(window.scrollY) 
        if(window.scrollY >= 450)
        {
          SetShowMenuTopFixed(true)
        } else{
          SetShowMenuTopFixed(false)
        }

      }

      window.addEventListener('scroll',handleScroll)

      return () =>{
        window.removeEventListener('scroll',handleScroll)
      }

    },[])

    const handleShowViewMore = (e) =>{
        setQuantityShow(prev => prev + 20)
        setTotalQuantity(prev => prev - 20)
    }
    return (
    <div>

      { showMenuTopFixed && <SubMenuTopFixed list_box_filter_fixed={list_box_filter_sac_dung_phong} />}

      
      <div className="main-header-sub-watch" >
        <div className="smartWatch-container">
            <BreadcrumbAccessories parentCate={parent_cate} childCate={child_cate} listProduct={list_product} />
            <SliderBanner sliders={sliders} banners={banners} />
        </div>
      </div>

        <div className="main-content-sub-watch">
            <div className="smartWatch-container">

                <BlockBoxFilter list_box_filter={list_box_filter_sac_dung_phong}
                           setShowSub={setShowSub}
                          
                           functions={functions} />
               

                <BoxFilter totalQuantity={totalShow} childCate={child_cate} functions={functions} />
                <ListProductSmartWatch listProduct={list_product} quantityShow={quantityShow} />

                { totalQuantity <= 0 ? ('') : (
                <button className='btnViewMore-sub'
            ><a href="javascript:;" onClick={handleShowViewMore}>Xem thêm {totalQuantity} {child_cate}</a></button>
            )}

            </div>
        </div>


    </div>
  )
}

export default MainContentSubSmartWatch
