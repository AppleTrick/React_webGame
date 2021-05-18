// 내용 분리할때 쓰이는 애들을 반드시 불러와야 한다.
const React = require('react');
const { Component } = React

class WordRelay extends Component {
    state ={
        text : '웹팩 시작해봤어요'
    };

    render() {
        return <h1>{this.state.text}</h1>
    };
}

// 파일을 쪼갤 경우 반드시 적어줘야한다.
// 쪼갠 파일을 밖에서도 사용할 수 있게 만들어주는것
// module.exports 를 통해 client.jsx에서 불러올 수 있다.
module.exports = WordRelay;