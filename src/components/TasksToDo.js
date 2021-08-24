import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import * as tasksActions from '../actions/index';

function TasksToDo({ addTask }) {
  const [newTask, setNewTask] = useState('');

  return (
    <div className="tasks-to-do-container">
      <h3>Tasks To-Do</h3>
      <input type="text" onChange={ (e) => setNewTask(e.target.value) } />
      <button onClick={ () => addTask(newTask) }>Acrescentar Tarefa</button>
      <TodoList />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (newTask) => dispatch(tasksActions.addTask(newTask)),
});

export default connect(null, mapDispatchToProps)(TasksToDo);