import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'

const Item = ({item,fn}) => {
  let detail = ()=>{
     fn(   item   ) 
  }
  return (
     <figure onClick={()=>{fn(item)}}> 
      <p><img src={item.photo} /></p>
      <figcaption>
        <p>{item.title}</p>
        <code>${item.price}</code>
      </figcaption>
    </figure>
  )
}

export default Item
