import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);
//   console.log('ref', ref);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);

  return <input {...props} ref={inputRef} />;
});

export default function ImperativeHandleDemo()
{
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
        // This won't work because the DOM node isn't exposed:
        // ref.current.style.opacity = 0.5;
    }

    return (
        <form>
        <MyInput label="Enter your name:"
                 ref={ref} />

        <button type="button"
                className='btn btn-primary'
                onClick={handleClick}>
            Edit
        </button>
        </form>
    );
}