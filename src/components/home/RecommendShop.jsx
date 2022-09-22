import React,{useEffect, useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "../../sass/home/reshop.scss"
// img
import Card1 from "../../assets/images/home/item-RS/Card1.png"
import Card2 from "../../assets/images/home/item-RS/Card2.png"
import Card3 from "../../assets/images/home/item-RS/Card3.png"
import Card4 from "../../assets/images/home/item-RS/Card4.png"
import { Link } from 'react-router-dom'
// mock data
import {listProduct} from "./mockData"
// List Product
const ListProduct = React.lazy(()=>import('./subComponent/ListProduct'))
// Button
const ListAllButton = React.lazy(()=>import("./subComponent/ListAllButton"))

const RecommendShop = () => {
    const [data,setData]= useState([])
    useEffect(()=>{
        setData(listProduct)
    },[data])
  return (
    <div className='rsWrap grid wide'>
        <div className="rs__title row">
            <h1>
            gợi ích hôm nay
            </h1>
        </div>
        <div className="rs__content row">
            <div className="rs__card col l-3 c-12 m-6 ">
            <Link to="/">
                <LazyLoadImage src={Card1}/>
            </Link>
            </div>
            <div className="rs__card col l-3 c-12 m-6 ">
            <Link to="/">
                <LazyLoadImage src={Card2}/>
            </Link>
            </div>
            <div className="rs__card col l-3 c-12 m-6 ">
            <Link to="/">
                <LazyLoadImage src={Card3}/>
            </Link>
            </div>
            <div className="rs__card col l-3 c-12 m-6 ">
            <Link to="/">
                <LazyLoadImage src={Card4}/>
            </Link>
            </div>

        </div>
        {/* Product List */}
        <ListProduct data={data}/>
        {/* Button */}
        <div className="rs__bt row">
            <ListAllButton />
        </div>
    </div>
  )
}

export default RecommendShop