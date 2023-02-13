import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimalContext } from '../Context';

const AnimalInfo = () => {
    const { id } = useParams();
    const { animal } = useContext(AnimalContext);
    const [info, setInfo] = useState();
    const [imgInfo, setImgInfo] = useState([]);
    var [imgN, setN] = useState(0);
    var IMG = [];

    var value;
    var test;

    //.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"").replace("함초롬바탕") 
    //console.log(a.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"").replace("함초롬바탕"));  //한글만 뽑아냄
    animal && animal.map((obj, key) => {
        if (obj.Animal.ANIMAL_NO == id) {
            if (obj.img.PHOTO_KND == 'IMG') {
                IMG.push({ PHOTO_URL: obj.img.PHOTO_URL, PHOTO_KND: obj.img.PHOTO_KND, PHOTO_NO: obj.img.PHOTO_NO });
            }
            value = obj.Animal/*{
                 NM: obj.Animal.NM, ENTRNC_DATE: obj.Animal.ENTRNC_DATE, SPCS: obj.Animal.SPCS,
                BREEDS: obj.Animal.BREEDS, SEXDSTN: obj.Animal.SEXDSTN, AGE: obj.Animal.AGE, BDWGH: obj.Animal.BDWGH,
                ADP_STTUS: obj.Animal.ADP_STTUS, TMPR_PRTC_STTUS: obj.Animal.TMPR_PRTC_STTUS,
                INTRCN_MVP_URL: obj.Animal.INTRCN_MVP_URL,
                INTRCN_CN: obj.Animal.INTRCN_CN,
                TMPR_PRTC_CN: obj.Animal.TMPR_PRTC_CN 
                
            }*/
            test = obj.Animal.INTRCN_CN;
            //xmlP(test)
        }
    })
    useEffect(() => {
        setInfo(value)
        setImgInfo(IMG)
    }, [])
    // xmlP();

    console.log(info)
    function xmlP() {
        var txt =
            "<p><name>bbbaaa</name><age>26</age></p><p><name>aa</name><age>27</age></p> "
        /* '<p>' + '<name>dd</name>' + '<age>28</age>' + '</p>';  */


        var parser = new window.DOMParser();

        var xmlDoc = parser.parseFromString(txt, "text/xml");

        // 특정 테그를 기준으로 변수에 담는다
        var xml = xmlDoc.getElementsByTagName('p');
        console.log(xmlDoc)
        for (let t of xml) {

            for (let tt of t.children) {

                //console.log(tt.Content) 
            }
        }


        //     var parser=new DOMParser();
        //     var ps = [];
        //     var xmlDoc=parser.parseFromString(t,'text/xml');
        //     var xml = xmlDoc.getElementsByTagName('span');
        //     console.log(t)
        //     var tt = xml[0].getElementsByTagName('span')[0].textContent
        //     console.log(xml)
        //    console.log( typeof(xml[0].getElementsByTagName('span')[0].textContent) )
        //     for(var p_node in xml){
        //     console.log(p_node)
        //         for(var span_node in p_node.getElementsByTagName('span')){
        //             console.log(span_node.Content)
        //         }
        //    } 
    }

    const changImg = (number) => {
        setN(number)
    }


    return (
        info &&
        <section className='info-container'>
            <p>분양동물 상세정보</p>
            <div className='info-content'>
                <div className='img-box'>
                    <img src={imgInfo[imgN].PHOTO_URL} alt='입양동물 사진'></img>

                </div>
                <div className='text-box'>
                    <ul>
                        <li><p>이름 : {info.NM}</p></li>
                        <li><p>품종 : {info.BREEDS}</p></li>
                        <li><p>성별 : {info.SEXDSTN}</p></li>
                        <li><p>나이 : {info.AGE}</p></li>
                        <li><p>체중 : {info.BDWGH}Kg</p></li>
                        <li><p>입소날짜 : {info.ENTRNC_DATE}</p></li>
                        <li><p>센터 : {info.CENTER}</p></li>
                        <li><p>임시보호 가능 여부 : {info.IMBO}</p></li>
                        <li><div className='img-list'>
                        {
                            imgInfo && imgInfo.map((obj, key) => {

                                return <p className='' key={obj.PHOTO_NO} onClick={() => changImg(key)}><img src={obj.PHOTO_URL}></img></p>
                                
                            })
                        }
                    </div></li>
                    </ul>
                    
                    
                    
                    
                    
                    
                    
                    
                    

                </div>

            </div>
            <div className='youtube-content'>
                        <p>매력발산</p>
                <div className='youtube-video-box'>
                    {
                        info.INTRCN_MVP_URL != '' ? <iframe
                            src={`https://www.youtube.com/embed/${info.INTRCN_MVP_URL}?mute=1`}
                            title="YouTube video player" frameborder="0"
                            allow="" >
                        </iframe> : <p>영상이 없습니다.</p>


                    }

                </div>

            </div>
        </section >
    )
}

export default AnimalInfo