import { useContext, useState } from "react"
import { ContextData } from "./ContextData"

function Child2()
{
    const level = useContext(ContextData);
    return <div>
       <h1> Child2 : {level}</h1>
    </div>
}

function Child1()
{
    return <div>
        Child1
        <Child2/>
    </div>
}

export default function ContextDemo()
{
    let [data,setData] = useState('<<data from parent>>');
    const btnHandler = () => {
        setData('<<change by button>>');
    }
    return(
        <div>
            <ContextData.Provider value={data}>
                data from context {1}
                <Child1/>
            </ContextData.Provider>

            <button className="btn btn-success"
                    onClick={btnHandler}>
                change
            </button>
        </div>
    )
}