import './App.css';
import { useState } from 'react'
import Display from './components/Display';
import Todo from './components/Todo';

function App() {
  const [todos, addToDo] = useState([]);

  return (
      <div>
        <Todo todos={todos} aTD={addToDo} />
        <Display todos={todos} aTD={addToDo} />
      </div>
  );
}

export default App;