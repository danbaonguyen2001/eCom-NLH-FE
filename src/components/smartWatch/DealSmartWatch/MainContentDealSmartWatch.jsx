import React,{useState,useEffect} from 'react'
import BannerDealSmartWatch from './BannerDealSmartWatch'
import ContentDealSmartWatch from './ContentDealSmartWatch'
import MoveToCardFixed from './MoveToCardFixed'


const MainContentDealSmartWatch = () => {

  const [show,setShow] = useState(false)
  const [transfer,setTransfer] = useState(980)

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
  
  console.log(transfer)

  return (
    <div className="main-content-deal-smart-watch">
      {
        show && (
          <MoveToCardFixed active={transfer} handleClick={handleClick} />
        )
      }
        <BannerDealSmartWatch />
        <ContentDealSmartWatch />
    </div>
  )
}


export default MainContentDealSmartWatch
