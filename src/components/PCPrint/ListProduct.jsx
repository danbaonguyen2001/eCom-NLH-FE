import React,{useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import StarRating from '../accessories/StarRating'
import "../../assets/fonts/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css"
import productHandler from "../../features/product/function";
const ListProduct = ({listProduct, quantityShow }) => {



  
  
  return (
    <div className='containerPC'>
    
     

      <div className="listProduct_PCPrint">

      {listProduct?.slice(0,quantityShow).map(list =>(
          
          <Link 
          to={{
            pathname: `/productdetail/${list?.name}`,
            state: { productId: list?.id },
          }} key={list?.id} className="Product_PCPrint">
          <img id='item' src={list?.image} alt={list?.name} />

          {/* {list.label && (
          <div className="label_birthday">
              <div className="flex">
                <img src="https://cdn.tgdd.vn/2022/07/content/50x50-50x50-8.png" alt="" />
                <span>SINH NHẬT GIẢM SỐC</span>
              </div>
            
          </div>)} */}
          
          <p className='name'>{list?.name}</p>
              <strike className='price_old'>
                {list?.marketPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
                <span className='discount'>   -{list?.promotion}%</span>
              
              </strike> 
              <br />
              <p className='price_new'>
                {list?.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency'>&#8363;</span>
              
                
              </p>
              <StarRating rating={list?.rate}/>

          
        </Link>
        
          ))}
          
          {/* { invisible && (
              <button className='btnViewMore'  onClick={handleShowViewMore}>Xem thêm</button>
          )} */}


        </div>

      
    </div>
  )
}

export default ListProduct


