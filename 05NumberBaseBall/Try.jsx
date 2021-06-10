import React, {Component} from 'react';

class Try extends Component {
    const { tryInfo } = this.props;
    render() {
        return (
            <li>
                <div>{this.props.tryInfo.try}</div>
                <div>{this.props.tryInfo.result}</div>
            </li>
        )
    }
}

export default Try;