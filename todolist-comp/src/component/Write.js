
/////// 내가 한 방법 //////////
import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Write = (props) => {
/*   const add = (e) => {
    e.preventDefault();
    if (props.update.current) {   
      props.data.map((el, key) => {   
        if (el.update) {
          el.todo = props.elInput.current.value;
          el.update = false;
          props.update.current = false;
          props.setData([...props.data])
        }
      })
    }
    else {
      let value = { num: ++props.count.current, todo: props.elInput.current.value, check: "no", update: false }
      props.setData([...props.data, value])
    }
  } */

  return (
    <div className='write'>
      <form onSubmit={props.add} >
        <input ref={props.elInput} type="text" name="w" placeholder='할 일을 입력하세요!' />
        <input type="submit" value="저장" />
      </form>
    </div>

  )

}
export default Write


/////// 다른방법 //////////
/* import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useHref } from 'react-router-dom';

const Write = (props) => {

  return (
    <div className='write'>
      <form onSubmit={props.add} >
        <input ref={props.elInput} type="text" name="w" placeholder='할 일을 입력하세요!' />

        <input type="submit" value="저장" />
      </form>
    </div>

  )
}

export default Write */

