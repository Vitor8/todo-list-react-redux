import React from 'react';
import TasksDoneList from './TasksDoneList';
import '../css/Home.css';

function TasksDone() {
  return (
    <div className="tasks-to-do-container">
      <div className="tasks-to-do-context">
        <div className="tasks-to-do-header">
          <h3>Tasks Done</h3>
          <TasksDoneList />
        </div>
      </div>
    </div>
  )
}

export default TasksDone;
