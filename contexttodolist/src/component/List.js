import React, { useContext } from 'react'
import { Mycontext } from '../Context'
import Item from './Item';

const List = () => {
    const { data,todoNum } = useContext(Mycontext);
    
    return (
        <div><p>할 일 {todoNum}개</p>
            {data && data.map((obj,key) => {
              return  <Item key={key} obj={obj} number={key}></Item>
            })
            }
        </div>
    )
}

export default List