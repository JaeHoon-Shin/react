
import './App.css';
import { Mycontext } from './Context';
import { useRef, useState } from 'react';
import Insert from './component/Insert';
import List from './component/List';

function App() {
  const [data, setData] = useState([]);
  const count = useRef(0);
  const elInput = useRef();
  const [todoNum, setTodoNum] = useState();
  const elItems = useRef([]);
  const updata = useRef([false]);
  const updataNum = useRef(0);



  const add = (e) => {
    e.preventDefault()

    if (updata.current[0]) {
      data[updataNum.current].todo =elInput.current.value;
      updata.current[0] = false;
      setData([...data])

    }
    else {
      let value = { num: ++count.current, todo: elInput.current.value }
      setData([...data, value])
    }
  }
  return (
    <div className="App">
      <Mycontext.Provider value={{ data: data, updata: updata, updataNum: updataNum, add: add, elItems: elItems, setData: setData, elInput: elInput, count: count, todoNum: todoNum, setTodoNum: setTodoNum }}>
        <List></List>
        <Insert></Insert>
      </Mycontext.Provider>
    </div>

  );
}

export default App;
