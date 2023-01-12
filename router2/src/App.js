import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import Movies from './component/Movies';
import Music from './component/Music';
import Main from './component/Main'
import Apps from './component/Apps'
import Software from './component/Software'
import data from './data/data.json';
import Media from './component/Media'
import './css/common.scss';
function App() {
  
  let title = [];

  for(let t in data){
    title.push(t);
  }
  
  return (
    
    <BrowserRouter>

      <header>
        <Link to="/"> OUR MEDIA LIBRARY</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          {title.map((res)=>{
           return <Route key = {res} path={`/${res}`} element={<Media content = {data[res]} subject = {res}/>}></Route>
          })}
          {/* <Route path='/Movies' element={<Movies content = {data.movies}/>}></Route>
          <Route path='/Music' element={<Music content = {data.music} />}></Route>
          <Route path='/Apps' element={<Apps content = {data.app} />}></Route>
          <Route path='/Software' element={<Software content = {data.software} />}></Route> */}

        </Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
