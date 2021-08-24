import React from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../actions';

function TaskCard({ task, removeTask, finishTask }) {
  return (
    <div>
      <p>{ task.textTask }</p>
      <button type="button" onClick={ () => finishTask(task) }>Finalizar</button>
      <button type="button" onClick={ () => removeTask(task.id) }>Deletar</button>
      <button type="button">Atualizar</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskId) => dispatch(tasksActions.removeTask(taskId)),
  finishTask: (task) => dispatch(tasksActions.finishTask(task)),
});

export default connect(null, mapDispatchToProps)(TaskCard);
