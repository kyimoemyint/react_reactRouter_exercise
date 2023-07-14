import React from "react";
export default function MyButton({click,count})
{
   
    
    return(
        <>
            <button onClick={click}>
                count{count}
            </button>
        </>
    )
}