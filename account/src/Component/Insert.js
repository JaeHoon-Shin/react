import React, { useContext, useState } from 'react'
import { accountContext } from '../Context'

const Insert = () => {

    const { data, dispatch, insertBox, elIn, elAr } = useContext(accountContext);
    const [elInput, setElInput] = useState(''); //금액를 받는 변수
    const [message, setMessage] = useState(''); //메세지를 받는 변수
    let date = new Date();
   
    return (
        <div className='insert' ref={insertBox}>
            <p>등록하기</p>
            <input type='text' value={elInput} onChange={(e) => setElInput(e.target.value)} />
            <textarea placeholder='메세지 입력' value={message} onChange={(e) => setMessage(e.target.value)} />
            <div className='button-box'>{                           /* reducer로 dispatch를 통해 전달하여 값 갖고 놀기  */}
                <button onClick={() => dispatch({id : date, type: 'plus', day: date.getMonth() + 1 + '.' + date.getDate(), money: Number(elInput), message: message, setElInput:setElInput, setMessage:setMessage })}>예금하기</button>
                <button onClick={() => dispatch({id : date, type: 'minus', day: date.getMonth() + 1 + '.' + date.getDate(), money: -Number(elInput), message: message , setElInput:setElInput, setMessage:setMessage})}>출금하기</button>
            </div>
        </div>
    )
}

export default Insert