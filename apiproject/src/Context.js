import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const AnimalContext = createContext(null);


const Context = ({ children }) => {

    const [pharmacy, setPharmacy] = useState(null);
    const [hospital, setHospital1] = useState(null);
    const [animal, setAnimal] = useState(null);
    const [animalImg, setAnimalImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalAni, setTotalAni] = useState([]);

    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error를 초기화하고
            setError(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            // 동물 약국 데이터
            const pharmacy1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/1/1000/');
            const pharmacy2 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/1001/2000/');
            const pharmacy3 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/2001/3000/');
            const pharmacy4 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020302/3001/4000/');
            setPharmacy(pharmacy1.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상').concat(pharmacy2.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상'), pharmacy3.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상'), pharmacy4.data.LOCALDATA_020302.row.filter((obj) => obj.DTLSTATENM == '정상')));

            //동물 병원 데이터
            const hospital1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020301/1/1000/')
            const hospital2 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020301/1001/2000/')
            const hospital3 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/LOCALDATA_020301/2001/3000/')
            setHospital1(hospital1.data.LOCALDATA_020301.row.filter((obj) => obj.DTLSTATENM == '정상').concat(hospital2.data.LOCALDATA_020301.row.filter((obj) => obj.DTLSTATENM == '정상'), hospital3.data.LOCALDATA_020301.row.filter((obj) => obj.DTLSTATENM == '정상')))

            //입양 대기 동물 데이터 , 입양 대기 동물 이미지 데이터
            const animal1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/TbAdpWaitAnimalView/1/100/')
            const animalImg1 = await axios.get('http://openapi.seoul.go.kr:8088/674848546c73696e3130375966526375/json/TbAdpWaitAnimalPhotoView/1/1000/')
            setAnimal(animal1.data.TbAdpWaitAnimalView.row);
            setAnimalImg(animalImg1.data.TbAdpWaitAnimalPhotoView.row);


            var value = [];
            animal1 && animal1.data.TbAdpWaitAnimalView.row.map((an, akey) => (
                animalImg1 && animalImg1.data.TbAdpWaitAnimalPhotoView.row.map((obj, key) => {
                    if (obj.ANIMAL_NO == an.ANIMAL_NO){
                        value.push({ animal: an, img: { PHOTO_KND: obj.PHOTO_KND, PHOTO_URL: `https://${obj.PHOTO_URL}` } })
                    }
                    setTotalAni(...totalAni,value)
             })
            ))

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
    if (!pharmacy) return null;
    if (!hospital) return null;
    if (!animal) return null;
    if (!animalImg) return null;



    return (
        <AnimalContext.Provider value={{ totalAni }}>
            {children}
        </AnimalContext.Provider>
    )
}

export default Context
/* import React, { useReducer, useEffect, createContext } from 'react';
import axios from 'axios';
export const animalContext = createContext(null);
// 초기값, reducer 함수생성
// 초기값: loading, data, error 
const initialState = {
    loading: false,
    data: 0,
    error: null
}
function reducer(state, action){
    switch(action.type){
        case 'LOADING':
        return{
            loading: true,
            data: '',
            error: null
        };
        case 'SUCCESS':
        return {
            loading: false,
            data: action.data,
            error: null
        };
        case 'ERROR':
        return {
            loading: false,
            data: null,
            error: action.error
        };
        default: 
        return state;
}
}
const Context = ({ children }) => {
    const [ state, dispatch] = useReducer(reducer, initialState);
    const fetchUsers = async () => {
        dispatch({type: "LOADING"});
        try{ 
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({ type:'SUCCESS', data:response.data });
        }
        catch(e) {
            dispatch({type: 'ERROR', error: e})
        }
    }
    useEffect(()=>{
        fetchUsers();
    }, []);
    
    const { loading, data, error } = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    //if(!data) return null
    console.log(data);
    return (
        data &&<div>
              <animalContext.Provider value={{data}}>
            {children}
        </animalContext.Provider>
              
            <button onClick={fetchUsers}>다시 불러오기</button>
        </div>
    );
};
export default Context  */