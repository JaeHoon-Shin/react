import React, {useState } from 'react'
import { useRef } from 'react'
import { Route, useParams } from 'react-router-dom';
import data from '../data/data.json'
const Main = () => {
    /* let number = useRef([]);

    const test = () => {
        
        for (let i in number.current) {
            
            console.log(number.current[i]);
        }
    }

    let { component } = useParams();
    component = component || 'movies'; */
    {/* <Route path='/:page'/> */}
    let num = 10;
    let [count,setCount] = useState(10);
    let numRef = useRef(10);
    // let {page} =useParams();
    function incre(){
        num++;
        numRef.current++;
        setCount(++count)
    }
    
    console.log(num);
    return (
        <div onClick = {incre}> {num} / {count} /{numRef.current}</div>

























/*         <section>
            <h2 ref={(el) => { number.current[0] = el }} onClick={test}>{component.toUpperCase()} </h2>
            <div ref={(el) => { number.current[1] = el }}>
                {
                    data[component].map((res, idx) => {
                        return <figure key={idx} ref={(el) => { number.current[2] = el }}>
                            <p><img src={res.photo}></img></p>
                            <figcaption>
                                <p>{res.name}</p>
                            </figcaption>
                        </figure>
                    })
                }
            </div>
        </section> */
    )
}

export default Main