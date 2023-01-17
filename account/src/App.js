import Context from "./Context";
import List from './Component/List'
import Insert from './Component/Insert'
import './App.scss';

function App() {
  return (
    <div className="App">
    <Context>
      <List/>
      <Insert />
    </Context>
    </div>
  );
}

export default App;
