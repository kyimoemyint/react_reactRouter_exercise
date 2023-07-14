import { useReducer } from "react";

const initialState = {
    count : 0
}

function reducer(state,action)
{
    switch(action.type)
    {
        case 'INC_COUNTER':
            return {count : state.count +1};
        case 'DEC_COUNTER':
            return {count : state.count - 1};
        default:
            return new Error();
    }
}

export default function ReducerCounter()
{
    console.log('reducer counter render');
    const [state,dispact] = useReducer(reducer,initialState);

    const incHandler = () => {
        dispact({
            type : 'INC_COUNTER'
        });
    };

    const decHandler = () => {
        dispact({
            type : 'DEC_COUNTER'
        });
    };

    return(
        <div>
            <button className="btn btn-danger"
                    onClick={decHandler}>
                -
            </button>
            Reducer Counter {state.count}
            <button className="btn btn-success"
                    onClick={incHandler}>
                +
            </button>
        </div>
    )
}