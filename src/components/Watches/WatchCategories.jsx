import React from 'react'

const WatchCategories = ({catname}) => {
  return (
    <ul className='flex'>
        {catname.map( li => (
            <li>{li.catname}</li>
        ))}
    </ul>
    
  )
}

export default WatchCategories
