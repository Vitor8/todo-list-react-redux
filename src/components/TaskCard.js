import React from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../actions';

function TaskCard({ task, removeTask }) {
  return (
    <div>
      <p>{ task.textTask }</p>
      <button type="button">Finalizar</button>
      <button type="button" onClick={ () => removeTask(task.id) }>Deletar</button>
      <button type="button">Atualizar</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskId) => dispatch(tasksActions.removeTask(taskId)),
});

export default connect(null, mapDispatchToProps)(TaskCard);
