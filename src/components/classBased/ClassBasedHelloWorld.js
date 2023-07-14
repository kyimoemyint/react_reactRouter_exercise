import React from "react";

class ChildOne extends React.Component
{
    render()
    {
        return(
            <div>
                Child One
            </div>
        );
    }
}

function ChildTwo()
{
    return(
        <div>
            Child Two
        </div>
    );
}
export default class ClassBasedHelloWorld extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log('hello world constructor');
    }
    toUpper(str)
    {
        return str.toUpperCase();
    }
    render()
    {
        console.log('render',this.props.children);
        return(
            <div>
                <h1>ClassBasedHelloWorld {this.toUpper(this.props.message)}</h1>
                <ChildOne/>
                <ChildTwo/>
            </div>
        );
    }
}