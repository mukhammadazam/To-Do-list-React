import { useState } from "react";
import "./Todo.scss";

const Todo = () => {
  const [todo, setTodo] = useState(() => {
    const storeg = localStorage.getItem("erray");
    return storeg ? JSON.parse(storeg) : [];
  });
  const [nTodo, setNtodo] = useState("");
  const [nTodo1, setNtodo1] = useState("");
  const [nTodo2, setNtodo2] = useState("");
  const [nTodo3, setNtodo3] = useState("");
  const [formAdd, setFormAdd] = useState(false);
  const eventCHange = (e) => {
    setNtodo(e.target.value);
  };
  const eventCHange1 = (e) => {
    setNtodo1(e.target.value);
  };
  const eventCHange2 = (e) => {
    setNtodo2(e.target.value);
  };
  const eventCHange3 = (e) => {
    setNtodo3(e.target.value);
  };
  const submitFun = (e) => {
    e.preventDefault();
    if (!nTodo.trim() && nTodo1.trim() && nTodo3.trim() !== nTodo2.trim())
      return;
    setTodo([
      ...todo,
      {
        id: Date.now(),
        text: nTodo,
        email: nTodo1,
        password: nTodo2,
        conPassword: nTodo3,
      },
    ]);
    setNtodo("");
    setNtodo1("");
    setNtodo2("");
    setNtodo3("");
  };
  localStorage.setItem("erray", JSON.stringify(todo));
  const delFun = (id) => {
    const deleteUp = todo.filter((el) => el.id !== id);
    setTodo(deleteUp);
  };
  const formbtn = () => {
    setFormAdd(!formAdd);
  };

  return (
    <div className="container pt-5">
      <h1 className="title">ToDo list</h1>
      <button onClick={formbtn} className="form__add">
        form Add
      </button>
      <form
        onSubmit={submitFun}
        className={`${formAdd ? "d-block form" : "d-none "} `}
      >
        <input
          className="d-block w-100 py-1 px-3 mb-5 border-top-0 border-start-0 border-end-0"
          name="firstName"
          placeholder="First Name"
          type="text"
          value={nTodo}
          onChange={eventCHange}
        />
        <input
          className="d-block w-100 py-1 px-3 mb-5 border-top-0 border-start-0 border-end-0"
          name="email"
          onChange={eventCHange1}
          value={nTodo1}
          placeholder="Email"
          type="email"
        />
        <input
          className="d-block w-100 py-1 px-3 mb-5 border-top-0 border-start-0 border-end-0"
          onChange={eventCHange2}
          value={nTodo2}
          name="password"
          placeholder="Password"
          type="password"
        />
        <input
          className="d-block w-100 py-1 px-3 mb-5 border-top-0 border-start-0 border-end-0"
          onChange={eventCHange3}
          value={nTodo3}
          name="conpassword"
          placeholder="Conform Password"
          type="password"
        />
        <button className="form__btn">Add</button>
      </form>

      <div className="row pb-5 justify-content-center justify-content-lg-between">
        {todo.map((element) => (
          <div
            className="col pt-5 row__col justify-content-center"
            key={element.id}
          >
            <p className="text-center row__item">{element.text}</p>
            <h6 className="text-center row__item d-block text-decoration-none">
              {element.email}
            </h6>
            <h3 className="text-center row__item">{element.conPassword}</h3>
            <h2 className="text-center row__item">{element.password}</h2>
            <h1 className="text-center row__item">author:Mukhammad A'zam</h1>
            <button className=" row__btn" onClick={() => delFun(element.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
