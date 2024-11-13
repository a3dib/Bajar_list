import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
   const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {
      setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
   };

   const toggleComplete = (id) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
         )
      );
   };

   const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   return (
      <div className="App">
         <h1>Bajar List</h1>
         <TodoForm addTodo={addTodo} />
         <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
   );
}

export default App;
