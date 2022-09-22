
import React,{useState} from 'react'
import "../../assets/fonts/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css"
// import { categories } from './data'
const LinkProduct = () => {

//  const [cate,setCate] = useState('')


  return (
    <div className="containerPC">
      <div className="linkPro">

        {/* {categories.map( cat => (
            <div className="link" key={cat.id}>
                <span id= "blue">{cat.category}</span>
                <i class="fa-solid fa-chevron-right"></i>
                {cat.name === 'printer' ? (
                  <a href="">{cat.name}</a>
                ):('')}
                <b>{cat.total}</b>
                <span>{cat.content}</span>
            </div>
        ))} */}
       
      </div>
    </div>
  )
}

export default LinkProduct
