
/////// 내가 한 방법 //////////
import './App.scss'
import { useState, useRef, useEffect } from 'react'
import List from './component/List'
import Write from './component/Write'
function App() {
  const [data, setData] = useState([]),
    [todoNum, setTodo] = useState(0),
    elItems = useRef([]),
    elInput = useRef(),
    count = useRef(0),
    update = useRef(false);
    
  const add = (e) => {
    e.preventDefault();
    if (update.current) {
      data.map((el, key) => {
        if (el.update) {
          el.todo = elInput.current.value;
          el.update = false;
          update.current = false;
          setData([...data])
        }
      })
    }
    else {
      let value = { num: ++count.current, todo: elInput.current.value, check: "no", update: false }
      setData([...data, value])
    }
  }
  return (
    <div className="App">

      <article>
        <h1>Todolist</h1>
        <p>할일 {todoNum}개 남음</p>
        <List data={data} setData={setData} update={update} setTodo={setTodo} elItems={elItems} elInput={elInput}></List>
        <Write add={add} elInput={elInput}></Write>
      </article>

    </div>
  );
}

export default App;


/////// 다른방법 //////////
/* import './App.scss'
import { useState, useRef, useEffect } from 'react'
import List from './component/List'
import Write from './component/Write'
function App() {
  const [data, setData] = useState([]),
    [todoNum, setTodo] = useState(0),
    elItems = useRef([]),
    elInput = useRef(),
    count = useRef(0);
  const add = (e) => {
    e.preventDefault();
    let value = { num: ++count.current, todo: elInput.current.value }
    setData([...data, value])
  }

    const remove = () => {

    }
    const state = (e) => {
      update();
    };
    const update = () => {  
    }
    useEffect();
    return (
      <div className="App">

        <article>
          <h1>Todolist</h1>
          <p>할일 {todoNum}개 남음</p>
          <List add={add} elItems={elItems} ></List>
          <Write add={add} elItems={elItems} count={count}> </Write>
        </article>

      </div>
    );
  }

  export default App; */
