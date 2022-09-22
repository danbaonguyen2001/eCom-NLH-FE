import React,{useState,useEffect} from 'react'


const SubDropDownBoxFilter = ({list_box_filter,name,id,btnRef,setShowSub,functions}) => {

    

  return (
    <div className='sub-drop-down'
        ref={btnRef}
    >
        {list_box_filter.map(item => {

            if((item.name === 'brand' || item.name==='brands') && item.id === id )
            {
                return (
                <div className={` sub-drop-down-box-filter ${name}`}>

                    <div className='list-content'
                  
                    >
                        {item.dropDown.map((drop,index) => (
                            <div className="item-content i-img" key={index}>
                                <img src={drop.img} alt=""
                                    onClick={()=> 
                                    
                                        setShowSub({
                                            manufacturerId: drop.manufactureId,
                                            categoryId: 10,
                                            subCategoryId: 42,
                                            page: 1,
                                            size: 100,
                                        })
                                    }
                                />
                            </div>
                        ))}
                    </div>
                    <div className="list-btn-active"
                    
                    >
                        <div className="pos-center">
                            <a href="javascript:;" className='btn-canncel btn-active'><span>Bỏ chọn</span></a>
                            <a href="javascript:;" className='btn-view-result btn-active'><span>Xem x kết quả</span></a>
                        </div>
                    </div>
                </div>
                
                )
            }
            else if(item.name === name && item.name !== 'brand')
            {
               return (    
                <div className={`sub-drop-down-box-filter`}> 
                    <div className="list-content"
                    
                    >
                        {item.dropDown.map((drop,index) => (
                            <div className="item-content " key={index}>
                                <span className='content'
                                        onClick={ () =>{
                                            if(isNaN(drop.maxPrice))
                                            {
                                                setShowSub({
                                                    manufacturerId: drop.manufactureId,
                                                    categoryId: 10,
                                                    subCategoryId: 42,
                                                    page: 1,
                                                    size: 100,
                                                });
                                            } 

                                            if(drop.maxPrice === drop.minPrice)
                                            {
                                                functions.renderPrice(drop.minPrice,drop.maxPrice)    
                                            } 
                                            else{
                                                functions.renderPrice(drop.minPrice,drop.maxPrice)    
                                            }

                                            if(drop.name === 'chargeDrop')
                                            {
                                                console.log('pin1: '+ drop.content)
                                                functions.renderBattery(drop.content)
                                            }

                                            if(drop.idDropDown === 4)
                                            {
                                                functions.renderPower(drop.content)
                                            }
                                        } 
                                        }
                                >{drop.content}</span>
                               
                            </div>
                        ))} 
                    </div>
                    <div className="list-btn-active"
                  
                    >
                        <div className="pos-center">
                            <a href="javascript:;" className='btn-canncel btn-active'><span>Bỏ chọn</span></a>
                            <a href="javascript:;" className='btn-view-result btn-active'><span>Xem x kết quả</span></a>
                        </div>
                    </div>
                </div>
                )
            }
                        
                    })
        }            
    </div>
  )

}
    

export default SubDropDownBoxFilter
