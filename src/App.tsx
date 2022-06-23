import React from 'react';
import './App.css';
import {useAppSelector} from './bll/store';

function App() {
    const tasks = useAppSelector(state => state.tasks.task)
    const todos = useAppSelector(state => state.todoList.todolist)

  return (
    <div className="App">
      Hello
        <div>{tasks}</div>
        <div>{todos}</div>
    </div>
  );
}

export default App;
