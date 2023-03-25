import './Todo/Todo.scss';
import ToDo from './Todo/ToDo';
import ApiR  from './ApiRender/Home';
import Navbar from './navbar/Navbar';
import {Routes, Route,NavLink } from 'react-router-dom';
import './App.css'

function App() {
  return (
   <>
   <Navbar/>
    <Routes>
     
     <Route path='/' element={ <ApiR/>} />      
     <Route path='Todolist' element={ <ToDo/>} />      
         </Routes></>
  );
}

export default App;
