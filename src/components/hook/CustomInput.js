import { forwardRef, useRef } from 'react';

// function MyInput(props) {
//   return <input {...props} />;
// }

const MyInput = forwardRef((props,ref) => {
    console.log('props' , props);
    return <input {...props} ref={ref}/>
})

export default function CustomInput()
{
    const inputRef = useRef(null);

    function handleClick() 
    {
        inputRef.current.focus();
        inputRef.current.style.opacity = 0.5;
    }

    return(
        <div>
            Custom Input
            <MyInput ref={inputRef}/>
            <button onClick={handleClick}>
                Focus
            </button>
        </div>
    );
}