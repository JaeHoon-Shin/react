import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../Context'

const Item = ({ obj,number }) => {
    const { data, setData, setTodoNum, elItems, elInput, updata, updataNum} = useContext(Mycontext);
    const delte = (n) => {
        let value = data.filter((obj) => obj.num != n)
        setData(value)
    }
    const state = (e) => {
        
        e.target.classList.toggle('active')
        update();
    }
    const modify =(n)=>{
        console.log(n);
        elInput.current.value = obj.todo
        updataNum.current = n;
        updata.current[0] = true
        
    }/* elItems[e].current.value =  */
    const update = () => {
        let value = elItems.current.filter((obj) => obj && obj.className != 'active').length
        setTodoNum(value); 

    }
    useEffect(update, [data])

    return (
        <li onClick={state} ref={(el) => elItems.current[obj.num-1] = el}>
            {obj.todo}
            <button onClick={()=>modify(number)}>수정하기</button> 
            <button onClick={() => delte(obj.num)}>삭제하기</button>
        </li>
    )
}

export default Item