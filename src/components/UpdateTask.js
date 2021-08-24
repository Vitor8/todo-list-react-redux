import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../actions';
import '../css/Home.css';

function UpdateTask({ taskToUpdate, updateTask }) {
  const [updatedTask, setUpdatedTask] = useState(taskToUpdate);

  function updateGlobalState() {
    const objectTaskUpdated = {
      id: taskToUpdate.id,
      textTask: updatedTask.textTask,
    }
    updateTask(objectTaskUpdated);
  }

  function updateStateComponent(newTextTask) {
    const objectTaskUpdated = {
      id: taskToUpdate.id,
      textTask: newTextTask,
    } 
    setUpdatedTask(objectTaskUpdated);
  }

  return (
    <div className="tasks-to-do-container">
      <div className="tasks-to-do-context">
        <div className="tasks-to-do-header">
          <h3>Task para Atualizar</h3>
          <p>{ taskToUpdate.textTask }</p>
          <input
            type="text"
            onChange={ (e) => updateStateComponent(e.target.value) }
            className="task-to-do-input"
          />
          <button className="tasks-to-do-button-update-task" onClick={ () => updateGlobalState() }>
            Atualizar Tarefa
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  taskToUpdate: state.todolist.taskToUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  updateTask: (task) => dispatch(tasksActions.updateTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTask);
