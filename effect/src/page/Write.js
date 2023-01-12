import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Write = ({fn}) => {
    const nav = useNavigate();
    const [data, setData] = useState({});
    /*  
        useState
        초기에 한번만 실행 =>[] , 
        변수의 값이 업데이트 될때마다 실행 =>[변수명] , 
        컴포넌트가 언마운트될때 useEffect안에 return실행 
    */
    useEffect(function(){
        console.log('useEffect');
        return function(){
            console.log('컴포넌트에서 나감');
        }
    },[data])
    

    function pageChage() {
        fn(data);
        nav('/');
    }
    function writeFn(e) {
        e.preventDefault();
        let { name, value } = e.target;

       /*  if (e.target.name == 'id') { */
            //setData({id:`${name}`  ,value:`${value}`})
            setData(name,value)
       /*  }; */
        
/*         if (e.target.name == 'content') {
            setData(value:${value})
            
        }; */
    
    }
    return (
        <div>
            <form>{/* onChange 변화가 일어날 시 함수 실행 */}
                <p><input onChange={writeFn} type='text' name='id' placeholder='아이디를 입력하세요.'></input></p>
                {/* <p><input onChange={writeFn} type='text' name='content' placeholder='내용을 입력하세요.'></input></p> */}
                <p><button onClick={pageChage}>저장</button></p>
            </form>
            {/* <button onClick={pageChage}>리스트이동</button> */}
        </div>

    )
}

export default Write