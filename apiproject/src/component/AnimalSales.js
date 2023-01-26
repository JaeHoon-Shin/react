import React, { useContext, useEffect, useState } from 'react'
import { AnimalContext } from '../Context'

const AnimalSales = () => {

    const { animalImg, animal, setTotalAni, totalAni } = useContext(AnimalContext);


    console.log(totalAni)


    return (
        <>
            {
                totalAni && totalAni.map((obj, key) => {
                    if (obj.img.PHOTO_KND == 'THUMB') {
                        return <p><img key={key} src={obj.img.PHOTO_URL}></img>{obj.animal.NM}</p>
                    }

                })
            }</>
    )
}

export default AnimalSales