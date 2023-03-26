import './Todo/Todo.scss';
import ToDo from './Todo/ToDo';
import ApiR from './ApiRender/Home';
import Navbar from './navbar/Navbar';
import Card from './cards/Card';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './App.css'
import Error from './error/Error';
import Asia from './asia/Asia';
function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/' element={<ApiR />} />
        <Route path='Todolist' element={<ToDo />} />
        <Route path='/Error-404' element={<Error />} />
        <Route path='/Europa' element={<Card />} />
        <Route path='/Asia' element={<Asia />} />
        <Route path='*' element={<Navigate to='/Error-404' />} />

      </Routes></>
  );
}

export default App;
