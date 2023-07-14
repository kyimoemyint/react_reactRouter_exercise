import React from "react";

export default class LifeCycleTwo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count : 0
        }
        this.btnHandler = this.btnHandler.bind(this);
        console.log('life cycle two constructor');
    }

    btnHandler()
    {
        this.setState({
            count : this.state.count +1
        })
    }

    shouldComponentUpdate(nextState)
    {
        console.log('component should update'); 
        return nextState.count != this.state.count;
        // return true;
    }

    getSnapshotBeforeUpdate()
    {
        console.log('get snapshot before update');
        return null;
    }

    componentDidMount()
    {
        console.log('component did mount');
    }

    componentDidUpdate()
    {
        console.log('component did update');
    }

    render()
    {
        console.log('life cycle two render');
        return(
            <div>
                Life Cycle
                counter {this.state.count}
                
                <button type="button"
                        className="btn btn-success"
                        onClick={this.btnHandler}>
                    +++
                </button>
            </div>
        )
    }
}