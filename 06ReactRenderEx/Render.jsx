import React , { Component } from 'react';

class Test extends Component{
    state = {
        counter : 0,
    };

    onClick = () => {
        this.setState({

        });
    };

    render(){
        return(
            <div>
                <button onClick = {this.onClick}>클릭</button>
            </div>
        )
    };
}

export default Test