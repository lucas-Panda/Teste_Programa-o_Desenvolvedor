import React, { useEffect, useState } from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
    const[buttonText, setButtonText] = useState('Concluir');

    useEffect(() => {
        setButtonText(todo.isCompleted ? "Desfazer" : "Concluir");
    }, [todo.isCompleted])

    const clickFeito = (id) => {
        completeTodo(id);
    }
  return (
    <div 
        className='todo'
        style={{backgroundColor: todo.isCompleted ? 'green' : ''}}
    >
        <div className="content">
        <p>{todo.text}</p>
        </div>
        <div>
        <button className='complete' 
        onClick={() => clickFeito(todo.id)}>
            {buttonText}
        </button>

        <button className='remove' 
        onClick={() => removeTodo(todo.id)}>
            X
        </button>
        </div>
    </div>
  );
};

export default Todo