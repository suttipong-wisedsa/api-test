import "./App.css";
import { Todo } from "./component/Todo";
import { useEffect, useState } from "react";
function App() {
  const [todo, setTodo] = useState([]); //state api todo
  const [user, setUser] = useState([]); //state api user
  const [Username, setUserName] = useState("");
  const [id, setId] = useState("");
  const [submit, setSubmit] = useState(""); //สิ่งที่พิม
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const todos = `https://jsonplaceholder.typicode.com/todos/${submit}`;
    const users = `https://jsonplaceholder.typicode.com/users/${submit}`;
    fetch(todos)
      .then((res) => res.json())
      .then((todosdata) => {
        setTodo(todosdata);
        console.log(todo.title);
      })
      .catch((err) => {
        alert("ไม่พบข้อมูล");
      });
    fetch(users)
      .then((res) => res.json())
      .then((usersdata) => {
        setUser(usersdata);
      })
      .catch((err) => {
        alert("ไม่พบข้อมูล");
      });
  }, [submit]);

  return (
    <div className="container">
      <Todo
        Username={Username}
        setSubmit={setSubmit}
        setUserName={setUserName}
        submit={submit}
        setCheck={setCheck}
        check={check}
      />
      <div className="main">
        {check ? (
          <div>
            <h1>ชื่อ {`${user.name}`}</h1>
            <h3>สิ่งทีต้องทำ {`${todo.title}`}</h3>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
