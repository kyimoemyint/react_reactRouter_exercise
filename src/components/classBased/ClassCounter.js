import React from "react";

export default class ClassCounter extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            count : 0,
            message : 'this is message'
        };
        this.btnHandler = this.btnHandler.bind(this);
    }

    btnHandler()
    {
        console.log('btn handler',this);
        this.setState({
            count : this.state.count +1
        },() => console.log('after set state change ',this.state.count));
    }

    render()
    {
        return(
            <div>
                Counter {this.state.count}
                <h2>Message {this.state.message}</h2>
                <button type="button"
                        className="btn btn-success"
                        onClick={this.btnHandler}>
                    +
                </button>
            </div>
        );
    }
}