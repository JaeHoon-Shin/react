/* import logo from './logo.svg'; */
import './App.css';
import './test.scss'; 
import sy from './test.module.css';
function App() {
  let style = {
    "font-size ": "3rem",
    "color" : "blue"
  }
  return (
    <div className="App">
      <header className="App-header">
        <body>
        <img src="./logo.svg" className="App-logo" alt="logo" />
        <p style={style} >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className = {sy.color}>  </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </body>
      </header>
    </div>
  );
}

export default App;
