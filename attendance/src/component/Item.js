import React, { useContext } from 'react'
import { Mycontext } from '../Context'

const Item = ({ obj }) => {
    const { setData, data, elInput, setElmodify, updataNum, elBox } = useContext(Mycontext);

    const remove = (n) => {
        let value = data.filter((e) => e.num != n);
        setData(value);

    }
    const modify = (n) => {
        elBox.current.classList.toggle('active')
        setElmodify(true);
        updataNum.current = n;
        let na = data.filter((e) => e.num == n);
        elInput.current.value = na[0].name;

    }
    return (

        <li>
            <p>{obj.name}</p>
            <div>
                <button onClick={() => modify(obj.num)}>수정</button>
                <button onClick={() => remove(obj.num)}>삭제</button>
            </div>
        </li>

    )
}

export default Item
