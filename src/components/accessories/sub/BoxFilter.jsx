import React from 'react'



const BoxFilter = ({totalQuantity,childCate,functions}) => {
  return (
    <div className='box-filter'>

      <div className="box-sort">


                <p className='title-quantity'>{totalQuantity} {childCate}</p>
                   
        
                <div className="flash">
                    <a href="">
                        <input type="checkbox" />
                        <img src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/icon-thunder.png" alt="flash" />
                        <p><b>GIAO NHANH</b></p>

                    </a>
                </div>

                <div className="discount-accessories">
                    <input type="checkbox" />
                    <p>Giảm giá</p>
                </div>
      </div>


                <div className="select">
                <span>Xếp theo: </span>
                <select name="" id="arrange" onChange={functions.renderBoxFilter}>
                    <option value="">Bán chạy</option>
                    <option value="percent_increase">% Giảm</option>
                    <option value="decrease">Giá cao đến thấp</option>
                    <option value="increase">Giá thấp đến cao</option>
                </select>
                

                
            </div>

    </div>

  )
}

export default BoxFilter
