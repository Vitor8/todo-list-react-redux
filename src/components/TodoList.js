import React from 'react';
import { connect } from 'react-redux';
import TaskCard from './TaskCard';

function TodoList({ tasksList }) {
  return (
    <div>
      { tasksList.map((task) => {
        return (
          <TaskCard task={ task } />
        );
      }) }
    </div>
  )
}

const mapStateToProps = (state) => ({
  tasksList: state.todolist.tasksTodo,
});

export default connect(mapStateToProps)(TodoList);