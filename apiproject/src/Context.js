import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const AnimalContext = createContext(null);


const Context = ({ children }) => {

  /*   const [pharmacy, setPharmacy] = useState(null);
    const [hospital, setHospital1] = useState(null); */
    const [animal, setAnimal] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  //console.log(a.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"").replace("함초롬바탕"));  //한글만 뽑아냄



    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error를 초기화하고
            setError(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            // 동물 약국 데이터
            // const pharmacy1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/1/1000/');
            // const pharmacy2 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/1001/2000/');
            // const pharmacy3 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/2001/3000/');
            // const pharmacy4 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/3001/4000/');
            // setPharmacy(pharmacy1.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상').concat(pharmacy2.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상'), pharmacy3.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상'), pharmacy4.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상')));

            //동물 병원 데이터
            // const hospital1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020301/1/1000/')
            // const hospital2 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020301/1001/2000/')
            // const hospital3 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020301/2001/3000/')
            // setHospital1(hospital1.data.LOCALDATA_020301.row.filter((obj) => obj.DTLSTATENM == '정상').concat(hospital2.data.LOCALDATA_020301.row.filter((obj) => obj.DTLSTATENM == '정상'), hospital3.data.LOCALDATA_020301.row.filter((obj) => obj.DTLSTATENM == '정상')))

            //입양 대기 동물 데이터 , 입양 대기 동물 이미지 데이터
            const animal1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/TbAdpWaitAnimalView/1/100/')
            const animalImg1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/TbAdpWaitAnimalPhotoView/1/1000/')


            var value = [];
            var anName;
            var center;
            var imbo =false;
            animal1 && animal1.data.TbAdpWaitAnimalView.row.map((an, akey) => {
                anName = an.NM.slice(0,an.NM.indexOf('('));
                center = an.NM.slice(an.NM.indexOf('(')+1,an.NM.indexOf(')'));
                center = center.split('-');
                center[1] != null ? imbo = "가능" : imbo = "불가능"
                an.SEXDSTN == "M" ? an.SEXDSTN = '남아' : an.SEXDSTN = '여아';
                center = center[0];
                an.NM = anName;
                an.CENTER = center;
                an.IMBO = imbo;
                an.INTRCN_MVP_URL = an.INTRCN_MVP_URL.slice(an.INTRCN_MVP_URL.lastIndexOf('/')+1)
                animalImg1 && animalImg1.data.TbAdpWaitAnimalPhotoView.row.map((obj, key) => {
                    if (obj.ANIMAL_NO == an.ANIMAL_NO){
                        value.push({ Animal: an, img: { PHOTO_KND: obj.PHOTO_KND, PHOTO_URL: `https://${obj.PHOTO_URL}` , PHOTO_NO : obj.PHOTO_NO }})
                    }
                    setAnimal(...animal,value)
             })
            })

        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchUsers();
    }, []);


    

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
/*     if (!pharmacy) return null;
    if (!hospital) return null; */




    return (
        <AnimalContext.Provider value={{ animal }}>
            {children}
        </AnimalContext.Provider>
    )
}

export default Context
