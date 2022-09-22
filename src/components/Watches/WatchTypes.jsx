import React from 'react'
import { Link } from 'react-router-dom'
import ListWatchProduct from './ListWatchProduct'
import WatchCategories from './WatchCategories'


const WatchTypes = ({listType,idType,listProduct}) => {
  return (
    <div className="containerWatch">
        <div className= "WatchType" >
          {listType.map( type => type.id === idType ? (
            <div className="banner" >
                <img src={type.url} alt="" />

            </div>

          ) : (''))}

            <div className="list-watch">
                {listType.map(idx => idx.id === idType ?   (
                    <Link to={idx.pathname}> 
                      <div className="tabs-type" key={idx.id}>
                        <p>Xem tất cả {idx.title}  
                            <span><i class="fas fa-caret-right"></i></span>
                        </p>
        
                    
                    </div>
                    </Link>
                ) : (''))}

                <ListWatchProduct listProduct= {listProduct}/>
            
            </div>
        </div>
    </div>
  )
}

export default WatchTypes
