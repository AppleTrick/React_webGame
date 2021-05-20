const React = require('react');
const { useState, useRef} = React;

const GuguDan = () => {
    // 컴포넌트 안에 넣어 줘야 한다. state 선언 방식
    // use 로 시작되는 것이 hooks를 사용한것
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9 ));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9 ));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    //ref의 사용 방법
    const inputRef = useRef(null);

    const onSubmitForm = (e) =>{
        e.preventDefault();
        if(parseInt(value) === first * second){
            setResult('정답 : ' + value);
            setFirst(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue('');
            inputRef.current.focus();
        }else{
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }

    // 이벤트 리스너는 클래스 메소드가 없어서 사용 불가능
    const onChangeInput = (e) => {
        setValue(e.target.value);
    }
    // 스테이트가 바뀔때 마다 계속 함수가 실행된다.
    
    // 비동기이기 때문에 console.log가 한번만 찍힌다.
    console.log('렌더링')

    return (
        <>
            <div> {first} 곱하기 {second} 는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} type="number" onChange={onChangeInput} value={value}/>
                <button>입력!</button>    
            </form>
            <div id="result"> {result}</div>
        </>
    );
}

module.exports = GuguDan;