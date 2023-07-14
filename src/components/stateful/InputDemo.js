import { useState } from "react"

export default function InputDemo()
{
    const [name,setName] = useState('');
    const [error,setError] = useState('');
    console.log('InputDemo Render');

    const isStartWithUpperCase = (str) => {
        let initial = String(str).charAt(0);
        return initial.toUpperCase() === initial;
    }

    const onClickHandler = () => {
        console.log('onclickhandler',name, 'name start with upperCase ', isStartWithUpperCase(name));
        !isStartWithUpperCase(name) ? setError('Name does not start with UpperCase') : setError('');

    }

    const onChangeHandler = (event) => {
        setName(event.target.value);
        setError('');
    }
    return(
        <div>
            <input type={"text"}
                   className={"form-input"}
                   value={name}
                   onChange={event => onChangeHandler(event)}/>
            <button type={"button"}
                    className="btn btn-primary"
                    onClick={onClickHandler}>
                Submit
            </button>
            {error && <h4 className="alert alert-danger">{error}</h4>}
        </div>
    );
}