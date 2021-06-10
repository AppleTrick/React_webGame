import React , { Component } from 'react';
// 합치는 게 가능const { Component } = React;
import Try from './Try';

function getNumbers() { // 숫자 4개를 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component{
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries : [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () =>{

    }

    fruits = [
        { fruit : '사과', taste : '맛있다'},
        { fruit : '감', taste : '떫다'},
        { fruit : '귤', taste : '시다'},
        { fruit : '배', taste : '달다다'},
    ];
    
    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                    {/* <input maxLength={4} defaultValue = {this.state.value}> */}
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {/* 배열형식 */}
                    {/* { ['사과','배','바나나','포도'].map((v) => {
                        return (
                            <li>{v}</li>
                        );
                    }) } */}

                    {/* 오브젝트 형식 */}
                    {this.fruits.map((v,i) => {
                        return(
                            <Try key={v.fruit+v.taste} value={v} index={i}/>
                        );
                    })}
                </ul>
            </>
        )
    }
}

// default는 하나만 가능
export default NumberBaseball;  // import NumberBaseball
// module.exports 는 엄밀히는 다르다.