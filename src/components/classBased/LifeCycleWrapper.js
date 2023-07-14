import { useState } from "react";
import LifeCycleDemo from "./LifeCycleDemo";

export default function LifeCycleWrapper()
{
    const [input,setInput] = useState();
    return(
        <div>
            <input type="text"
                   value={input}
                   onChange={(e) => setInput(e.target.value)}/>
            <LifeCycleDemo initial={input}/>
        </div>
    )
}