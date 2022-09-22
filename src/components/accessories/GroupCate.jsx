import React,{useState} from "react";

import "../../sass/accessories/accessories.scss"
import { groupCate } from "./data";
import DropdownAccessories from "./DropdownAccessories";

function GroupCate()
{
    const [activeDropdown,setActiveDropdown] = useState('')
    const [visible,setVisible] = useState(false)



    return(
        <div className="menuTop">
            <div className="groupcate">
                    {groupCate.map(cate =>(
                        <div 
                            key={cate.id}
                            onMouseEnter={() => {
                                setActiveDropdown(cate.id);
                                setVisible(true);
                            }}
                            onMouseLeave={() => setVisible(false)}
                        >
                        <div  className='item-cate'>
                            <img src={cate.url} alt={cate.title} /> 
                            <p className="content">{cate.title}</p>
                        </div>
                        {visible && (activeDropdown === cate.id) ? (
                            <DropdownAccessories nameCate={cate.name} />
                        ) : ('')}
                        </div>
                    ))}
                    
            </div>
        
        </div>
    )
}

export default GroupCate