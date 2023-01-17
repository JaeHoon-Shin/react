import React, { useContext, useState } from 'react'
import { accountContext } from '../Context';
import Item from './Item';

const List = () => {
    const { data,insertBox } = useContext(accountContext);
    let rData = [...data];
 
    function btnAction(){
        insertBox.current.classList.toggle('active');
    }
    return (
        <div className='list'>
            <div className='text-box'>
                <p>2023년 입출금 내역 </p>
                <span>{data[0].total.toLocaleString()}원</span>
                <button onClick={btnAction}>등록</button>
            </div>
            
            <ul className='list-ul'>

                <li>
                    <p>날짜</p>
                    <span> 내용</span>
                    <p> 금액</p>
                </li>
                {
                    data && rData.reverse().map((obj, key) => {
                        return <Item key={key} obj={obj}></Item>
                    })
                }
            </ul>
        </div>
    )
}
export default List