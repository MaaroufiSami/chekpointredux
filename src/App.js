import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
     <AddTask />
     <Task />
    </div>
  );
}

export default App;
