import React from 'react';
import './App.css';

function ToDo( {todo, toggleTask, removeTask} ) {
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? "item-text strike" : "item-text"}
              onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className='item-delete' onClick={() => removeTask(todo.id)} style={{float: 'right'}}>
            <button> X </button>
            </div>
        </div>
    )
}

export default ToDo