import React, { useContext } from 'react'
import { Mycontext } from './Context';

const Item = ({obj}) => {
    const { data, setData } = useContext(Mycontext);
    const modify = (e)=>{
    let content = data.map((obj,key)=>{
        
            if(obj.num == e)
            {
              return {...obj,todo:'수정'};
              
            } 
           return obj
        })

        setData(content)
       
    }
    console.log(data)
  return (
    <p >{obj.num} {obj.todo}<button onClick={()=>modify(obj.num)}>수정</button></p>
  )
}

export default Item