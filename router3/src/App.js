import './css/common.scss'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { useState , useRef} from 'react'
import Main from './component/Main';
function App() {
  let [toggle, setToggle] = useState(false);
  let elBtn = useRef(0);
  
  let btnToggle = (n)=>{
    setToggle((n)=>!n);
    
  }

 /*  let btnToggle1 = ()=>{
    elBtn.current.classList.toggle('on');
    
  } */

  
  return (

    <BrowserRouter>
      <main>
        <div className='btn-box'>
          <button className='btn'  onClick={()=>btnToggle(toggle)}>메뉴버튼</button>
          <div className={toggle ? 'on menu-box':'menu-box'} > {/* ref={elBtn} */}
            <Link to="/">home</Link>
            <Link to="/movies">MOVIES</Link>
            <Link to="/music">MUSIC</Link>
            <Link to="/apps">APPS</Link>
            <Link to="/software">SOFTWARE</Link>
          </div>
        </div>
        <Routes>
        <Route path='/' element={<Main />}></Route>
          <Route path='/:component' element={<Main />}></Route>
        </Routes>
      </main>
    </BrowserRouter >

  );
}

export default App;
