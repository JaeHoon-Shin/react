import React, { useContext, useEffect, useRef, useState } from 'react'
import { Mycontext } from '../Context'

const Insert = () => {
  const title = ['등록', '수정'];
  const subTitle = ['저장하기', '수정하기'];
  const { data, elInput, elModify, updataNum, setData, setElmodify, count, elBox, elList } = useContext(Mycontext)
  const [c, setC] = useState(0);


  const add = () => {
    if (elModify) {
      /* data.map((obj, key) => {
        if (obj.num == updataNum.current) {
          obj.name = elInput.current.value;
          setData([...data])
          setElmodify(false);
        }
      }) 
        한줄
      */
      setData(data.map((obj) => (obj.num === updataNum.current) ? { ...obj, name: elInput.current.value } : obj));
      setElmodify(false);


          /* setData(data.map((obj)=>{
            if(obj.num === updataNum.current){
              obj.name = elInput.current.value;
            }
            return obj;
          }) */
          /* setData(data.map((obj)=>{
            return (obj.num === updataNum.current)? {...obj, name:elInput.current.value} : obj ;
          })) */
        }
    else {
      let value = { num: ++count.current, name: elInput.current.value };
      setData([...data, value])
    }
    //elList.current.classList.add('active');
    elBox.current.classList.toggle('active');
    elInput.current.value = '';
  }
  useEffect(() => {
    if (elModify) {
      setC(1);
    }
    else {
      setC(0);
    }
  }, [elModify])

  return (
    <>
      <div className='insert-box' ref={elBox}>

        <p>참여자 {title[c]}</p>
        <input type="text" ref={elInput} placeholder='이름을 입력하세요'></input>
        <p className='submitBox' onClick={add} >{subTitle[c]}</p>
      </div>

    </>
  )
}

export default Insert