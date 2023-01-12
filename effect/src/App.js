
import './App.css';
import Write from './page/Write'
import List from './page/List'
import {useState} from 'react'
import {Link, HashRouter, Route, Routes } from 'react-router-dom'


function App() {
  let [itemData,setItem] = useState();
  function prams(data){
/*     console.log(data) */
    setItem(data);
    
  }
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<List content={itemData}/>}></Route>
        <Route path='/Write' element={<Write fn={prams}/>} ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
