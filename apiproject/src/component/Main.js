import React, { useContext, useEffect, useState } from 'react'
import { AnimalContext } from '../Context'

const Main = () => {

    const { animal } = useContext(AnimalContext);

    /* animal && animal.map((obj,key)=>(
        
    )) */

    return (
        <>
            <div className='main-container'>
                <figure className="main-view-img"><img src='../img/logo.svg' alt='분양관련 이미지....'></img></figure>

                <section className='todoList-box'>
                    <article className=''></article>
                    <article className=''></article>
                    <article className=''></article>
                </section>
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
            </div>
        </>

    )
}

export default Main