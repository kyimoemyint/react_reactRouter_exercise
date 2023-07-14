import { useContext, useEffect, useReducer, useState } from "react";
import { TodoItemContext,TodoDispatchContext } from "./TodoContextEffectFetching";
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
        case 'LOAD_TO_DO':
            return action.payload;
        case 'ADD_TO_DO':
            return [...state,action.payload];
        case 'DELETE_TO_DO':
            return state.filter(todo => todo.id !==  action.payload.id);
        case 'UPDATE_TO_DO':
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
    }
    return state;
}

function ToDoItem({todo})
{
    const dispatch = useContext(TodoDispatchContext);
    const [editMode,setEditMode] = useState(false);
    const [todoTitle,setTodoTitle] = useState(todo.title);

    const editClickHandler = () => {
        if(editMode)
        {
            let itemToUpdate = {
                    id:todo.id,
                    title: todoTitle
            };
            console.log('item to update ', itemToUpdate);

            dispatch({
                type: 'UPDATE_TO_DO',
                payload: itemToUpdate
            });
        }
        setEditMode(!editMode);     //true 
    }

    const onDeleteHandler = () => { 
        console.log(todo);

        dispatch({
            type: 'DELETE_TO_DO',
            payload: todo
        });
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
                        onClick={onDeleteHandler}>
                    Delete
            </button>
        </div>
    )
}

function TodoEntry()
{
    const dispatch = useContext(TodoDispatchContext);
    const [newTodoItem,setNewTodoItem] = useState('');

    const addToDoHandler = () => {
        let todoItem = {
            id: uuidv4(),
            title: newTodoItem
        }

        dispatch({
            type: 'ADD_TO_DO',
            payload : todoItem
        });
        setNewTodoItem('');
    }

    return(
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
    )
}

function TodoList()
{
    const todos = useContext(TodoItemContext); //useContext for data communication
    
    return(
        <div>
            <TodoEntry/>
            {
                todos.map(todo => <ToDoItem key={todo.id}
                                            todo={todo}
                                            // deleteToDoHandler={deleteToDoHandler}
                                            // updateToDoHandler={updateToDoHandler}
                                            />)
            }
        </div>
    )
    
}

function TodoCounter()
{
    const todos = useContext(TodoItemContext);
    return(
        <div>
            <h1>Total Todo Count {todos.length}</h1>
        </div>
    )
}

function useLoadApi(dispatch,src)       //reusable hook
{
    useEffect(() => {
        console.log('fetch from api');
        fetch(src) 
        .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'LOAD_TO_DO',
                    payload:json
                });
            });
    },[]);
}

export default function TodoListWithContextEffectFetching()
{
    const [state,dispatch] = useReducer(reducer,initialState);          //REDUCER
    
    useLoadApi(dispatch,'https://jsonplaceholder.typicode.com/todos');
    console.log('rendering');
    return(
        <div>
            Todo list with context
            <TodoItemContext.Provider value={state}>
                <TodoDispatchContext.Provider value={dispatch}>
                    <TodoList/>
                    <TodoCounter/>
                </TodoDispatchContext.Provider>
            </TodoItemContext.Provider>
        </div>
    )
}