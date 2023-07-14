import { useMemo, useState } from "react";

function factorial(n)
{
    let result = 1;
    for(let i = 1;i<=n;i++)
    {
        result *= i;
    }
    return result;
}

export default function MemoDemo()
{
    const [factInput,setFactInput] = useState('');
    const fact = useMemo(() => factorial(factInput),[factInput]);       //cache the factInput
    const btnHandler = () => {
        console.log('btn happen'); 
        setFactInput(5);
    };
    console.log('re render');
    return(
        <div>
            Memo Demo
            <input type="text"
                    value={factInput}
                    onChange={e => setFactInput(e.target.value)}>
            </input>
            <button type="button"
                    className="btn btn-primary"
                    onClick={btnHandler}>
                        Compute
            </button>

            Result {fact}
        </div>
    );
}