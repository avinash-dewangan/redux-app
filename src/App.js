// src/App.js
import React from 'react';
import Counter from './features/counter/Counter';
import Todos from './features/todos/Todos';

const App = () => {
  return (
    <div>
      <Counter />
      <Todos />
    </div>
  );
};

export default App;
