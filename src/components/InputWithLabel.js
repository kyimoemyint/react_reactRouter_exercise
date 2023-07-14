import React from "react";
export default function InputWithLabel({onInputChange,value,id,label,type,isFocused,children})
{
    const inputRef = React.useRef(); //A
    //C
    React.useEffect(() => {
      if (isFocused && inputRef.current) {
      // D
      inputRef.current.focus();
        }
    }, [isFocused]);
    return(
      <>
        {children}
        <label htmlFor={id}>{label}</label><br/>
        <input id={id} 
               type={type}
               ref={inputRef} //B
               value={value} 
               isFocused    //isFocused is true
               onChange={onInputChange}/>
      </>
    );
}

