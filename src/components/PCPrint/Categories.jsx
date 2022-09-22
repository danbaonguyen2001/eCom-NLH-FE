import React, {useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import '../../sass/PCPrint/PCPrint.scss'
import productHandler from "../../features/product/function";


const cate = [
    {
        id: 1,
        title: 'Máy in',
        url: 'https://cdn.tgdd.vn/Category/5693/Mayin2x-80x80-9.png',
        path: '/Printer'
    },
    {
        id: 2,
        title: 'Mực in',
        url: 'https://cdn.tgdd.vn/Category/1262/Mucin2x-80x80.png',
        path: '/Ink'
    },
    {
        id: 3,
        title: 'Màn hình máy tính',
        url: 'https://cdn.tgdd.vn/Category/5697/manhinh-80x80.png',
        path: '/Screen'
    },
    {
        id: 4,
        title: 'Máy tính để bàn',
        url: 'https://cdn.tgdd.vn/Category/5698/maytinhbo-80x80.png',
        path: '/PC'
    }
]

const Categories = () => {

    const [style, setStyle] = useState(0);
  
    const changeStyle = () => {
      console.log("you just clicked");
    
      setStyle("set-click-cate");
    };
   

    return (
        <div className="containerPC">
            <div className="listProduct">
                
                    {cate.map(index => (
                        <div className= 'product' key={index.id} >
                            <Link to={index.path}>

                                <a >
                                    <img src={index.url} alt="category"/>
                                    <p className="nameProduct">{index.title}</p>
                                </a>
                            </Link>
                        
                        </div>
                    ))}
            
            
        </div>
        </div>
    )
}

export default Categories

