import { createContext, useContext, useRef, useState } from "react";
import Insert from "./component/Insert";
import List from "./component/List";
import { Mycontext } from "./Context";
import './App.scss'
function App() {

  const [data, setData] = useState([]);
  const count = useRef(0);
  const elItems = useRef([]);
  const elInput = useRef();
  const [elModify, setElmodify] = useState(false);
  const updataNum = useRef(0);
  const elList = useRef();
  const elBox = useRef();
  function plus(){
    elBox.current.classList.toggle('active')
    //elList.current.classList.remove('active')
  }
  
  return (

    <div className="App">
      
      <Mycontext.Provider value={{ data: data, elBox:elBox, elList:elList, updataNum: updataNum, elInput: elInput, elItems: elItems, count:count, setData: setData, elModify:elModify, setElmodify: setElmodify }}>
        <button className="plusBox" onClick={plus}>+</button>
       {data && <> <List></List></>}

        <Insert></Insert>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
