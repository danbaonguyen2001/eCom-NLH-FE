import React from 'react'
import { company } from './data'


const Firm = ({company}) => {
  return (
    <div className="containerPC">
        <div className="listFirm">
            {company.map(index => (
                <div className="Firm" key={index.id}>
                    <a href="">
                        <img src={index.url} alt="firm" />
                    </a>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Firm


