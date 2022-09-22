import React from 'react'

const ListPriceCard = ({list_card_price}) => {
  return (
    <div className='list-card-price '>
      {list_card_price.map(card =>(
        <div className="card-price border-card">
            <input type="radio" />
            <span>{card}</span>
        </div>
      ))}
    </div>
  )
}

export default ListPriceCard
