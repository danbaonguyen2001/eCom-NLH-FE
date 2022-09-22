import React from 'react'

const Form = (props) => {
    const {action,inputs,submit} = props
  return (
    <form
                  method="POST"
                  action ={action}
                  className="sc__form row"
                >
                    {
                        inputs.map((v,i)=>{
                            return <input
                            key={i}
                            type='text'
                            className='sc__input col c-11 m-5 l-5'
                            placeholder={v}
                            />
                        })
                    }
                  {/* <input
                    type="text"
                    placeholder="Nhập mã danh bạ"
                    className="sc__input col c-11 m-5 l-5"
                  />
                  <input
                    type="text"
                    placeholder="Số điện thoại liên hệ"
                    className="sc__input col c-11 m-5 l-5"
                  /> */}
                  <button type="submit" className="sc__button col c-12 m-8 l-8">
                    {submit}
                  </button>
                </form>
  )
}

export default Form