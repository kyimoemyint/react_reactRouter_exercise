import { useState } from "react"

export default function CounterTwo()
{
    let [num,setNum] = useState(0);
    let btnAdd = () => {
        setNum(n => n+1);           //queue
        setNum(n => n+1);
        setNum(n => n+1);
        // setNum(6);
    }
    return(
        <div>
            {num}
            <button type={'button'}
                    className="btn btn-success"
                    onClick={btnAdd}>
                +3
            </button>
        </div>
    )
}