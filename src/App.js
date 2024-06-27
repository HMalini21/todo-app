import './App.css';
import '@picocss/pico';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import Form from './components/Form';

function App() {
  const [todo, setTodo] = useState([]);

  function saveToLocalStorage() {
    localStorage.setItem('Todo-list', JSON.stringify(todo));
  }

  function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('Todo-list')) || [];
  }

  useEffect(() => {
    setTodo(getFromLocalStorage());
    console.log('get', todo);
  }, []);

  const handleAdd = (text) => {
    const task = {
      id: new Date().getTime(),
      string: text,
      isDone: false,
      isEdit: false,
    };
    todo.push(task);
    saveToLocalStorage();
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form handleAdd={handleAdd} />
      {todo.map((t) => (
        <div key={t.id}>
          <TodoList text={t.string} />
        </div>
      ))}
    </div>
  );
}

export default App;
