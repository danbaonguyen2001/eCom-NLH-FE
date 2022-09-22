import React from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Company = ({companies}) => {
  return (
        <div className="sc__content row">
        
          {companies.map((com, index) => {
            return (
              <Link
                to={com.link}
                key={index}
                className="sc__company col  "
              >
                <LazyLoadImage src={com.path} />
              </Link>
            );
          })}
        </div>
      
  )
}

export default Company