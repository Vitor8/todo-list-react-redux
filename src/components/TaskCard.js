import React from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../actions';
import '../css/TaskCard.css';

function TaskCard({ task, removeTask, finishTask, prepareToUpdateTask }) {
  return (
    <div>
      <p className="task-card-textTask">{ task.textTask }</p>
      <button className="task-card-button" type="button" onClick={ () => finishTask(task) }>
        Finalizar
      </button>
      <button className="task-card-button" type="button" onClick={ () => removeTask(task.id) }>
        Deletar
      </button>
      <button className="task-card-button" type="button" onClick={ () => prepareToUpdateTask(task) }>
        Atualizar
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskId) => dispatch(tasksActions.removeTask(taskId)),
  finishTask: (task) => dispatch(tasksActions.finishTask(task)),
  prepareToUpdateTask: (task) => dispatch(tasksActions.prepareToUpdateTask(task)),
});

export default connect(null, mapDispatchToProps)(TaskCard);
