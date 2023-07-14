import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function FlushSync()
{
    console.log('Render');
    const [count,setCount] = useState(0);
    let ref = useRef();
    function handleClick()
    {
        // setCount(c => c +1);
        // console.log('after set count', count);      //prove of asynchrous
        // setCount((count) => {
        //     let update = count+1;
        //     console.log('call back count',update);
        //     return update;
        // });
        
        flushSync(() => {
            setCount(count + 1);
            // ref.current.focus();
            
        });
        console.log('count after flushSync',ref.current.value);
        
        
    }
    return(
        <div>
            Flush Sync
            <button type="button"
                    className="btn btn-primary"
                    onClick={handleClick}>
                Set Count
            </button>
           <input value={count} ref={ref}/>
        </div>
    );
}