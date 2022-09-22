import React, {useState,useEffect} from 'react'
import '../../../sass/Watches/ShockWatches.scss'
import '../../../sass/Watches/Watches.scss'
import wt_casio from '../../../assets/images/Watch/wt_casio.png'
import wt_citizen from '../../../assets/images/Watch/wt_citizen.png'
import wt_titan from '../../../assets/images/Watch/wt_titan.png'
import wt_sr_watch from '../../../assets/images/Watch/wt_sr_watch.png'
import all_watch from '../../../assets/images/Watch/all_watch.png'
import ListProductFlashSale from './ListProductFlashSale'
import { list_item_sale_casio, list_option_menu_top, list_product_flash_sale, list_product_watch_casio } from './dataChildPage'
import MenuTopWatches from '../MenuTop/MenuTopWatches'
import BlockSaleProduct from '../../smartWatch/DealSmartWatch/BlockSaleProduct'
import ListProductSmartWatch from '../../smartWatch/ListProductSmartWatch'
import MoveToCardFixed from '../../smartWatch/DealSmartWatch/MoveToCardFixed'


const ShockWatches = () => {

  const [quantityShow,setQuantityShow] = useState(10)
  const [totalQuantity,setTotalQuantity] = useState(list_product_watch_casio.length-10)

    
  const handleShowViewMore = (e) =>{
       
            setQuantityShow(prev => prev + 10)
            setTotalQuantity(prev => prev - 10)
   
  }

  const [show,setShow] = useState(false)
  const [transfer,setTransfer] = useState(500)

  useEffect(() =>{

    const handleScroll = () =>{

      console.log(window.scrollY)
      if(window.scrollY >= 980 && window.scrollY <= 1000 )
      {
        setShow(true)
        setTransfer('flash')
      } else if(window.scrollY >= 1680)
      {
        setTransfer('fest')
      } else if(window.scrollY < 980)
      {
        setShow(false)
      }

    }
    window.addEventListener('scroll',handleScroll)

    return () =>{
      window.removeEventListener('scroll',handleScroll)
  }
  },[])

  const handleClick = (e) => {
    // setTransfer(e)
    // if(transfer == 980)
    //   {
    //     window.scrollTo(1680,980)
    //     console.log('do flash')
    //   } else if( transfer == 1680)
    //   {
    //     window.scrollTo(980,1680)
    //   }
  }
  return (
    
    <div className='ShockWatches'>
        <div className="wrapper-banner"></div>

        <div className="banner-sticky">
          {
              show && (
                      <MoveToCardFixed active={transfer} handleClick={handleClick} />
              )
          }                
        </div>
        <div className="wrapper-main">
                
                <div className="containerWatch">
                    

                    <div className="flash-sale-watch">
                        <img src="https://cdn.tgdd.vn/2022/08/campaign/Tagline-gia-soc-desk-1200x150.png" alt="" />
                        <ListProductFlashSale list_product_flash_sale={list_product_flash_sale}/>
                    </div>

                   <div className="wt-casio margin-banner">
                      <div className="banner">
                        <img src={wt_casio} alt="" />
                      </div>
                      <MenuTopWatches 
                              list_option={ list_option_menu_top }
                        />
                      <BlockSaleProduct list_product={list_item_sale_casio}/> 

                      <ListProductSmartWatch listProduct={list_product_watch_casio}
                                             quantityShow={quantityShow}
                                             />

                    { totalQuantity <= 0 ? ('') : (
                                    <button className='btnViewMore'
                                ><a to='javascript:;'
                                    className='link'
                                    onClick={handleShowViewMore}>Xem thêm {totalQuantity} sản phẩm</a></button>
                                )}

                   </div>

                   <div className="wt-citizen margin-banner">
                      <div className="banner">
                        <img src={wt_citizen} alt="" />
                      </div>
                      <MenuTopWatches 
                              list_option={ list_option_menu_top }
                        />
                      <BlockSaleProduct list_product={list_item_sale_casio}/> 

                      <ListProductSmartWatch listProduct={list_product_watch_casio}
                                             quantityShow={quantityShow}
                                             />

                    { totalQuantity <= 0 ? ('') : (
                                    <button className='btnViewMore'
                                ><a to='javascript:;'
                                    className='link'
                                    onClick={handleShowViewMore}>Xem thêm {totalQuantity} sản phẩm</a></button>
                                )}

                   </div>

                   <div className="wt-titan margin-banner">
                      <div className="banner">
                        <img src={wt_titan} alt="" />
                      </div>
                      <MenuTopWatches 
                              list_option={ list_option_menu_top }
                        />
                      <BlockSaleProduct list_product={list_item_sale_casio}/> 

                      <ListProductSmartWatch listProduct={list_product_watch_casio}
                                             quantityShow={quantityShow}
                                             />

                    { totalQuantity <= 0 ? ('') : (
                                    <button className='btnViewMore'
                                ><a to='javascript:;'
                                    className='link'
                                    onClick={handleShowViewMore}>Xem thêm {totalQuantity} sản phẩm</a></button>
                                )}

                   </div>

                   <div className="wt-sr-watch margin-banner">
                      <div className="banner">
                        <img src={wt_sr_watch} alt="" />
                      </div>
                      <MenuTopWatches 
                              list_option={ list_option_menu_top }
                        />
                      <BlockSaleProduct list_product={list_item_sale_casio}/> 

                      <ListProductSmartWatch listProduct={list_product_watch_casio}
                                             quantityShow={quantityShow}
                                             />

                    { totalQuantity <= 0 ? ('') : (
                                    <button className='btnViewMore'
                                ><a to='javascript:;'
                                    className='link'
                                    onClick={handleShowViewMore}>Xem thêm {totalQuantity} sản phẩm</a></button>
                                )}

                   </div>

                
                   
              
                </div>
            
            
        </div>
    </div>
  )
}

export default ShockWatches
