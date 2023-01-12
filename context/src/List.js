import React,{useContext} from 'react'
import { Mycontext } from './Context';

const List = () => {
    const [a,...b] = useContext(Mycontext);
    console.log(a)
  return (
    <div>List{value[4]}</div>
  )
}

export default List