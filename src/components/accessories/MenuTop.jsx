import React,{useState} from 'react'

const MenuTop = ({menuTop,setShowSub}) => {
    const [highlight,setHighlight] = useState(menuTop[0].title)

  return (
    
    <ul className='menuTop'>
    {menuTop.map((item,index) => (
        <li key={index} className='item-menu'>
            <a  href='javascript:;'
            onClick={() => 
            {
              setHighlight(item.title);
              setShowSub({
                manufacturerId: item.manufactureId,
                categoryId: item.cateId,
                subCategoryId: item.subCateId,
                page: 1,
                size: 100,
              })
            
            }
            }
            style={highlight === item.title ? {
                backgroundColor:'#FFD400',
                fontWeight: 'bold'
            } : {}}
            >{item.title}</a>
        </li>
        ))}
    </ul>
  )
}

export default MenuTop
