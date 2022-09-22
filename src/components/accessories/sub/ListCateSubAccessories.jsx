import React from 'react'

const ListCateSubAccessories = ({categories}) => {
  return (
    <div className="listCate">
            <div className="wrapper-group-cate">
                {categories.map((cate,index) => (
                    <div className="wrapper"  key={index}>
                        <a href="">
                            <img src={cate.url} alt={cate.title} className={cate.name} />
                            <p className="content">{cate.title}</p>
                        </a>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default ListCateSubAccessories
