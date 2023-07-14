import React from "react";

function Todo({todo})
{
    let btnClickHandler = () => console.log('btn click happen');
    return(
        <li>
            {todo.title} <button 
                                className="btn btn-secondary"
                                onClick={btnClickHandler}>
                                    click me
                         </button>
        </li>
        
    )
}

export default function ListDemo()
{
    let todos = [
        {
            id : 1,
            title : 'one'
        },
        {
            id : 2,
            title : 'two'
        },
        {
            id : 3,
            title : 'three'
        }
    ]

    return(
        <div>
            To Do List
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo}/>)
                }
        </div>
    )
}