import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
   return (
      <div className="task-item">
         <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
         />
         <span
            className={`task-text ${todo.completed ? 'completed' : ''}`}
         >
            {todo.text}
         </span>
         <button className="delete" onClick={() => deleteTodo(todo.id)}>
            Delete
         </button>
      </div>
   );
}

export default TodoItem;
