import React, { useContext, useState } from 'react'
import { ReducerCon } from '../ReducerContext';

const Main = () => {
    const { data, dispatch } = useContext(ReducerCon);
    const [ip, setIp] = useState();
    return (
        <div className="App">
            <h1>데이터값 : {data}</h1>
            <input type='text' value={ip} onChange={(e) => setIp(e.target.value)} />
            <button onClick={() => dispatch({ type: 'plus', value: ip })}>더하기</button>
            <button onClick={() => dispatch({ type: 'minus', value: ip })}>빼기</button>

        </div>
    )
}

export default Main