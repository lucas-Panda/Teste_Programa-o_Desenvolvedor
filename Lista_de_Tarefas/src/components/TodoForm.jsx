import {useState} from 'react'

function TodoForm({addTodo}) {
    const[value, setValue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!value) return;
        addTodo(value);
        setValue("");
    };

  return (
  <div className="todo-form">
    <h2>Criar tarefa:</h2>
    <form className='formTodo' onSubmit={handleSubmit} >
        <input 
        type="text" 
        placeholder='Digite o Titulo'
        value={value}
        onChange={(e) => setValue(e.target.value)} 
        />
        <button type='submit'>Adicionar</button>
    </form>
  </div>
  );
};

export default TodoForm