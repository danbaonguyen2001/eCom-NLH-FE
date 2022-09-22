import React from 'react'


const BoxFilterSmartWatch = ({box_filter}) => {
  return (

    <div className="box-filter-smart-watch">

        {
            box_filter.map((filter,idx)=> (
                <label htmlFor="" key={idx}> 
                    <input type="radio" />
                    {filter.title}
                </label>
            ))
        }
              
                
    </div>
  )
}

export default BoxFilterSmartWatch
