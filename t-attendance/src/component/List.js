import React, { useContext } from 'react'
import { AppC } from '../Attcontext'

const List = () => {
    const { data, setType, dataCtl  } = useContext(AppC);
    return (
        <div>
            <ul>
                {

                    data.map((obj) => (
                        <li key={obj.id}>{obj.name}
                            <button onClick={() => setType(['modify', obj.id])}>수정</button>
                            <button onClick={()=>dataCtl('remove', obj.id)   }>삭제</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List