import React, { useContext, useRef } from 'react'
import { Mycontext } from '../Context';

const Insert = () => {
    const { add,elInput } = useContext(Mycontext);

   
    return (
        <div className='write'>
            <form onSubmit={add} >
                <input ref={elInput} type="text" name="w" placeholder='할 일을 입력하세요!' />
                <input type="submit" value="저장" />
            </form>
        </div>
    )
}

export default Insert