import React, { useContext, useEffect, useState } from 'react'
import { AppC } from '../Attcontext'

const Insert = () => {
    const [input, setInput] = useState('');
    const { dataCtl, type, setType, data } = useContext(AppC);
    const [style, setStyle] = useState([{ display: 'block' }, { display: 'none' }]);

    useEffect(() => {
        if (type[0] === 'modify') {
            setStyle([{ display: 'none' }, { display: 'block' }]);
            setInput(data.filter(obj => obj.id == type[1])[0].name);
        } else {
            setStyle([{ display: 'block' }, { display: 'none' }]);
        }
    }, [type]);
    return (

        <div>
            
            <p style={style[0]}>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => dataCtl('insert', { id: Date.now(), name: input })}>저장</button>
            </p>

            <p style={style[1]}>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => dataCtl('modify', { id: type[1], name: input })}>수정</button>
            </p>

        </div>

    )
}

export default Insert