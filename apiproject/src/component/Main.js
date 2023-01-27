import React, { useContext, useEffect, useState } from 'react'
import { AnimalContext } from '../Context'

const Main = () => {

    const { animal } = useContext(AnimalContext);

    /* animal && animal.map((obj,key)=>(
        
    )) */
    
    return (
        <>
            {

                /* animal && animal.map((obj, key) => {
                    if (obj.img.PHOTO_KND == 'IMG') {
                        if(obj.img.PHOTO_NO == 1){
                            if(obj.Animal.NM == '탐앤')
                        return <img key={key} src={obj.img.PHOTO_URL} width = "1720px"></img>
                    }
                    }
                }) */




            }
        </>

    )
}

export default Main