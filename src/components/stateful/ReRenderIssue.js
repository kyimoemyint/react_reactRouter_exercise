import { useState } from "react"

export default function ReRenderIssue()
{
    let [number,setNumber] = useState([]);
    return(
        <div>
            <h1>{number.length}</h1>
            <button className="btn btn-success"
                    onClick={() => {
                        // number.push(100);
                        setNumber([...number,100]);
                    }}>
                +1
            </button>
        </div>
    )
}