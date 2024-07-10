import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodos, deleteTodos } from "./redux/todosSlice";



const App = () => {

  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");
  const [alert, setAlert] = useState("")
  const dispatch = useDispatch()
  let length = todos.length;
  

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (text) {
      dispatch(addTodos(text));
      setAlert("")
    }
    else {
      setAlert("Add a todo")
    }

  };

  
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
          
            <li key={todo.id}
            style={{textDecoration: todo.completed ? "line-through" : "none"}}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
            
          ))}
      </ul>
      <input name="input" type="text" value={text} onChange={handleChange}/>
      <button onClick={addTodo}>Add Todo</button>
      <h3>Total todos: {length}</h3>
        </div>
    </>
  );
};

export default App;
