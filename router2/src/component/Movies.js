import React from 'react'
import data from '../data/data.json';
import Item from './Item';
const Movies = ({content}) => {
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

export default Movies