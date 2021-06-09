const React = require('react')
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('박창희');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const inputRef = useRef(null)

    // 클래스는 변수 단위로 저장시키기
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length-1] === value[0]) {
            setResult('정답');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setWord('');
            inputRef.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value)
    }
    
    return (
        <>
            <div>{word}</div>
            <form onSubmit= {onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요</label>
                <input id="wordInput" className="wordinput" ref={inputRef} value={value} onChange={onChangeInput}/>
                {/* value와 onChange 와는 세트 아니면 defaultvalue를 해야된다. */}
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );
    
}

module.exports = WordRelay;