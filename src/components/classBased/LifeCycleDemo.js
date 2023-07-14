import React from "react";

export default class LifeCycleDemo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            initial : this.props.initial,
            count : this.props.initial,     //count is property derive state 
            message : 'state message'
        };
        this.btnHandler = this.btnHandler.bind(this);
    }
    
    btnHandler()
    {
        console.log('btn Handler');
        this.setState({
            count : this.state.count+1
        },() => console.log('After setState', this.state.count));
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('get derived state from props',props,'state',state);
        if(props.initial !== state.initial)         //condition to update state
        {
            console.log('property have been change');
            return{
                initial : props.initial,        
                count : props.initial 
            }
        }
        else
        {
            return null;
        }
    }

    componentDidMount(){
        console.log('Did Mount');
    }

    componentWillUnmount(){
        console.log('Will Un Mount');
    }

    render()
    {
        console.log('Render');
        return(
            <div>
                Life Cycle
                counter {this.state.count}
                <div>Message {this.state.message}</div>
                <button type="button"
                        className="btn btn-success"
                        onClick={this.btnHandler}>
                    +++
                </button>
            </div>
        );
    }
}