import React from 'react';
import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';

const App: React.FC = () => {
  const addTodo = (text: string): void => {
    console.log(text);
  }
  const todos = [
    {id: "1", text: "Complete course of Typescript"},
    {id: "2", text: "Complete evaluations"}
  ]  

  return (
    <div className = 'App'>
      <NewTodo onAddTodo = {addTodo}/>
      <TodoList items = {todos}/>
    </div>
  )
}

export default App;