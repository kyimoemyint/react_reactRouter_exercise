const PropTypes = require('prop-types');

function FunGreeting({message})
{
    return(
        <div>
            <h1>Greeting {message}</h1>
        </div>
    )
}

FunGreeting.propTypes = {
    message : PropTypes.string.isRequired
}

export default FunGreeting;