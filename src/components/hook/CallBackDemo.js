import { useDebugValue } from "react";
import { useCallback, useMemo, useState } from "react";
import * as React from 'react';

function Child({callbackFromParent})
{
    console.log('child render');
    return(
        <div>
            Child
            <button className="btn btn-primary"
                    onClick={callbackFromParent}>
                CallbackFromParent
            </button>
        </div>
    );
}

let previousCallback;
let CachedChild =  React.memo(Child);

function useCustomDebug()
{
     useDebugValue('Debug message');
}

export default function CallBackDemo()
{
    useCustomDebug();
    const [state,setState] = useState('hello');
    console.log('parent render');

    const callbackFromParent = useCallback(() => {
        console.log('parent call back');
    },[]);

    console.log('previous callback == parent callback', previousCallback==callbackFromParent);
    previousCallback = callbackFromParent;

    const changeStateHandler = () => {
        setState(new String('something'));
    }
    return(
        <div>
            Call Back Demo
            <CachedChild callbackFromParent={callbackFromParent}/>

            <button type="button"
                    className="btn btn-secondary"
                    onClick={changeStateHandler}>
                        Change State
            </button>
        </div>
    );
}