import React from 'react';
import TodoList from './TodoList';

function TasksToDo() {
  return (
    <div className="tasks-to-do-container">
      <h3>Tasks To-Do</h3>
      <input type="text" />
      <button>Acrescentar Tarefa</button>
      <TodoList />
    </div>
  )
}

export default TasksToDo;
