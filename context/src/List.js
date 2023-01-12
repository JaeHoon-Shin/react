import React, { useContext } from 'react'
import { Mycontext } from './Context';
import Item from './Item';

const List = () => {
    const { data } = useContext(Mycontext);
    
    return (
        <div>
            {data.map((obj, key) => (
                <Item key={key} obj={obj}></Item>
                )
            )
            }</div>
    )
}

export default List