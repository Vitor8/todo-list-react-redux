import TasksToDo from './components/TasksToDo';
import TasksDone from './components/TasksDone';
import UpdateTask from './components/UpdateTask';
import { connect } from 'react-redux';
import './css/Home.css';

function App({ taskBeingUpdated }) {
  return (
    <div className="home-container" >
      { taskBeingUpdated ? <UpdateTask /> : <TasksToDo /> }
      <TasksDone />
    </div>
  );
}

const mapStateToProps = (state) => ({
  taskBeingUpdated: state.todolist.taskBeingUpdated,
});

export default connect(mapStateToProps)(App);
