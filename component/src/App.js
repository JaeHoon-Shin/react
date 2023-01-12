
import './App.css';
import Test from './Test.js';

function App() {
  let data = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="App">
      {
        data.map(function(res){
          return <Test key ={res} src ={res}/>;
        })      
      }
      

    </div>
  );
}


export default App;
