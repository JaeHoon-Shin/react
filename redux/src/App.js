import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement,increment,decrement1,increment1 } from './component/CreateSlice';



function App() {
  // 사용 하기 전 선언 useSelector
  const {count} = useSelector((state)=>state.counter)
  const {count1} = useSelector((state)=>state.counter)

  // 사용할때 적용 할 일
  const dispatch = useDispatch();

 
  
  return (
    <div className="App">
      
      <button onClick={()=>dispatch(decrement())}> - </button>
      {count}

      <button onClick={()=>dispatch(increment())}> + </button>
      <br></br>
      100
      <button onClick={()=>dispatch(decrement1())}> - </button>
      {count1}

      <button onClick={()=>dispatch(increment1())}> + </button>
    </div>
  );
}

export default App;
