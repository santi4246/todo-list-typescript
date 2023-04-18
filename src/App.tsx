import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';
import { Todo } from './Models/Todo';
import "semantic-ui-css/semantic.min.css";
import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string): void => {
    setTodos((prevTodo) => [...prevTodo, {id: Math.random().toString(), text: text}]);
  }
  const deleteTodo = (id: string): void => {
    setTodos((prevTodo) => {
      return prevTodo.filter(e => e.id !== id)
    });
  }

  return (
    <div className = 'App'>
      <NewTodo onAddTodo = {addTodo} />
      <TodoList items = {todos} onDeleteTodo = {deleteTodo}/>
    </div>
  )
}

export default App;