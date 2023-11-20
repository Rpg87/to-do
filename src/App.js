
import './App.css';
import Logo from './components/Logo';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="tasks-main-list">
        <h1> Mis tareas</h1>
        < TasksList />
      </div>
    </div>
  );
}

export default App;
