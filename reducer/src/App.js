
import './App.css';
import { useContext, useReducer, useState } from 'react';
import ReducerContext, { ReducerCon } from './ReducerContext';
import Main from './Component/Main';

function App() {

  return (
    <ReducerContext>
      <Main></Main>

    </ReducerContext>
  );
}

export default App;
