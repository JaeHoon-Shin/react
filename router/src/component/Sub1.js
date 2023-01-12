import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Sub1 = () => {
    let { id } = useParams();
    let navi = useNavigate();

    let data = [{ id: 0, name: "황금토끼" }, { id: 1, name: "검정토끼" }, { id: 2, name: "빨간토끼" }];
    let result = data.filter((res) => {
        return res.id == id;
    })
    const btn =document.getElementById('home');
    btn.click(()=>{
        
        setTimeout(() => {
            navi('/');
        }, 3000)
    })
    return (
        <div>Sub1에 파라미터값은 {result[0].name}입니다.<button id = "home">홈으로</button></div>
        
    )
}

export default Sub1