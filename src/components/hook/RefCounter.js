import { useRef, useState } from "react";

export default function RefCounter()
{
    const [state,setState] = useState();
    let count = useRef(0);
    
    const incCount = () => {
        count.current ++;
        console.log('count is ', count.current);
    };
    console.log('ref counter render');

    const forceRender = () => {
        setState(count);
    }
    return(
        <div>
            <h1>Count{count.current}</h1>
            <button type="button"
                    className="btn btn-primary"
                    onClick={incCount}>
                        Inc
            </button>

            <button type="button"
                    className="btn btn-primary"
                    onClick={forceRender}>
                        Render
            </button>
        </div>
    )
}