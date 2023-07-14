function ToUpper(str)
{
    return str.toUpperCase();
}

function Sample({data,message="this is default"})
{
    console.log('data',data.title);
    return(
        <div>
            Sample {ToUpper(data.title)} {message}
        </div>
    )
}

function AnotherSample({title,message})
{
    return(
        <div>
            Title {title}
            <br/>
            Message {message}
        </div>
    );
}

export default function JsxProperty()
{
    let avatar = {
        title : 'something',
        message : 'hello'
    }
    return(
        <div>
            Demo
            <Sample data={avatar} 
                    message="this is not default"/>
            <AnotherSample {...avatar}/>
        </div>
    )
}
