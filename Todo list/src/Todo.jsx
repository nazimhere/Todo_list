import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    const [todos, setTodos] = useState([{ text: "sample task", id: uuidv4(),done:false }]);
    const [newTodo, setNewTodo] = useState("");

    const addNewTask = () => {
        if (newTodo.trim() === "") return; // Prevent empty todos
        setTodos((prevTodos)=>
[...prevTodos, { text: newTodo.trim(), id: uuidv4() }]);
        
       setNewTodo(""); 
        
        // Clear input
    };

    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deletetask=(id)=>{
       setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id));
    }

   const done = (id) => {
  console.log("Marking done:", id);
  setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id 
        ? { ...todo, done: true }  // Just set to true
        : todo
    )
   
  );
};

    return (
        <div>
            <input 
                placeholder="enter to do list element" 
                value={newTodo} 
                onChange={updateTodoValue}
            />
            <button onClick={addNewTask}>submit</button>

            <br /> <br /> <br />
           <h3>To Do list</h3>
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>
      <span style={{ 
        textDecoration: todo.done ? 'line-through' : 'none' 
      }}>
        {todo.text}
        &nbsp;&nbsp;
        <button onClick={() => deletetask(todo.id)}>Delete</button>
        &nbsp;&nbsp;
        <button onClick={() => done(todo.id)}>Done</button>
      </span>  
    </li>
  ))}
</ul>

        </div>
    );
}
