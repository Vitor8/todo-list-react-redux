import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import * as tasksActions from '../actions/index';
import '../css/Home.css';

function TasksToDo({ addTask }) {
  const [newTask, setNewTask] = useState('');

  function updateListTask() {
    addTask(newTask);
    setNewTask('');
  }

  return (
    <div className="tasks-to-do-container">

      <div className="tasks-to-do-context">
        <div className="tasks-to-do-header">
          <h3>Tasks To-Do</h3>
          <input
            type="text"
            value={ newTask }
            onChange={ (e) => setNewTask(e.target.value) }
            className="task-to-do-input"
          /> <br />
          <button
            onClick={ () => updateListTask() }
            className="tasks-to-do-button-add-task"
          >
            Acrescentar Tarefa
          </button>
        </div>

        <div className="tasks-to-do-list">
          <TodoList />
        </div>
      </div>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (newTask) => dispatch(tasksActions.addTask(newTask)),
});

export default connect(null, mapDispatchToProps)(TasksToDo);