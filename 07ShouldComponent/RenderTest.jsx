import React , {Component} from 'react';
class Test extends Component {

    state = {
        counter : 0,
    }

    shouldComponentUpdate(nextProps, nextState, nextContext){

        // 직접 어떤 조건일 때 렌더링을 해줘야 하는지 적어준다.
        if(this.state.counter !== nextState.counter){
            // 이전 counter 값과 다음 counter 결과 값이 다르면 리렌더링 시키고 아닐경우 렌더링 시키지 않는다.
            return true;
        }
        return false;
    }
    onClick = () => {
        this.setState({

        })
    }

    render() {
        console.log('렌더링',this.state);
        return(
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default Test;