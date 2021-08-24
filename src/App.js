import './App.css';
import TasksToDo from './components/TasksToDo';
import TasksDone from './components/TasksDone';

function App() {
  return (
    <div className="App">
      <TasksToDo />
      <TasksDone />
    </div>
  );
}

export default App;
