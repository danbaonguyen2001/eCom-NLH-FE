import React from 'react'

const Provider = (props) => {
  const {provider} = props
  return (
    <ul className="sc__water row ">
                  {
                    provider.map((v,i)=>{
                      return (

                        <li key={i} className="col">
                          {v.name}
                        </li>

                       )
                    })
                  }
                </ul>
  )
}

export default Provider