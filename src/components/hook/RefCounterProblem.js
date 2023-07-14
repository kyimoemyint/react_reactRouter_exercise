import { useState, useRef } from 'react';

export default function RefCounterProblem()
{
    const [show, setShow] = useState(true);
    const ref = useRef(null);
    return(
        <div>
            RefCounterProblem
            <button
                className='btn btn-primary'
                onClick={() => {
                console.log(setShow(!show),show);
                }}>
                Toggle with setState
            </button>
            <button
                className='btn btn-primary'
                onClick={() => {
                ref.current.remove();
                }}>
                Remove from the DOM
            </button>
            {show && <p ref={ref}>Hello world</p>}
        </div>
    );
}