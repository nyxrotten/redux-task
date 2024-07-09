import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodos, checkTodos, deleteTodos } from "./redux/todosSlice";


const App = () => {

  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");
  const [alert, setAlert] = useState("")
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const addTodo = () => {
    if (text) {
      dispatch(addTodos(text));
      setAlert("")
    }
    else {
      setAlert("Add a todo")
    }

    console.log(todos)
  };

  const checkTodo = (id) => {
    dispatch(checkTodos(id))
  }

  const deleteTodo = (id) => {
    dispatch(deleteTodos(id))
  }

  return (
    <>
    <div>
      <h2>Todo List</h2>
      <h3>{alert}</h3>
      <ul>
        {todos.map((todo) => (
          <div>
            <li key={todo.id}
            style={{textDecoration: todo.completed ? "line-through" : "none"}}>
            {todo.text}
            </li>
            <button onClick={checkTodo}>Completed</button>
            <button onClick={deleteTodo}>Delete</button>
          </div>))}
      </ul>
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={addTodo}>Add Todo</button>
      <h3>Total todos: {todos.length}</h3>
        </div>
    </>
  );
};

export default App;
