import { useState } from 'react'
import "./App.css";

import Todo from "./components/Todo"
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Terminar as 5 tarefas em JavaScript",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir para a academia",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      isCompleted: false,
    },
  ]);


  const addTodo = (text) =>{

    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random()*10000),
        text,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) =>{
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo)=>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  }

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  return (
  <div className='app'>
    <TodoForm addTodo = {addTodo} />
    <h1>Lista de Tarefas</h1>

    <Search search={search} setSearch={setSearch} />
    <Filter filter = {filter} setFilter = {setFilter} setSort = {setSort} />

    <div className='todo-list'>
      {todos
      .filter((todo) => 
        filter === "All" 
          ? true 
          : filter === "Completed" 
          ? todo.isCompleted 
          : !todo.isCompleted
      )

      .filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a,b) => 
        sort === "Asc" 
      ? a.text.localeCompare(b.text)
      : b.text.localeCompare(a.text)
      )
      .map((todo) => (
        <Todo 
          key={todo.id} 
          todo = {todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo} 
        />
      ))}
    </div>

  </div>)
}

export default App
