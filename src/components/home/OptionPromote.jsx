import React, { useEffect, useState } from "react";
import "../../assets/css/home/optionPromote.css";
import { Link } from "react-router-dom";
const arrCode= [
  {
    id:1,
    code:Math.random().toString(36).slice(2, 7),
    show:false,
  },
  {
    id:2,
      code:Math.random().toString(36).slice(2, 7),
      show:false,
  },
  {
    id:3,
    code:Math.random().toString(36).slice(2, 7),
    show:false,
  },
  {
    id:4,
    code:Math.random().toString(36).slice(2, 7),
    show:false,
  },
        
        
]
const OptionPromote = () => {
  const [data,setData] = useState(arrCode)
    useEffect(()=>{
    setData(arrCode)
    },[data])
    const openCodeHandler = (v)=>{
      let newData = data.map((cur)=>{
        if(cur.id === v.id){
          cur.show = true;
        }
        return cur
      })
      console.log(newData)
      setData(newData)
    }
  return (
    <div className="opWrapper grid wide">
      <div className="op__title">
        <h1>Nhấn ngay, nhận quà liền tay</h1>
      </div>
      <ul className="op__list row">
        {
          arrCode.map((v)=>{
            return(
              // Item 1 
            <li key={v.id} className={`op__item op__item${v.id} col l-3 m-6 c-12`}>
                  <Link to="/">
                    <div onClick={()=>openCodeHandler(v)} className={`op__bt op__bt${v.id} ${v.show ?"op__show" :""}`}>Nhận mã</div>
                    <div className={`op__bt op__bt${v.id} op__bt--code ${v.show ?"op__code--show" :""}`}>{v.code}</div>
                </Link>
            </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default OptionPromote;
