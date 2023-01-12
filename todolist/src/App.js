import './App.scss'
import { useState, useRef, useEffect } from 'react'
function App() {
  const [data, setData] = useState([]),
    [todoNum, setTodo] = useState(0),
    elInput = useRef(),
    count = useRef(0),
    elItems = useRef([]);


  const add = (e) => {
    e.preventDefault();
    let value = { num: ++count.current, todo: elInput.current.value };
    setData([...data, value]);

  };
  const remove = (n) => {
    let removeData = data.filter((obj) => obj.num !== n);
    setData(removeData);

  };

  const state = (e) => {
    e.target.classList.toggle('active');
    update();

  };
  const update = () => {
    let count = elItems.current.filter((item) => item && item.className != 'active').length;
    setTodo(count)
  }
  useEffect(update, [data]);

  return (
    <div className="App">
      <article>
        <h1>Todolist</h1>
        <p>할일 {todoNum}개 남음</p>
        <ul className='list'>
          {
            data && data.map((obj, key) => {
              return <li ref={(el) => elItems.current[key] = el} onClick={state} key={obj.num}>{obj.todo}
                <button onClick={() => remove(obj.num)}>삭제</button>
              </li>
            })
          }
        </ul>
        <div className='write'>
          <form onSubmit={add} >
            <input ref={elInput} type="text" name="w" placeholder='할 일을 입력하세요!' />

            <input type="submit" value="저장" />
          </form>
        </div>
      </article>
    </div>
  );

}

export default App;
