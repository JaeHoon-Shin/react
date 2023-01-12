import { createContext, useContext } from 'react';
import './App.css';
import { Mycontext } from './Context';
import List from './List';

function App() {
  const num = 200;
  /* const fn=()=>{return 1000} */
  return (
    <div className="App">
      <Mycontext.Provider value={[num,10,20,300,41]}>
        
        <List />
        
      </Mycontext.Provider>
      </div>
  );
}

export default App;
