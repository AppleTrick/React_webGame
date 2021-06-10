import React , { Component } from 'react';
// 합치는 게 가능const { Component } = React;
import Try from './Try';

function getNumbers() { // 숫자 4개를 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];

    for (let i = 0; i < 4; i++) {
        const choose = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(choose);
    }

    return array;
}

class NumberBaseball extends Component{
    state = {
        result : '',
        value : '',
        answer : getNumbers(),
        tries : [], // push 쓰지 안됨,
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        //  정답일 경우
        if(this.state.value === this.state.answer.join('')){
            this.setState({
                result:'홈런',
                tries: [...this.state.tries, { try : this.state.value, result: '홈런!'}],
                // 옛날것과 새로운걸 넣어준다.
            });
            alert('정답입니다. 게임을 다시시작합니다.');
            this.setState({
                value : '',
                answer : getNumbers(),
                tries: [],
            });
        // 실패일 경우
        }else{
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;

            if(this.state.tries.length >= 9){
                this.setState({
                    result : `10번 넘게 틀렷다 ! 답은 ${answer.join(',')} 입니다`,
                });
                alert('게임을 다시시작합니다.');
                this.setState({
                    value : '',
                    answer : getNumbers(),
                    tries: [],
                });
            }else{
                for(let i = 0; i < 4; i++){
                    if(answerArray[i] === this.state.answer[i]){
                        strike += 1;
                    }else if (this.state.answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                this.setState({
                    tries : [...this.state.tries, { try : this.state.value, result : `${strike} 스트라이크 ${ball} 볼 입니다.`}],
                    value : '',
                });
            }
        }
    };

    onChangeInput = (e) =>{
        console.log(this.state.answer)
        this.setState({
            value : e.target.value,
        })
    }
    
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
                    {/* {this.fruits.map((v,i) => {
                        return(
                            <Try key={v.fruit+v.taste} value={v} index={i}/>
                        );
                    })} */}
                    {this.state.tries.map( (v,i) => {
                        return(
                            <Try key={`${i+1}차 시도 : `} tryInfo = {v}/>
                        )
                    })}
                </ul>
            </>
        )
    }
}

// default는 하나만 가능
export default NumberBaseball;  // import NumberBaseball
// module.exports 는 엄밀히는 다르다.