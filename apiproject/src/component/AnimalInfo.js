import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimalContext } from '../Context';

const AnimalInfo = () => {
    const { id } = useParams();
    const { animal } = useContext(AnimalContext);
    const [info,setInfo] = useState();
    var IMG = [];
    var value;
    /*  if(animal.Animal.ANIMAL_NO == id){
         console.log( animal.Animal.NM);
     } */

     //console.log(a.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"").replace("함초롬바탕"));  //한글만 뽑아냄
     animal&&animal.map((obj,key)=>{
         if(obj.Animal.ANIMAL_NO == id){
            console.log(obj.img.PHOTO_URL);
            IMG.push({PHOTO_URL: obj.img.PHOTO_URL ,PHOTO_KND : obj.img.PHOTO_KND , PHOTO_NO : obj.img.PHOTO_NO });
            value={NM :obj.Animal.NM , ENTRNC_DATE : obj.Animal.ENTRNC_DATE , SPCS : obj.Animal.SPCS , 
                 BREEDS:obj.Animal.BREEDS , SEXDSTN:obj.Animal.SEXDSTN, AGE:obj.Animal.AGE, BDWGH:obj.Animal.BDWGH, 
                 ADP_STTUS:obj.Animal.ADP_STTUS, TMPR_PRTC_STTUS:obj.Animal.TMPR_PRTC_STTUS, 
                 INTRCN_MVP_URL:obj.Animal.INTRCN_MVP_URL, 
                 INTRCN_CN: obj.Animal.INTRCN_CN.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"").replace("함초롬바탕") , 
                 TMPR_PRTC_CN: obj.Animal.TMPR_PRTC_CN, IMG : [...IMG]
          }  
         }
     })
    useEffect(()=>{
        setInfo(value)
},[])
    
    return (
        info &&
        <section className='info-container'>
            <p>분양동물 상세정보</p>
            <div className='info-content'>
                <p>{info.NM}</p>
                <p>{info.AGE}</p>
            </div>
        </section>
    )
}

export default AnimalInfo