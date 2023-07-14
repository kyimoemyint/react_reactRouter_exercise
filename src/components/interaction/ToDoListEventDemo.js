import { useState } from "react";

function InputContainer({addNewItem})
{
    
    let [title,setTitle] = useState('');
    let onAddHandler = () => {
        console.log('onclick handler happen');
        addNewItem(title);
    }

    return(
        <div>
            <input type="text"
                   value={title}
                   onChange={(event) => {setTitle(event.target.value)}}/>
            <button className="btn btn-secondary"
                    onClick={onAddHandler}>
                Add
            </button>
        </div>
    );
}

function ToDo({item,deleteItem,updateItem})
{
    const onDeleteHandler = () => {
        deleteItem(item);
    }

    const onUpdateHandler = () => {
        console.log('update handler fire',item);
        updateItem(item);
    }

    return(
        <div>
            {item.title}

            <button type={'button' }
                    className="btn btn-success"
                    onClick={onUpdateHandler}>
                Update
            </button>

            <button type={'button' }
                    className="btn btn-danger"
                    onClick={onDeleteHandler}>
                Delete
            </button>
        </div>
    );
}

function ToDoList({items,deleteItem,updateItem})
{
    return(
        <div>
            {items.map(item => <ToDo key={item.id}
                                     item={item}
                                     deleteItem={deleteItem}
                                     updateItem={updateItem}/>)}
        </div>
    );
}

                                    
export default function ToDoListEventDemo()
{
    let initialItem = [
        {
            id:1,
            title:'one' 
        },
        {
            id:2,
            title:'two'
        },
        {
            id:3,
            title:'three'
        }
    ];

    let [items,setItems] = useState(initialItem);

    
    const addNewItem = (title) => {
        let item = {
            id: items.length+1,
            title:title+ (items.length+1)
        };
        
        setItems([...items,item]);
    }

    const deleteItem = (eventItem) => {
        // console.log('ondelete handler', eventItem);
        const removedList = items.filter(item => item.id !== eventItem.id)
        console.log('removedList', removedList);
        setItems(removedList);
    }
    
    const updateItem = (eventItem) => {
        console.log(eventItem);
        let changeItem = items.map(item => item.id == eventItem.id ? {...item,title : 'change'} : item);
        setItems(changeItem);
    }

    return(
        <div>
            <InputContainer addNewItem={addNewItem}/>
            <ToDoList items={items}
                      deleteItem={deleteItem}
                      updateItem={updateItem}/>
            
        </div>
    );
}