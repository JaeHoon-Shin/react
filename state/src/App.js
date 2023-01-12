//내가 한 파일
/* import Product from './state/Product'
import Main from './state/Main'
import "./App.scss"; */
//선생님
import { useState } from 'react'
import Main from './component/Main';
import Product from './component/Product';
import './css/common.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  let [idx, setIdx] = useState(0);
  let elAtogle = (n) => {
    setIdx(n);
  }
  return (
    <BrowserRouter>
      <header>                  {/* idx == 0 && 'active' 아래의 문법과 같음 앞조건이 참이면 뒤가 반영 */}
        <Link to="/" className={idx == 0 ? 'active':'' } onClick={() => elAtogle(0)} >HOME</Link>
        <Link to="/product" className={idx == 1 ? 'active':'' } onClick={() => elAtogle(1)} >Product</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </main>
    </BrowserRouter>
  );

}

export default App;
