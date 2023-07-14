import { useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id:1,
        title: 'task 1'
    },
    {
        id:2,
        title: 'task 2'
    }
];

function reducer(state,action)
{
    switch(action.type)
    {
        case 'ADD_TO_DO':
            return [...state,action.payload];
        case 'DELETE_TO_DO':
            return state.filter(todo => todo.id !==  action.payload.id);
        case 'UPDATE_TO_DO':
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
    }
    return state;
}

function ToDoItem({todo,deleteToDoHandler,updateToDoHandler})
{
    const [editMode,setEditMode] = useState(false);
    const [todoTitle,setTodoTitle] = useState(todo.title);

    const editClickHandler = () => {
        if(editMode)
        {
            updateToDoHandler({
                id:todo.id,
                title: todoTitle
            })
        }
        setEditMode(!editMode);     //true 
    }
    return(
        <div style={{"marginTop" : "10px"}}>
            {
                !editMode && <span>
                                    {todo.title} 
                             </span>
            }&nbsp;

            {
                editMode && <input type="text"
                                   value={todoTitle}
                                   onChange={event => setTodoTitle(event.target.value)}
                                   
                            />
            }&nbsp;

            <button type="button"
                    className="btn btn-danger"
                    onClick={editClickHandler}>
                        {editMode == false ? 'Edit' : 'Update'}
            </button> &nbsp;

            <button type="button"
                        className="btn btn-danger"
                        onClick={() => deleteToDoHandler(todo)}>
                    Delete
            </button>
        </div>
    )
}

export default function ToDoWithReducer()
{
    const [state,dispact] = useReducer(reducer,initialState);
    const [newTodoItem,setNewTodoItem] = useState('');

    const addToDoHandler = () => {
        let todoItem = {
            id: uuidv4(),
            title: newTodoItem
        }
        dispact({
            type: 'ADD_TO_DO',
            payload : todoItem
        });
        setNewTodoItem('');
    }

    const deleteToDoHandler = (todoItem) => {
        
        dispact({
            type : 'DELETE_TO_DO',
            payload: todoItem
        })
    }
    const updateToDoHandler = (todoItem) => {
        dispact({
            type : 'UPDATE_TO_DO',
            payload: todoItem
        })
    }

    return(
        <div>
            <div>
                <input type="text"
                       value={newTodoItem}
                       onChange={event => setNewTodoItem(event.target.value)}
                /> &nbsp;

                <button type="button"
                        className="btn btn-success"
                        onClick={addToDoHandler}>
                    Add
                </button> &nbsp;
            </div>
            {
                state.map(todo => <ToDoItem key={todo.id}
                                            todo={todo}
                                            deleteToDoHandler={deleteToDoHandler}
                                            updateToDoHandler={updateToDoHandler}/>)
            }
        </div>
    )
}