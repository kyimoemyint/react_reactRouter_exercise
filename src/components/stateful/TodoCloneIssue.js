import { useState } from "react"
import { useImmer } from "use-immer";

export default function TodoCloneIssue()
{
    const [person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });

    let [todo,setTodo] = useState({
        title : 'task 1',
        completed : true
    });

    return(
        <div>
            <h1><span style={{color : 'darkgoldenrod'}}>person artwork city </span>{person.artwork.city}</h1>
            <h1>{todo.title}</h1>
            <h2>{todo.completed + ''}</h2>
            <button className="btn btn-success"
                    onClick={() => {
                        setTodo({...todo,completed : false});
                        updatePerson(person => {person.artwork.city = 'mandalay';});
                        }}>
                Update Complete
            </button>
        </div>
    )
}