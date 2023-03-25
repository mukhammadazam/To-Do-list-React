import logo from './logo.svg';
import './Todo/Todo.scss';
import ToDo from './Todo/ToDo';
import ApiR  from './ApiRender/Home';
function App() {
  return (
    <div className="App">
      <ApiR/>
      <ToDo />
    </div>
  );
}

export default App;
