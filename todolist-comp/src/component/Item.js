
/////// 내가 한 방법 //////////
import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Item = (props) => {
  const remove = (n) => {
    let removeData = props.data.filter((props) => props.num !== n);
    props.setData(removeData);
  }

  const state = (e) => {
    if (window.event.target.tagName != "BUTTON") {
      if (props.data[e].check != 'no') {
        props.data[e].check = 'no';
      }
      else {
        props.data[e].check = 'yes';
      }
      update();
    }
  };
  const update = () => {
    let count = props.data.filter((item) => item && item.check != 'yes').length;
    props.setTodo(count)

  }
  const itemUpdate = (n) => {
    props.data.map((obj, key) => {
      if (obj.num == n) {
        props.elInput.current.value = obj.todo
        obj.update = true;
        props.update.current = true;
        
      }
    })
  }
  useEffect(update, [props]);

  return (
    <li className={props.obj.check} ref={(el) => props.elItems.current[props.obj.num] = el} onClick={() => state(props.num)}>{props.obj.todo}
      <button onClick={() => itemUpdate(props.obj.num)}>수정</button>
      <button onClick={() => remove(props.obj.num)}>삭제</button>
    </li>
  )
}

export default Item


/////// 다른방법 //////////
/* import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Item = (props) => {

  return (
    <li className={props.obj.check} ref={(el) => props.elItems.current[props.obj.num] = el} onClick={() => state(props.num)}>{props.obj.todo}
      <button onClick={() => remove(props.obj.num)}>삭제</button>
    </li>
  )
}

export default Item */