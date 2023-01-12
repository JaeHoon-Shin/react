import { createContext, useContext, useState } from 'react';
import './App.css';
import { Mycontext } from './Context';
import List from './List';

function App() {
  const [data, setData] = useState([{
    num: 0, todo: 'aaaaaaa'
  }, {
    num: 1, todo: 'bbbbbb'
  }
  , {
    num: 2, todo: 'cccccc'
  }]);
  /* const fn=()=>{return 1000} */
  return (
    <div className="App">
      <Mycontext.Provider value={{ data: data, setData: setData }}>

        <List />

      </Mycontext.Provider>
    </div>
  );
}

export default App;
