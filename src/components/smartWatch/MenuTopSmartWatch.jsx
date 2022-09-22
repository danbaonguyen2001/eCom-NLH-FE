import React from 'react'
import { Link } from "react-router-dom";
import { listMenuBrand } from './dataSmartWatch';
import { listMenuCate } from './dataSmartWatch';

const MenuTopSmartWatch = () => {
  return (
    <div className='menu-top-smartWatch'>
    
      <div className="list-top-smartWatch">

      <div className="menu-brand">
        <ul>
            {listMenuBrand.map(brand => (
                <li key={brand.id}><a href=""><img src={brand.url} alt="" /></a></li>
                ))}
        </ul>
      </div>

        <div className="menu-cate">
            <ul>
                {listMenuCate.map(cate => (
                    <li key={cate.id}>
                        <Link to='' className='cate-link'>
                            <div className={`box-icon i-${cate.name}`}>
                                <i className={`icon-${cate.name} icon`} ></i>
                            </div>
                            <p className='title'>{cate.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        </div>

    </div>
  )
}

export default MenuTopSmartWatch 
