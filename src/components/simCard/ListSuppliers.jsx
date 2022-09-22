import React from 'react'

const ListSuppliers = ({suppliers}) => {
  return (
    <div className="list-suppliers ">
        {suppliers.map(idx => (
            <div className="suppliers  border-card">
                <input type="radio" name="" id={idx.id} />
                <img src={idx.url} alt="" />
            </div>
        ))}
      </div>
  )
}

export default ListSuppliers
