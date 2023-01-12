import { createContext, useContext } from 'react';
import './App.css';
const Mycontext = createContext('hello')
function App() {
  const num = 100;
  /* const fn=()=>{return 1000} */
  return (
    <div className="App">
      <Mycontext.Provider value={num}>
        
        <List />
        
      </Mycontext.Provider>
      </div>
  );
}
function List(){
  const value = useContext(Mycontext);
  return(
    <>
      List{value}<br/>
      
    </>
  )
}
function Item(){}
function Insert(){}
export default App;
