import React from 'react'

const Item = ({item}) => {
  return (
    <figure>
        <p><img src={item.photo}></img></p>
        <figcaption>
            <p>{item.name}</p>
        </figcaption>
    </figure>
  )
}

export default Item