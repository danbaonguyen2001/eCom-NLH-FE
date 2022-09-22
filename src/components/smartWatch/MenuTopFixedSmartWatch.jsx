import React,{useState,useEffect} from 'react'

import { listMenuCate } from './dataSmartWatch'
import { Link } from 'react-router-dom'

const MenuTopFixedSmartWatch = () => {

    const [highlight,setHighlight] = useState('')
    const [show,setShow] = useState(false)

    useEffect(()=>{

        const handleScroll = () =>{
            

            if(window.scrollY >= 400)
            {
                setShow(true)
            }else{
                setShow(false)
            }

            if(window.scrollY < 500)
            {
                setHighlight('')
            }
            else if(window.scrollY < 1300 && window.scrollY >= 500)
            {
                setHighlight(listMenuCate[0].title)
            }else if(window.scrollY <= 2500 && window.scrollY >= 1300)
            {
                setHighlight(listMenuCate[1].title)
            } else if(window.scrollY > 2500 && window.scrollY < 3800)
            {
                setHighlight(listMenuCate[2].title)
            }
             else if(window.scrollY >= 3800 && window.scrollY < 5100)
            {
                setHighlight(listMenuCate[3].title)
            }
             else if(window.scrollY >= 5100 && window.scrollY < 6230)
            {
                setHighlight(listMenuCate[4].title)
            }
             else if(window.scrollY >= 6230)
            {
                setHighlight(listMenuCate[5].title)
            }

        }


        window.addEventListener('scroll',handleScroll)

        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }

    },[])


  return (
    <div>
    {show && 
        <div className='menu-top-fixed-smart-watch'>
        <div className="menu-cate">
            <ul>
                {listMenuCate.map(cate => (
                    <li key={cate.id}>
                        <Link to='' className='cate-link'>
                            <div className={`box-icon i-${cate.name}`}
                            style={ highlight === cate.title ? {
                                backgroundColor:'#f2c94c', 
                            } : {}}>
                                <i className={`icon-${cate.name} icon`} 
                                 ></i>
                            </div>
                            <p className='title'
                                style={ highlight === cate.title ? {
                                    color:'#f2c94c',
                                    fontWeight: 'bold', 
                                } : {}}
                            >{cate.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>}
    </div>
  )
}


export default MenuTopFixedSmartWatch
