import React, { useContext } from 'react'
import { Mycontext } from '../Context'
import Item from './Item'

const List = () => {
    const { data, elList } = useContext(Mycontext);
    return (
        <div className='list' ref={elList}>
            <p>참여인원: {data.length}명</p>
            <div>
            <ul>
                {
                    data && data.map((obj, key) => {
                        return <p>{key+1}. <Item key={key} obj={obj}></Item></p>
                    })
                }
            </ul>
            </div>
        </div>
    )
}

export default List