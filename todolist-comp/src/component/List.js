
/////// 내가 한 방법 //////////
import React from 'react'
import Item from './Item'
const List = (props) => {
  
  return (

    <ul className='list'>

      {
        props.data && props.data.map((obj, key) => {
          return <Item elInput={props.elInput} data={props.data} obj={obj} key={obj.num} num={key} setData={props.setData} setTodo={props.setTodo} elItems={props.elItems} update={props.update} ></Item >
        })
      }
    </ul>
  )
}

export default List

/////// 다른방법 //////////

/* import React from 'react'
import Item from './Item'
const List = (props) => {

  return (

    <ul className='list'>

      {
        props.data && props.data.map((obj, key) => {
          return <Item data={props.data} obj={obj} key={obj.num} num={key} setData={props.setData} setTodo={props.setTodo} elItems={props.elItems} ></Item >
        })
      }
    </ul>
  )
}

export default List */