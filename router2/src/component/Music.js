import React from 'react'
import Item from './Item';

const Music = ({content}) => {
  return (
    <article className='list'>
    <h2></h2>
    <div>
        {
            content.map((res, idx) => {
                return <Item key={idx} item={res} />

            })

        }
    </div>
</article>
  )
}

export default Music