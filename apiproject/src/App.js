import './App.scss';
import { useState, useRef, useEffect, useContext } from 'react'
import Context from './Context';
import Main from './component/Main';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AnimalSales from './component/AnimalSales';
import AnimalInfo from './component/AnimalInfo';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <header>
          <div className='header-top'>
            <Link to="/"><img src='./img/logo.svg'></img></Link>
            <h2><Link to="/">구해줘 홈즈</Link></h2>
            <ul className='text-box'>
              <li className='logout-box'><Link to="/login"><p>로그인</p></Link></li>
              <li className='logout-box'><Link to="/singUp"><p>회원가입</p></Link></li>
              <li className='login-box'><Link to="/logOut"><p>로그아웃</p></Link></li>
              <li className='login-box'><Link to="/myPage"><img src='./img/mypage.svg'></img></Link></li>
            </ul>
          </div>
          <div className='header-nav'>
            <ul>
              <li><Link to="/animal">분양동물</Link></li>
              <li><Link to="/animal-list">반려동물 자랑 게시판</Link></li>
              <li><Link to="/qna">문의 게시판</Link></li>
            </ul>
          </div>
        </header>
        <Context>
          <main>
          
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/animal' element={<AnimalSales/>}></Route>
              <Route path='/sinup'></Route>
              <Route path='/animalInfo/:id' element={<AnimalInfo />}></Route>
            </Routes>
          </main>
        </Context>

      </BrowserRouter>
    </>
  );
}

export default App;
