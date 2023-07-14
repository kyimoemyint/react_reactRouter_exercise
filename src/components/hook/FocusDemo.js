import { useRef } from "react";

export default function FocusDemo()
{
    const inputRef = useRef(null);
    const onFocusHandler = () => {
        console.log('focus handler', inputRef.current);
        inputRef.current.focus();

        //bad uscase
        console.log('inputRef value ', inputRef.current.value);
        inputRef.current.value = 'something change';

    }
    return(
        <div>
            {/* <label ref={inputRef}
                   onClick={onFocusHandler}>something</label> */}

            <input type="text"
                   ref={inputRef}/>

            <button className="btn btn-success"
                    type="button"
                    onClick={onFocusHandler}>
                Focus
            </button>
        </div>
    );
}