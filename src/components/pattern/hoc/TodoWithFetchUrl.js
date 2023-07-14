import useFetchUrl from "./ueFetchUrl";

export default function TodoWithFetchUrl()
{
    const [loading,data] = useFetchUrl('https://jsonplaceholder.typicode.com/todos/');
    return(
        <div>
            TodoWithFetchUrl
            {
                loading ? <h2>Loading......</h2> : null
            }
            {
                data.map((todo) => {
                    return(<div key={todo.id}>
                        {todo.title}
                    </div>);
                })
            }
        </div>
    );
}