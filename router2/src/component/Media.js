import React from 'react'

const Media = ({content,subject}) => {
    
    return (

        <article className='list'>
            <h2>{subject}</h2>
            <div>
                {
                    content.map((res, idx) => {
                        return <figure>
                            <p><img src={res.photo}></img></p>
                            <figcaption>
                                <p>{res.name}</p>
                            </figcaption>
                        </figure>
                    })



                }
            </div>
        </article>
    )
}

export default Media