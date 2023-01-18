
import './App.css';
import { useRef, useState } from 'react'


function App() {

  const r = useRef();
  const rr = useRef(0);
  let num = 0;


  const [t, setT] = useState(0);

  
  function tt() {
    setT(t+1)
    num = num+1;
    r.current.classList.toggle('a');
  }
  function reff() {
    ++rr.current;
  }
  


  return (

    <>
      <div className="App">
        
        <input type='text' ref={r}/>
        <button onClick={tt} >state : {t}</button>
        <button onClick={reff} >ref:{rr.current}   </button>
        <button >num:{num} </button>

          
      </div>
    </>
  );
}

export default App;
