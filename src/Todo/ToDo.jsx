import { useState } from "react";
import "./Todo.scss";

const ToDo = () => {
  const [todo, setTodo] = useState(() => {
    const storeg = localStorage.getItem("array");
    return storeg ? JSON.parse(storeg) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [newTodo1, setNewTodo1] = useState("");
  const [newTodo2, setNewTodo2] = useState("");
  const [newTodo3, setNewTodo3] = useState("");
  const onchanche = (e) => {
    setNewTodo(e.target.value);
  };
  const onchanche1 = (e) => {
    setNewTodo1(e.target.value);
  };
  const onchanche2 = (e) => {
    setNewTodo2(e.target.value);
  };
  const onchanche3 = (e) => {
    
    setNewTodo3(e.target.value);
  };
  const submitFun = (e) => {
    e.preventDefault();
    if (
      !newTodo.trim() &&
      newTodo1.trim() &&
      newTodo2.trim() !==
      newTodo3.trim()
    )
      return;
    
      setTodo([
        ...todo, {
        
          id: Date.now(),
          fName: newTodo,
          email: newTodo1,
          password: newTodo2,
          conPassword: newTodo3},
        
      ])
    
    };
    localStorage.setItem('array',JSON.stringify(todo))

  return (  
    <div className="container">
      <h1 className="text-center pe-3 pt-5">ToDo List</h1>
      <form className="form" onSubmit={submitFun}>
        <input
          name="setNewTodo" onChange={onchanche} value={newTodo}
          type="text"
          placeholder="First name"
          className="input1 d-block w-100 "
        />
        <input
          name="setNewTodo1" onChange={onchanche1}
          type="email"
          placeholder="Email"
          className="input2 d-block w-100" value={newTodo1}
        />
        <input
          name="setNewTodo2" onChange={onchanche2}
          type="password"
          placeholder="password"
          className="input3 d-block w-100" value={newTodo2}
        />
        <input
          name="setNewTodo3" onChange={onchanche3}
          type="password"
          placeholder="Conform Password"
          className="input4 d-block w-100" value={newTodo3}
        />
        <button className="form_btn w-100  d-block py-3 ">Add</button>
      </form>
      <div className="row">
        {todo.map((Element)=>(
            <div className="col" key={Element.id}>
                <h3 className="">{Element.fName}</h3>
                <a>{Element.email}</a>
                <h5>{Element.password}</h5>
                <h5>{Element.conPassword}</h5>

            </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
