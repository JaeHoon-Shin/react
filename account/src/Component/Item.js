import React from 'react'

const Item = ({ obj }) => {
    return (
        <li>
            <p>{obj.day}</p>
            <span> {obj.message}</span>
            <p> {obj.money.toLocaleString()}원</p>
        </li>
    )
}

export default Item