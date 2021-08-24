import React from 'react';
import { connect } from 'react-redux';
import TaskDoneListCard from './TaskDoneListCard'

function TasksDoneList({ tasksDone }) {
  return (
    <div>
      { tasksDone.map((task) => {
        return (
          <TaskDoneListCard task={ task } />
        );
      }) }
    </div>
  )
}

const mapStateToProps = (state) => ({
  tasksDone: state.todolist.tasksDone,
});

export default connect(mapStateToProps)(TasksDoneList);
