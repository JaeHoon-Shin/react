import { useContext, useRef, useState } from "react";
import './App.scss';
import  Attcontext,{AppC} from "./Attcontext";
import Insert from "./component/Insert";
import List from "./component/List";



function App() {

  return (
    <Attcontext>
      <main>
      <List/> 
        <Insert />
      </main>
    </Attcontext>
  );
}

export default App;
