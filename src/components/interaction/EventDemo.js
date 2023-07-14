export function ParentEvent()
{
    let btnHandler = () => {
        console.log('btn click happen');
    }
    return(
        <div>
            <EventDemo btnHandler={btnHandler}/>
        </div>
    );
}

export default function EventDemo({btnHandler})
{
     
    return(
        <div>
            <button className="btn btn-secondary"
                    onClick={btnHandler}>
                Click Me
            </button>
        </div>
    );
}