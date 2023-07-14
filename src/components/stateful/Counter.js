import { useState } from "react";

export default function Counter()
{
    let [count,setCount] = useState(0);
    let [positive,setPositive] = useState(true);

    const countHandler = () => {
        console.log('count Handler');
        console.log('positive', positive);
        positive ?  setCount(count+1) : setCount(count-1)
    }
    const toggle = () => {
        console.log('toggle happen');
        setPositive(!positive);
    }

    return(
        <div>
            Counter {count}
            <button type={'button'}
                    className="btn btn-secondary"
                    onClick={countHandler}>
                +
            </button>

            <button type={'button'}
                    className="btn btn-secondary"
                    onClick={toggle}>
                Toggle
            </button>
        </div>
    );
}