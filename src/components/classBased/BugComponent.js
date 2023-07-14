import React from "react";

export default class BugComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        throw  Error('something went wrong');
        return(
            <div>Bug Component</div>
        );
    }
}