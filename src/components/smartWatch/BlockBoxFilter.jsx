import React,{useState,useEffect,useRef} from 'react'
import SubDropDownBoxFilter from './SubComponent/SubDropDownBoxFilter'
import {Link} from 'react-scroll'

const BlockBoxFilter = ({list_box_filter,setShowSub,functions}) => {

    const [visible,setVisible] = useState(false)
    const [activeDropDown,setActiveDropDown] = useState('')
    const [id,setId] = useState('')

    const btnRef = useRef()


    useEffect(() =>{

        const handleMouseDown = e =>{

            console.log(e.target)
            if(!btnRef.current.contains(e.target))
            {
                setVisible(false)
            }
        }

        document.addEventListener('mousedown',handleMouseDown)

        return () =>{
            document.removeEventListener('mousedown',handleMouseDown)
        }

    },[])

  return (
    <section>
      
        <div className="block-box-filter">
            <div className="filter-total m-t">
                <div className="filter-item">
                    <i class="fa-solid fa-filter"></i>
                    <span>Bộ lọc</span>
                </div>
            </div>

            {list_box_filter.map((filter,index) => (
                <div>
                    <div className={`m-t ${filter.name}`} key={index}
                     onClick={(e) => 
                        {
                            setActiveDropDown(filter.id)
                            setVisible(true)
                            setId(filter.id)
                           
                        }
                    }
                    
                    >
                        <div className="filter-item " >
                            <span className={`drop-down ${filter.name}`}> 
                                {filter.title}
                            </span>
                            
                        </div>
                        {visible && (activeDropDown === filter.id) ? (
                                <SubDropDownBoxFilter list_box_filter={list_box_filter}
                                    name={filter.name}
                                    id={id}
                                    btnRef={btnRef}
                                    setShowSub={setShowSub}
                                    functions={functions}
                                    
                        />
                        ) : ('')}
                    </div>
                    
                    

                </div>
            ))}
           


        </div>

    </section>
  )
}

export default BlockBoxFilter
